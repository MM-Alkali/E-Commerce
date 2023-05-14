import { Request, Response } from "express";
import {
  registerSchema,
  option,
  GenerateSalt,
  HashedPassword,
} from "../utils/utility";
import { GenerateOtp, emailHtml, sendEmail } from "../utils/notification";
import { FROM_ADMIN_MAIL, USER_SUBJECT } from "../config";
import { UserModel, UserAttributes } from "../model/userModel";
import { v4 as uuidv4 } from "uuid";

/* =============== Register ============== */
export const Register = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirm_password,
    } = req.body;

    const id = uuidv4();
    const validateResult = registerSchema.validate(req.body, option);

    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }

    //generate salt
    const salt = await GenerateSalt();
    const userPassword = await HashedPassword(password, salt);

    //generate otp
    const { otp, expiry } = GenerateOtp();

    //check if user exists
    interface IKey {
      [key: string]: string;
    }
    const User = ((await UserModel.findOne({
      where: { email },
    })) as unknown) as IKey;

    //create user
    if (!User) {
      const user = await UserModel.create({
        id,
        email,
        password: userPassword,
        firstName,
        lastName,
        salt,
        address: "",
        phone,
        otp,
        otp_expiry: expiry,
        lng: 0,
        lat: 0,
        verified: false,
        role: "buyer",
      });

      // send email
      const html = emailHtml(otp);
      await sendEmail(FROM_ADMIN_MAIL, email, USER_SUBJECT, html);

      // send sms

      return res.status(200).json({
        message: "User created successfully",
        success: true,
        user,
      });
    }
    return res.status(400).json({
      Error: "Email already exists",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      Error: "internal server error",
      route: "/users/signup",
    });
  }
};

/**==========================OTP VERIFICATION BY EMAIL =============== */

export const verifyUserOTP = async (req: Request, res: Response) => {
  try {
    // Check if the user is a registered user
  const { email, otp } = req.body;
  if(!email || !otp){
    return res.status(400).json({
      Error:"Email or otp is empty"
  })
  }
  const User = ((await UserModel.findOne({
    where: { email },
  })) as unknown) as UserAttributes;

  if (User && User.otp) {
    if (User.otp === parseInt(otp) && User.otp_expiry >= new Date()) {
      const updateuser = ((await UserModel.update(
        {
          verified: true,
        },
        { where: { email } }
      )) as unknown) as UserAttributes;

      if(updateuser){
        const User =await UserModel.findOne({where:{email}}) as unknown as UserAttributes;
        
        return res.status(200).json({
            message:"Your have successfully verified your account",
            verified:User.verified
        })

      }
    }
  }
  return res.status(400).json({
    Error:"Invalid Otp"
})
  } catch (error) {
    return res.status(500).json({
        Error:"Internal Server Error",
        route: "/users/verify"
    })
  }
};
