import React from 'react'
import "./LoginPage.css" 
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginPage = () => {
  return (
   
    <div className="wrapper">
        <div className="container">
        <form action="#">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='User Name'  required />
                <FaUserAlt className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password'  required />
                <RiLockPasswordLine className='icon'/>
            </div>
            <div className="remember-forgot">
             <label htmlFor=""> <input type="checkbox" />Remeber me</label>  
             <a href="">Forgot Password?</a>

            </div>
            <button  type='submit'>Login</button>
            <div className="register-link">
                <p>Don't Have an Account <a href="#">Register</a></p>
            </div>
          
        </form>
        </div>
    </div>

  )
}

export default LoginPage
