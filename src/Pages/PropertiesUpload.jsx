import { React, useState, useEffect } from "react";
import "./CSS/PropertiesUpload.css";
import { imageDB } from "../config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useFormik } from "formik";
import axios from "axios";

export const PropertiesUpload = () => {
  const landlord_id = "659b9adafddfb1b73cbacb5f";
  const initialValues = {
    propertyID: v4(),
    LandlordId: landlord_id,
    propertyAddress: "",
    rentAmount: "",
    depositAmount: "",
    availability: 1,
    propertyType: "",
    bedRooms: "",
    bathRooms: "",
    Amenities: "",
    squareFootage: "",
    description: "",
    propertyMedia: [],
    city: "",
  };
  const [img, setImg] = useState([]);
  const [imgUrls, setImgUrls] = useState([]);

  const handleClick = async () => {
    if (img !== null) {
      try {
        const promises = img.map((val) => {
          const imgRef = ref(
            imageDB,
            `properties-media/${landlord_id}/${v4()}`
          );
          return uploadBytes(imgRef, val)
            .then((val) => getDownloadURL(val.ref))
            .then((url) => url);
        });

        const urls = await Promise.all(promises);
        setImgUrls(urls);
        window.location.reload();

        // Assign urls to the propertyMedia field
        values.propertyMedia = urls;

        console.log("Updated values:", values);
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    }
  };
  // const handleClick = () => {
  //   if (img !== null) {
  //     img.forEach((val) => {
  //       const imgRef = ref(imageDB, `properties-media/${landlord_id}/${v4()}`);
  //       uploadBytes(imgRef, val).then((val) => {
  //         getDownloadURL(val.ref).then((url) => {
  //           setImgUrls((data) => [...data, url]);
  //         });
  //       });
  //     });
  //     console.log(imgUrls)
  //     values.propertyMedia = imgUrls;
  //   }
  // };
  useEffect(() => {
    listAll(ref(imageDB, `properties-media/${landlord_id}`)).then((images) => {
      images.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrls((data) => [...data, url]);
        });
      });
    });
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      // validationSchema: ,
      onSubmit: (values) => {
        console.log(values);
        axios
          .post("http://localhost:5000/properties", values)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            alert(err);
          });
      },
    });

  return (
    <div className="properties-upload">
      <div className="properties-upload-left">
        <div className="first-row">
          <div className="img-1">
            <img src={imgUrls[0]} alt="image" />
            <input
              type="file"
              onChange={(e) => setImg((data) => [...data, e.target.files[0]])}
            />
          </div>
          <div className="img-2">
            <img src={imgUrls[1]} alt="image" />
            <input
              type="file"
              onChange={(e) => setImg((data) => [...data, e.target.files[0]])}
            />
          </div>
          <div className="img-3">
            <img src={imgUrls[2]} alt="image" />
            <input
              type="file"
              onChange={(e) => setImg((data) => [...data, e.target.files[0]])}
            />
          </div>
        </div>
        <div className="second-row">
          <div className="img-4">
            <img src={imgUrls[3]} alt="image" />
            <input
              type="file"
              onChange={(e) => setImg((data) => [...data, e.target.files[0]])}
            />
          </div>
          <div className="img-5">
            <img src={imgUrls[4]} alt="image" />
            <input
              type="file"
              onChange={(e) => setImg((data) => [...data, e.target.files[0]])}
            />
          </div>
          <div className="img-6">
            <img src={imgUrls[5]} alt="image" />
            <input
              type="file"
              onChange={(e) => setImg((data) => [...data, e.target.files[0]])}
            />
          </div>
        </div>
        <div className="btn-container">
          <button onClick={handleClick}>Upload</button>
        </div>
      </div>
      <div className="properties-upload-right">
        <form onSubmit={handleSubmit}>
          <div className="properties-input-field">
            <span>Enter Address of the property</span>
            <input
              type="text"
              placeholder="e.g. Building 123, street name, landmark, pincode"
              value={values.propertyAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              name="propertyAddress"
              autoComplete="off"
            />
          </div>
          <div className="properties-amount-section">
            <div className="properties-input-field">
              <span>Enter Rent Amount</span>
              <input
                type="text"
                placeholder="e.g. 10,000"
                value={values.rentAmount}
                onChange={handleChange}
                onBlur={handleBlur}
                name="rentAmount"
                autoComplete="off"
              />
            </div>

            <div className="properties-input-field">
              <span>Enter Deposit Amount</span>
              <input
                type="text"
                placeholder="e.g. 1,20,000"
                value={values.depositAmount}
                onChange={handleChange}
                onBlur={handleBlur}
                name="depositAmount"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="properties-input-field">
            <span>Enter Property Type</span>
            <input
              type="text"
              placeholder="e.g. Apartment"
              value={values.propertyType}
              onChange={handleChange}
              onBlur={handleBlur}
              name="propertyType"
              autoComplete="off"
            />
          </div>
          <div className="properties-specification-section">
            <div className="properties-input-field">
              <span>Number Of Bathrooms</span>
              <input
                type="number"
                placeholder="e.g. 3"
                value={values.bathRooms}
                onChange={handleChange}
                onBlur={handleBlur}
                name="bathRooms"
                autoComplete="off"
              />
            </div>

            <div className="properties-input-field">
              <span>Number Of Bedrooms</span>
              <input
                type="number"
                placeholder="e.g. 4"
                value={values.bedRooms}
                onChange={handleChange}
                onBlur={handleBlur}
                name="bedRooms"
                autoComplete="off"
              />
            </div>

            <div className="properties-input-field ">
              <span>Square Footage</span>
              <input
                type="number"
                placeholder="e.g. 480"
                value={values.squareFootage}
                onChange={handleChange}
                onBlur={handleBlur}
                name="squareFootage"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="amenities">
            <span>Amenities</span>
            <div className="checkboxes">
              <input
                type="checkbox"
                value="Garden"
                name="Amenities"
                id="garden"
                onChange={handleChange}
              />
              <label>Garden</label>
            </div>
            <div className="checkboxes">
              <input
                type="checkbox"
                value="GYM"
                name="Amenities"
                id="GYM"
                onChange={handleChange}
              />
              <label>GYM</label>
            </div>
            <div className="checkboxes">
              <input
                type="checkbox"
                value="Swiming Pool"
                name="Amenities"
                id="Swiming-Pool"
                onChange={handleChange}
              />
              <label>Swiming Pool</label>
            </div>
            <div className="checkboxes">
              <input
                type="checkbox"
                value="Club House"
                name="Amenities"
                id="Club-House"
                onChange={handleChange}
              />
              <label>Club House</label>
            </div>
          </div>

          <div className="properties-input-field">
            <span>Enter Description</span>
            <textarea
              rows="4"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              name="description"
              autoComplete="off"
            />
          </div>

          <div className="properties-input-field">
            <span>Select City</span>
            <select name="city" onChange={handleChange}>
              <option value="659590b7deacfb00cc806674" label="Mumbai">
                Mumbai
              </option>
              <option value="659590bd36ed8c797556c05f" label="Pune">
                Pune
              </option>
              <option value="6595909edeacfb00cc802dcd" label="Ahmedabad">
                Ahmedabad
              </option>
              <option value="659590d236ed8c797556c060" label="Bangalore">
                Bangalore
              </option>
              <option value="6595912236ed8c797556c061" label="Delhi">
                Delhi
              </option>
            </select>
          </div>
          <div className="btn-container">
            <button type="submit">Add Property</button>
          </div>
        </form>
      </div>
    </div>
  );
};
