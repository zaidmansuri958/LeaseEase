import React from "react";
import signupimg from "../Components/Assets/Signup.svg";
import "./CSS/Registration.css";
import { useFormik } from "formik";
import { signUpSchema } from "../Schemas";
import axios from "axios";
import Cookies from "js-cookie";
import { Link,useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const initialValues = {
  Landlord_ID:v4(),
  First_Name: "",
  Last_Name: "",
  Email_ID: "",
  Phone_No: "",
  Pancard_Number: "",
  Password: "",
  Date_Of_Birth: "",
  City_ID: "",
  Gender: "",
};

export const LandlordRegistration = () => {
  const navigate=useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
        axios
          .post("http://localhost:5000/landlord/signUp", values, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            Cookies.set("uid", res.data.token);
            Cookies.set("user-type","Landlord");
            alert("Register Successfully");
            navigate('/LeaseEase');  
          })
          .catch((err) => {
            console.log(err);
            alert(err);
          });
      },
    });

  console.log(errors);
  return (
    <div className="landlord-reg">
      <div className="lan-container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 left-side ">
            <img src={signupimg} alt="image" />
            <div className="verticle-line"></div>
          </div>
          <div className="col-md-6 col-lg-6 col-12 right-side ">
            <h1>Landlord Registration</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter First Name"
                name="First_Name"
                value={values.First_Name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.First_Name && touched.First_Name ? (
                <p className="input-error">{errors.First_Name}</p>
              ) : null}
              <input
                type="text"
                placeholder="Enter Last Name"
                name="Last_Name"
                value={values.Last_Name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Last_Name && touched.Last_Name ? (
                <p className="input-error">{errors.Last_Name}</p>
              ) : null}
              <input
                type="email"
                placeholder="Enter Email"
                name="Email_ID"
                value={values.Email_ID}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Email_ID && touched.Email_ID ? (
                <p className="input-error">{errors.Email_ID}</p>
              ) : null}
              <input
                type="number"
                placeholder="Enter Phone Number"
                name="Phone_No"
                value={values.Phone_No}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Phone_No && touched.Phone_No ? (
                <p className="input-error">{errors.Phone_No}</p>
              ) : null}
              <input
                type="text"
                placeholder="Enter PAN Card Number"
                name="Pancard_Number"
                value={values.Pancard_Number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Pancard_Number && touched.Pancard_Number ? (
                <p className="input-error">{errors.Pancard_Number}</p>
              ) : null}
              <input
                type="password"
                placeholder="Password"
                name="Password"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Password && touched.Password ? (
                <p className="input-error">{errors.Password}</p>
              ) : null}
              <input
                type="date"
                placeholder="Enter birthdate"
                name="Date_Of_Birth"
                value={values.Date_Of_Birth}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Date_Of_Birth && touched.Date_Of_Birth ? (
                <p className="input-error">{errors.Date_Of_Birth}</p>
              ) : null}
              <div className="city-input">
                <label>Select City : </label>
                <select onChange={handleChange} name="City_ID">
                  <option value="6595909edeacfb00cc802dcd" label="Mumbai">
                    Mumbai
                  </option>
                  <option value="6595909edeacfb00cc802dcd" label="Pune">
                    Pune
                  </option>
                  <option value="6595909edeacfb00cc802dcd" label="Ahmedabad">
                    Ahmedabad
                  </option>
                  <option value="6595909edeacfb00cc802dcd" label="Bangalore">
                    Bangalore
                  </option>
                  <option value="6595909edeacfb00cc802dcd" label="Delhi">
                    Delhi
                  </option>
                </select>
              </div>
              {errors.city && touched.city ? (
                <p className="input-error">{errors.city}</p>
              ) : null}
              <div className="gender">
              <label className="title">Gender</label>
                <input
                  type="radio"
                  className="gender-val"
                  name="Gender"
                  onChange={handleChange}
                  value="Male"
                />
                <label for="Male">Male</label>
                <input
                  type="radio"
                  className="gender-val"
                  name="Gender"
                  onChange={handleChange}
                  value="Female"
                />
                <label for="Female">Female</label>
                <input
                  type="radio"
                  className="gender-val"
                  name="Gender"
                  onChange={handleChange}
                  value="Other"
                />
                <label for="Other">Other</label>
              </div>
              {errors.Gender && touched.Gender ? (
                <p className="input-error">{errors.Gender}</p>
              ) : null}
              <button type="submit">SignUp</button>
            </form>
            <p>
              Already have an account ? <Link to="/login">Click here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
