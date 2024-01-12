import React from 'react'
import './CSS/Login.css'
import { useFormik } from "formik";
import axios from "axios";
import Cookies from 'js-cookie';
import loginImg from "../Components/Assets/login.svg";
import { Link } from "react-router-dom";


const initialValues = {
    Login_Email_ID: "",
    Login_Password: "",
  };

export const Login = () => {
    const { values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values) => {
        console.log("click")
        console.log(values);
        axios
          .post("http://localhost:5000/landlord/signIn",values,{withCredentials:true})
          .then((res) => {
            console.log(res);
            Cookies.set('uid', res.data.token);
            alert("Login successfully");
          })
          .catch((err) => {
            console.log(err) 
            alert(err.message)});
      },
    });
    
  // console.log(errors);
  return (
    <div className='login'>
         <div className="login-container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 left-side-login ">
            <img src={loginImg} alt="image" />
          </div>
          <div className="col-md-6 col-lg-6 col-12 right-side-login ">
            <h1>User Login</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Email"
                name="Login_Email_ID"
                value={values.Login_Email_ID}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* {errors.Email_ID && touched.Email_ID ? (
                <p className="input-error">{errors.Email_ID}</p>
              ) : null} */}
           
              <input
                type="password"
                placeholder="Password"
                name="Login_Password"
                value={values.Login_Password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* {errors.Password && touched.Password ? (
                <p className="input-error">{errors.Password}</p>
              ) : null} */}
          
              <div className="user-type-input">
                <label>Login As : </label>
                <select onChange={handleChange} name="user_type">
                  <option value="Landlord" label="Landlord">
                    Landlord
                  </option>
                  <option value="Tenant" label="Tenant">
                    Tenant
                  </option>
                  <option value="Admin" label="Admin">
                    Admin
                  </option>
                </select>
              </div>
              {/* {errors.city && touched.city ? (
                <p className="input-error">{errors.city}</p>
              ) : null} */}
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account ? <Link to="/landlord-registration">Click here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
