import { React, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { v4 } from "uuid";
import { useFormik } from "formik";
import axios from "axios";
import "./AddComplaints.css";

const date = new Date();
const initialValues = {
  Complaint_ID: v4(),
  Agreement_ID: "",
  Complaint_Date:"5/10/15",
  Complaint_Description: "",
  Complaint_Status: "1",
};

export const AddComplaints = () => {
  const [agreements, setAgreements] = useState([]);
  const [properties, setProperties] = useState([]);
  const [complaints,setComplaints]=useState([]);
  const token = Cookies.get("uid");
  const [formVisible, setFormVisible] = useState(false);
  const user_type = Cookies.get("user-type");
  let url="http://localhost:5000/complaints/"
  const toggleForm = () => {
    setFormVisible(!formVisible);
  };
    if (user_type == "Landlord") {
      url = url + "landlord";
    } else {
      url = url + "tenant";
    }
  useEffect(()=>{
    const getComplaints=async()=>{
      try{
        const res=await axios.get(url,{
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        setComplaints(res.data)
        console.log(res.data)
      }catch(error){
        console.log(error)
      }
    }
    getComplaints()
  },[])
  useEffect(() => {
    const getAgreements = async () => {
      try {
        const res = await axios.get("http://localhost:5000/agreement", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        // if (res.data && res.data.length > 0) {
        //   const agreements = res.data;
        //   const propertyDetails = await Promise.all(
        //     agreements.map(async (agreement) => {
        //       const propertyID = agreement.Property_ID;
        //       const propertyRes = await axios.get(
        //         `http://localhost:5000/properties/${propertyID}`
        //       );
        //       return propertyRes.data;
        //     })
        //   );
        setAgreements(res.data);
        // setProperties(propertyDetails);
        console.log(res.data);
        // console.log(propertyDetails);
        // }
      } catch (error) {
        console.log(error);
      }
    };
    getAgreements();
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:5000/complaints", values, {
          withCredentials: true,
        })
        .then((res) => {
          alert("Raise Complaint Successfully");
        
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },
  });

  return (
    <div className="complaints">
    <div className="toggle-container">
      <button onClick={toggleForm} className="toggle-btn">
        Raise Complaint
      </button></div>
      {formVisible && (
        <div className="complaints-form">
          <form onSubmit={handleSubmit}>
            <div className="complaints-input-field">
              <span>Select Agreement</span>
              <select name="Agreement_ID" onChange={handleChange} >
              <option>-------- select agreement ---------</option>
                {agreements.map((items) => (
                  <option value={items._id}>{items._id}</option>
                ))}
              </select>
            </div>
            <div className="complaints-input-field">
              <span>Enter Complaint</span>
              <textarea rows="6" autoComplete="off" name="Complaint_Description" value={values.Complaint_Description}
                onChange={handleChange}
                onBlur={handleBlur} />
            </div>
            <div className="post-btn">
              <button type="submit">Post Complaint</button>
            </div>
          </form>
        </div>
      )}
      
      {complaints.map((items)=>(
        <div className="complain-card">
        <h5>{items.Complaint_Description}</h5>
        </div>
      ))}
      </div>
  );
};
