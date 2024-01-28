import React from 'react'
import { useState, useRef, useEffect } from 'react';
import family from "../Assets/family.png";
import Cookies from "js-cookie";
import axios from "axios";
import "./UplodAvtar.css"
import { useFormik } from 'formik';


export default function UplodAvtar() {
    const token = Cookies.get("uid");
    const user_type = Cookies.get("user-type");
    console.log(user_type);
    console.log("Bearer " + token);
    let url = "http://localhost:5000/";
    if (user_type === "Tenant") {
        url = url + "tenant";
    } else {
        url = url + "landlord";
    }

    console.log(url);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(url, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);
    /*const initialValues = {
        First_Name: "{user.First_Name}",
        Last_Name: "{user.Last_Name}",
        Email_ID: "{user.First_Name}",
        Phone_No: "{user.First_Name}",
        Pancard_Number: "{user.First_Name}",
        City_ID: "{user.First_Name}",
    };*/
    console.log(user);
    const inputRef = useRef(null)
    const [image, setImage] = useState("")
    const handleImageClick = () => {
        inputRef.current.click()
    }
    const handleImageChange = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = useFormik({
        onSubmit: (data) => {
            console.log(data);
            /* axios
                 .post("http://localhost:5000/landlord/update/:landlordID", data, {
                     withCredentials: true,
                 })*/
            axios
                .post("http://localhost:5000/landlord/update/:landlordID", data, {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                })
                .then((res) => {
                    console.log(res);
                    alert("Profile Updated")
                })
                .catch((err) => {
                    console.log(err);
                    alert(err);
                });

        },
    });

    const [isEditing, setIsediting] = useState(false)
    const hanldeEdit = () => {
        setIsediting(!isEditing);
    }

    const [data, setData] = useState({ First_Name: user.First_Name, Last_Name: user.Last_Name, Email_ID: user.Email_ID, Phone_No: user.Phone_No, Pancard_Number: user.Pancard_Number, Date_Of_Birth: user.Date_Of_Birth })
    /*const[data,setData]=useState({First_Name:"",Last_Name:"",Phone_No:"",Pancard_Number:"",Email_ID:"",Date_Of_Birth:""})*/
    const handleOnchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({ ...data, [name]: value })
        //console.log(setData)
    }
    /*const handleSubmit=(e)=>{
         e.preventDefault()
         console.log(data)
    }*/
    return (
        <div className='Edit-Profile'>
            <div className='edit-profile ' >
                <div className='avatar' onClick={handleImageClick}>
                    {image ? <img src={URL.createObjectURL(image)} alt='IMAGE' className="img-display-after" /> : <img src={family} alt='IMAGE' className="img-display-before" />}
                    <i className="fa-solid fa-pen Upload_Icon"></i>
                </div>

                <input id="image-upload-input" type='file' ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />

                {/*........................Form First Name And Last Name.........................................................*/}
                <form method="post" onSubmit={handleSubmit}>
                    <div className="first-last-name ">

                        <div className='first-name'>
                            <label htmlFor="firstname" className="form-label ">First Name :{" "}

                                <input type='text'
                                    className="form-control"
                                    id="firstname"
                                    name="First_Name"
                                    placeholder='Enter First Name'
                                    defaultValue={user.First_Name}
                                    /*defaultValue={user.First_Name}*/
                                    onChange={handleOnchange}
                                />

                            </label>
                        </div>

                        <div className='last-name'>
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input type='text'
                                className="form-control"
                                id="lastname"
                                name="Last_Name"
                                placeholder='Enter Last Name'
                                defaultValue={user.Last_Name}
                                /*defaultValue={user.Last_Name}*/
                                onChange={handleOnchange}
                            />

                        </div>
                    </div>
                    {/*........................Form Email And Contact Number.........................................................*/}
                    <div className="email-number">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email"
                                className="form-control"
                                id="email"
                                name="Email_ID"
                                placeholder="name@example.com"
                                defaultValue={user.Email_ID}
                                /*defaultValue={user.Email_ID}*/
                                onChange={handleOnchange}

                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone-number" className="form-label">Contact Number</label>
                            <input
                                type="number"
                                className="form-control "
                                id="phone-number"
                                name="Phone_No"
                                placeholder="91+ 0000000000"
                                defaultValue={user.Phone_No}
                                /*  defaultValue={user.Phone_No}*/
                                onChange={handleOnchange}

                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Pancard_No" className="form-label">Pancard_No</label>
                            <input type='text'
                                className="form-control"
                                id="Pancard_No"
                                name='Pancard_Number'
                                defaultValue={user.Pancard_Number}
                                /*defaultValue={user.Pancard_Number}*/
                                onChange={handleOnchange}


                            />
                        </div>
                    </div>

                    {/*........................Form City And Country.........................................................*/}
                    <div className='city-country'>
                        {/*<div className='mb-3 City'>
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text"
                                className="form-control"
                                id="city"
                                name='City_ID'
                                placeholder="Mcallen"
                                defaultValue={user.City_ID}
                                /* defaultValue={user.City_ID}
                                //onChange={handleOnchange}

                            />
                        </div>*/}

                        <div className='mb-3'>
                            <label htmlFor="date" className="form-label">Date Of Birth</label>
                            <input type="date"
                                className="form-control"
                                id="date"
                                name='Date_Of_Birth'
                                defaultValue={user.Date_Of_Birth}
                                /*defaultValue={user.Date_Of_Birth}  */
                                onChange={handleOnchange}

                            />
                        </div>
                    </div>


                    {/*<p>{data.First_Name} {data.Last_Name} {data.Pancard_Number} {data.Phone_No}</p>
                    {/*................................BUTTON........................................*/}
                    <div className='button mb-3'>
                        <button type="submit" class="btn btn-primary">Save</button>
                        <button class="btn btn-primary ml-3" onClick={hanldeEdit}>Edit Profile</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
