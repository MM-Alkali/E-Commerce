import React, { createContext } from "react";
import { apiPost } from "./api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [sucessStatus, setSuccessStatus] = React.useState(false);
  // console.log(emailfromReg, "Checking email");
  /**======================Register================== */
  const registerConfig = async (formData) => {
    try {
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        confirm_password: formData.confirm_password,
      };

      await apiPost("/users/signup", registerData).then((res) => {
        console.log(res.data);
        console.log(res.data.success, "status");
        setSuccessStatus(res.data.success);
        toast.success(res.data.message);

        // setTimeout(()=>{
        //  window.location.href='/otp'
        // }, 2000)
      });

      //  const data = await response.data
      //  console.log(data.response, "checking from Api");
    } catch (error) {
      toast.error(error.response.data.Error);
    }
  };

  console.log(sucessStatus, "successStatus");

  /*============== VERIFY EMAIL WITH OTP ===============*/
  const OTPConfig = async (formData) => {
    console.log(formData, "Form Data");
    try {
      const OTPData = {
        email: formData.email,
        otp: Number(formData.otp),
      };

      await apiPost("/users/verify", OTPData).then((res) => {
       
        toast.success(res?.data?.message);
        setTimeout(()=>{
         window.location.href='/login'
        }, 2000)
      });
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.Error);
    }
  };

  return (
    <dataContext.Provider value={{ registerConfig, sucessStatus, OTPConfig }}>
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(dataContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};

export default DataProvider;
