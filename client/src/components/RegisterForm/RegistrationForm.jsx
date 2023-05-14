import React, { useState } from 'react'
import './RegisterForm.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext';
import OTPForm from "../OTPForm/OTPForm"

const RegistrationForm = () => {
  const {registerConfig, sucessStatus} = useAuth();
  const [email, setEmail] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirmPassword] = useState("")

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlefirstName = (e)=>{
    setFirstName(e.target.value)
  }

  const handleLastName =(e)=>{
    setLastName(e.target.value)
  }

  const handlePhone = (e)=>{
    setPhone(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e)=>{
    setConfirmPassword(e.target.value)
  }

  const formData = {
    firstName,
    lastName,
    email, 
    phone, 
    password, 
    confirm_password,
  }

  // console.log(formData)

  const handleSubmit = (e)=>{
   e.preventDefault();
   registerConfig(formData)

  //  setEmail("")
  //  setLastName("")
  //  setFirstName("")
  //  setPhone("")
  //  setPassword("")
  //  setConfirmPassword("")
  }

  return (
    <div class="container">
        <div class="loginform">
          {
            sucessStatus ? (<OTPForm email={email}/>) :( <form onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
                <p>
                  Please fill in this form to create an account. or
                  <Link to="/login">Login</Link>
                </p>
      
                <label for="firstName">First Name</label>
                <input type="text" placeholder="Enter your first name" name="firstName" required  onChange={handlefirstName}/>
      
                <label for="lastName">Last Name</label>
                <input type="text" placeholder="Enter your last name" name="lastName" required  onChange={handleLastName}/>
      
                <label for="email">Email</label>
                <input type="email" placeholder="Enter Email" name="email" required onChange={handleEmail} />
      
      
                <label for="phone">Phone</label>
                <input type="phone" placeholder="Enter Phone" name="phone" required  onChange={handlePhone}/>
      
                <label for="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  onChange={handlePassword}
                />
      
              <label for="confirm_password">Repeat Password</label>
                <input
                  type="password"
                  placeholder="Repeat Password"
                  name="confirm_password"
                  onChange={handleConfirmPassword}
                  required
                />
      
                <label>
                  <input
                    type="checkbox"
                    checked="checked"
                    name="remember"
                  style={{marginBottom: "15px"}}
                  />
                  Remember me
                </label>
      
                <p>
                  By creating an account you agree to our
                  <Link to="#">Terms & Privacy</Link>.
                </p>
      
                <div class="buttons">
                  <button type="button" class="cancelbtn">Cancel</button>
                  <button type="submit" class="signupbtn">Sign Up</button>
                </div>
      
              </form>)
          }

        </div>
    </div>
  )
}

export default RegistrationForm