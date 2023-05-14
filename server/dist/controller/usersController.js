"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserOTP = exports.Register = void 0;
const utility_1 = require("../utils/utility");
const notification_1 = require("../utils/notification");
const config_1 = require("../config");
const userModel_1 = require("../model/userModel");
const uuid_1 = require("uuid");
/* =============== Register ============== */
const Register = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, confirm_password, } = req.body;
        const id = (0, uuid_1.v4)();
        const validateResult = utility_1.registerSchema.validate(req.body, utility_1.option);
        if (validateResult.error) {
            return res.status(400).json({
                Error: validateResult.error.details[0].message,
            });
        }
        //generate salt
        const salt = await (0, utility_1.GenerateSalt)();
        const userPassword = await (0, utility_1.HashedPassword)(password, salt);
        //generate otp
        const { otp, expiry } = (0, notification_1.GenerateOtp)();
        const User = (await userModel_1.UserModel.findOne({
            where: { email },
        }));
        //create user
        if (!User) {
            const user = await userModel_1.UserModel.create({
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
            const html = (0, notification_1.emailHtml)(otp);
            await (0, notification_1.sendEmail)(config_1.FROM_ADMIN_MAIL, email, config_1.USER_SUBJECT, html);
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
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            Error: "internal server error",
            route: "/users/signup",
        });
    }
};
exports.Register = Register;
/**==========================OTP VERIFICATION BY EMAIL =============== */
const verifyUserOTP = async (req, res) => {
    try {
        // Check if the user is a registered user
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({
                Error: "Email or otp is empty"
            });
        }
        const User = (await userModel_1.UserModel.findOne({
            where: { email },
        }));
        if (User && User.otp) {
            if (User.otp === parseInt(otp) && User.otp_expiry >= new Date()) {
                const updateuser = (await userModel_1.UserModel.update({
                    verified: true,
                }, { where: { email } }));
                if (updateuser) {
                    const User = await userModel_1.UserModel.findOne({ where: { email } });
                    return res.status(200).json({
                        message: "Your have successfully verified your account",
                        verified: User.verified
                    });
                }
            }
        }
        return res.status(400).json({
            Error: "Invalid Otp"
        });
    }
    catch (error) {
        return res.status(500).json({
            Error: "Internal Server Error",
            route: "/users/verify"
        });
    }
};
exports.verifyUserOTP = verifyUserOTP;
