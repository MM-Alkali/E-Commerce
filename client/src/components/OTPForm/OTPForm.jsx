import React, { useState } from "react";
import "./OTPForm.css";
import OTPInputField from "react-otp-input";
import { useAuth } from "../../context/authContext";

const OTPForm = ({ email }) => {
  const { OTPConfig } = useAuth();
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp(otp);
  };


  const formData = {
    email,
    otp,
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    OTPConfig(formData);
  };

  return (
        <form onSubmit={handleSubmit}>
        <h3>OTP verification</h3>
        <p>Fill your OTP verification code</p>
          <OTPInputField
            value={otp}
            onChange={handleChange}
            inputStyle={{
              width: "3.7rem",
              height: "3.7rem",
              margin: "20px 1rem",
              fontSize: "1rem",
              borderRadius: 8,
              border: "1px solid #606060",
            }}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
          />
          <div class="buttons">
            {/* <button type="button" class="cancelbtn">
              Resend
            </button> */}
            <button type="submit" class="signupbtn" onClick={handleSubmit}>
              Verify Otp
            </button>
          </div>
        </form>

  );
};

export default OTPForm;
