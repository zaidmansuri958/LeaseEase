import { React, useState, useEffect } from "react";
import "./CSS/Agreement.css";
import { useFormik } from "formik";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import { imageDB } from "../config";
import { v4 } from "uuid";
import Cookies from "js-cookie";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  getStorage,
} from "firebase/storage";

const initialValues = {
  Date_Of_Agreement: "",
  Place_Of_Agreement: "",
  State_Of_Agreement: "",
  Property_Address: "",
  Tenancy_Start_Date: "",
  Tenancy_End_Date: "",
  Tenancy_Period: "",
  Monthly_Rent: "",
  Security_Amount: "",
  Landlord_Name: "",
  Landlord_Pan: "",
  Landlord_Address: "",
  Tenant_Name: "",
  Tenant_Pan: "",
  Tenant_Address: "",
  Rent_Day: "",
  Landlord_Email: "",
  Tenant_Email: "",
  Property_ID:""
};

export const Agreement = () => {
  const token = Cookies.get("uid");
  const [landlord, setLandlord] = useState(null);
  const [tenant, setTenant] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/properties/landlord", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setProperties(res.data);
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getProperties();
  }, []);

  const uploadFile = async (file) => {
    return new Promise((resolve, reject) => {
      const almostUniqueFileName = Date.now().toString();
      const storage = getStorage();
      const storageRef = ref(storage, "pdfs/" + almostUniqueFileName + ".pdf");
      return uploadBytes(storageRef, file)
        .then((snapshot) => {
          // Use getDownloadURL() instead of downloadURL for the latest Firebase versions
          getDownloadURL(snapshot.ref).then((downloadURL) =>
            resolve(downloadURL)
          );
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      // validationSchema: ,
      onSubmit: (values) => {
        downloadPDF().then(
          axios
            .post(
              "http://localhost:5000/agreement",
              {
                Agreement_ID: v4(),
                Property_ID: values.Property_ID,
                Tenant_ID: tenant._id,
                Landlord_ID: landlord._id,
                Start_Date: values.Tenancy_Start_Date,
                End_Date: values.Tenancy_End_Date,
                rentAmount: values.Monthly_Rent,
                depositAmount: values.Security_Amount,
                PDF_document: pdfUrl,
                status: "0",
              },
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            )
            .then(() => {
              alert("Agreement generated successfully");
            })
            .catch((error) => {
              alert(error);
            })
        );
        console.log(values);
      },
    });

  const downloadPDF = async () => {
    const HTML_Content = document.querySelector(".preview");
    try {
      const canvas = await html2canvas(HTML_Content, {
        useCORS: true,
        scale: 3,
      });
      const imgData = canvas.toDataURL("image/png", 2.0);

      const pdf = new jsPDF("p", "pt", [canvas.width / 2, canvas.height / 2]);
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width / 2, canvas.height / 2);
      const pdfBlob = pdf.output("blob");
      console.log("hii" + pdfBlob);

      uploadFile(pdfBlob)
        .then((downloadURL) => {
          console.log("PDF uploaded successfully. Download URL:", downloadURL);
          setPdfUrl(downloadURL);
        })
        .catch(() => {
          console.log("Error uploading PDF.");
        });
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  useEffect(() => {
    const getlandlord = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/landlord/email/" + values.Landlord_Email
        );
        setLandlord(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getlandlord();
  }, [values.Landlord_Email]);

  useEffect(() => {
    const getTenant = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/tenant/email/" + values.Tenant_Email
        );
        setTenant(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTenant();
  }, [values.Tenant_Email]);
  return (
    <div className="agreement">
      <div className="left">
        <div className="input-froms">
          <form onSubmit={handleSubmit}>
            <h1>Agreement Details</h1>
            <div className="input-field">
              <span>Date Of Agreement</span>
              <input
                type="date"
                name="Date_Of_Agreement"
                value={values.Date_Of_Agreement}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Place Of Agreement</span>
              <input
                type="text"
                placeholder="place of agreement"
                name="Place_Of_Agreement"
                value={values.Place_Of_Agreement}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter the state where agreement is made</span>
              <input
                type="text"
                placeholder="enter the state of the agreement"
                name="State_Of_Agreement"
                value={values.State_Of_Agreement}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <hr />
            <h1>Property Details</h1>
            <div className="input-field">
              <span>Select Property</span>
              <select onChange={handleChange} name="Property_ID">
              <option>----Select Property------</option>
                {properties.map((items) => (
                  <option value={items._id}>{items.propertyName}</option>
                ))}
              </select>
            </div>
            <div className="input-field">
              <span>Enter Property Address</span>
              <input
                type="text"
                placeholder="enter the property address"
                name="Property_Address"
                value={values.Property_Address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <hr />
            <h1>Terms Of Agreement</h1>
            <div className="input-field">
              <span>Enter Tenancy Start Date</span>
              <input
                type="date"
                placeholder="Tenancy start date"
                name="Tenancy_Start_Date"
                value={values.Tenancy_Start_Date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter Tenancy Start Date</span>
              <input
                type="date"
                placeholder="Tenancy end date"
                name="Tenancy_End_Date"
                value={values.Tenancy_End_Date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter Tenancy Period (In Months)</span>
              <input
                type="number"
                placeholder="Tenancy Period (In Months)"
                name="Tenancy_Period"
                value={values.Tenancy_Period}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Select day of month on or before rent will be paid</span>
              <select onChange={handleChange} name="Rent_Day">
                <option value="1st" label="1st">
                  1st
                </option>
                <option value="2nd" label="2nd">
                  2nd
                </option>
                <option value="3rd" label="3rd">
                  3rd
                </option>
                <option value="4th" label="4th">
                  4th
                </option>
                <option value="5th" label="5th">
                  5th
                </option>
              </select>
            </div>
            <div className="input-field">
              <span>Enter Monthly Rent Amount</span>
              <input
                type="number"
                placeholder="Monthly rent amount"
                name="Monthly_Rent"
                value={values.Monthly_Rent}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter Security Amount</span>
              <input
                type="text"
                placeholder="Securit Amount"
                name="Security_Amount"
                value={values.Security_Amount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <hr />
            <h1>Landlord Details</h1>
            <div className="input-field">
              <span>Enter Landlord Name</span>
              <input
                type="text"
                placeholder="Landlord name"
                name="Landlord_Name"
                value={values.Landlord_Name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter Landlord PAN Number</span>
              <input
                type="text"
                placeholder="Landlord PAN card number"
                name="Landlord_Pan"
                value={values.Landlord_Pan}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter Landlord Current Address</span>
              <input
                type="text"
                placeholder="Landlord current address"
                name="Landlord_Address"
                value={values.Landlord_Address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter Landlord Email Address</span>
              <input
                type="email"
                placeholder="Landlord email address"
                name="Landlord_Email"
                value={values.Landlord_Email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <hr />
            <h1>Tenant Details</h1>
            <div className="input-field">
              <span>Enter Tenant Name</span>
              <input
                type="text"
                placeholder="Tenant name"
                name="Tenant_Name"
                value={values.Tenant_Name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter Tenant PAN Number</span>
              <input
                type="text"
                placeholder="Tenant PAN card number"
                name="Tenant_Pan"
                value={values.Tenant_Pan}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter Tenant Current Address</span>
              <input
                type="text"
                placeholder="Tenant current address"
                name="Tenant_Address"
                value={values.Tenant_Address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-field">
              <span>Enter Tenant Email Address</span>
              <input
                type="email"
                placeholder="Tenant email address"
                name="Tenant_Email"
                value={values.Tenant_Email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <hr />
            <div className="submit-btn">
              <button type="submit">GENERATE</button>
            </div>
          </form>
        </div>
      </div>
      <div className="right">
        <div className="preview">
          <h3 className="title">RENT AGREEMENT</h3> <br />
          <div className="start-content">
            <span>This agreement is made on </span>
            <span className="made-date">
              {"  "}
              {values.Date_Of_Agreement}
              {"  "}
            </span>
            <span> at </span>
            <span className="agreement-city">
              {" "}
              {values.Place_Of_Agreement}{" "}
            </span>
            <span className="agreement-state">
              {" "}
              {values.State_Of_Agreement}{" "}
            </span>
          </div>
          <h5>BETWEEN</h5>
          <h6>LANDLORD(s)</h6>
          <span className="landlord-name"> {values.Landlord_Name} </span>
          <span>PAN Number</span>
          <span className="landlord-Pan-number"> {values.Landlord_Pan} </span>
          <span>resident of </span>
          <span className="landlord-city"> {values.Landlord_Address} </span>
          <span>
            (hereinafter referred to as the "LANDLORD") which expression shall,
            unless
          </span>
          <span>
            repungnant to the context, mean and include his heirs, executors ,
            and permitted
          </span>
          <span>assigns.</span>
          <h5>AND</h5>
          <h6>TENANT(s)</h6>
          <span className="tenant-name"> {values.Tenant_Name} </span>
          <span>PAN Number</span>
          <span className="tenant-Pan-number"> {values.Tenant_Pan} </span>
          <span>resident of </span>
          <span className="tenant-city"> {values.Tenant_Address} </span>
          <span>
            (hereinafter referred to as the "TENANT") which expression shall,
            unless repugant to the context, mean and include his heirs,
            executors, and permitted assigns{" "}
          </span>{" "}
          <h5>WHEREAS</h5>
          <span>
            The said LANDLORD(s) is sole and absolute (landlord/landlady) of the
            Property
          </span>
          <span className="property-address"> {values.Property_Address} </span>
          <span>
            (hereinafter referred as "PROPERTY"), and the above said TENANT(s)
            has contanted the{" "}
          </span>
          <span>
            LANDLORD(s) to take the property on rent and the LANDLORD(s) has
            agreed to let out the Property to the above TENANT(s) on the
            below-given terms and conditions.
          </span>{" "}
          <br />
          <br />
          <h5>
            NOW, THIS DEED FURTHER WITHNESSTH AND AGREED BY AND BETWEEN THE SAID
            PARTIES AS FOLLOWS:
          </h5>
          <ol>
            <li>
              <span className="condition-title">Term of Tenancy :</span>
              <span> The term of this agreement shall be for </span>
              <span className="period-months"> {values.Tenancy_Period} </span>
              <span> months commencing from </span>
              <span className="start-date"> {values.Tenancy_Start_Date} </span>
              <span> and ending on </span>
              <span className="end-date"> {values.Tenancy_End_Date} </span>
              <br />
            </li>
            <li>
              <span className="condition-title">
                Rent and securty Deposit :{" "}
              </span>
              <ol type="a">
                <li>
                  <span>The monthly rent for the property is </span>
                  <span className="agreement-rent">
                    {" "}
                    {values.Monthly_Rent}{" "}
                  </span>
                  <span>per month</span>
                </li>
                <li>
                  <span>
                    The tenant agrees to pay the monthly rent on or before
                  </span>
                  <span className="rent-day"> {values.Rent_Day} </span>
                  <span>day of each month.</span>
                </li>
                <li>
                  <span> A security Deposit of</span>
                  <span className="security-deposit">
                    {" "}
                    {values.Security_Amount}{" "}
                  </span>
                  <span>
                    has been paid by the tenant to the landlord and this amount
                    will carry no interest The security deposit shall be
                    refunded at the end of tenancy period, subject to deduction
                    for any damages or outstading dues.
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span className="condition-title">
                Utilities and Maintenance :{" "}
              </span>
              <ol type="a">
                <li>
                  <span>
                    The tenant will be responsible for paying utility bills
                    including electricitym water,gas and any other applicable
                    charges
                  </span>
                </li>
                <li>
                  <span>
                    {" "}
                    Society Maintenace charges if any are included in the
                    monthly rent paid by the Tenant
                  </span>
                </li>
                <li>
                  <span>
                    The tenant shall maintan the property in good condition and
                    shall be responsible for any damages caused beyond normal
                    wear and tear
                  </span>
                </li>
                <li>
                  <span>
                    The landlord shall be responsile for regular Maintenance and
                    repairs including plumbing, electrical and structiral
                    maintenance
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span className="condition-title">Use of Property : </span>
              <ol type="a">
                <li>
                  <span>
                    The property shall be used solely for residential purposes
                    by the tenant.
                  </span>
                </li>
                <li>
                  <span>
                    Subletting, assgning, or transfering the property to any
                    other third party, in whole or in part, without the prior
                    written consent of hte landlord is strictly prohibited. Any
                    subletting or assignment requires the landlord's explicit
                    written approval
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span className="condition-title">Termination and Notice : </span>
              <ol type="a">
                <li>
                  <span>
                    Either party may terminate this agreement by providing 30
                    days written notice to the other party through any suitable
                    channel.
                  </span>
                </li>
                <li>
                  <span>
                    Upon termination , the tenant shall return the property in
                    the same condition as at the beginning of the tenancy minus
                    normal wear and tear.
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span className="condition-title">Repairs and Alteration : </span>
              <ol type="a">
                <li>
                  <span>
                    The tenant shall promptly inform the landlord of any
                    necessary repairs or maintenance issues.
                  </span>
                </li>
                <li>
                  <span>
                    The tenant shall not make any structural alteration or
                    modification to the property without the written consent of
                    the landlord
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span className="condition-title">Entry and Inspection : </span>
              <ol type="a">
                <li>
                  <span>
                    The landlord has the right to enter the property with prior
                    notice to inspect its condition or make repairs
                  </span>
                </li>
                <li>
                  <span>
                    The landlord shall provide reasonable notice, except in
                    cases of emergencies.
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span className="condition-title">Default and Eviction : </span>
              <ol type="a">
                <li>
                  <span>
                    Failure to make regular rent payments or violation of terms
                    can result in eviction.
                  </span>
                </li>
                <li>
                  <span>
                    The landlord will be within their right to evict the Tenant
                    without the issuance of any legal notice.
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span className="condition-title">Use of Premises : </span>
              <ol type="a">
                <li>
                  <span>
                    The tenant shall not use the premises for any illegal,
                    immoral, or commercial purposes.{" "}
                  </span>
                </li>
                <li>
                  <span>
                    The tenant shall not engage in any activity that might cause
                    a nuisance or disturbance to neighbours.
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span className="condition-title">
                Furnishings and Appliances :{" "}
              </span>
              <span>
                The tenant shall be responsible for the reasonable care and
                maintenance of provided furnishings and appliances.
              </span>
            </li>
            <li>
              <span className="condition-title">Renewal of Agreement : </span>
              <ol type="a">
                <li>
                  <span>
                    If both parties agree, this agreement may be renewed for
                    another term subject to updated terms and conditions.{" "}
                  </span>
                </li>
                <li>
                  <span>
                    Renewal terms and any rent adjustments should be discussed
                    and agreed upon in writing prior to the renewal date.
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span className="condition-title">Maintenance Charges : </span>
              <span>
                The tenant shall be responsible for any increases in maintenance
                charges applicable during the tenancy period.
              </span>
            </li>
            <li>
              <span className="condition-title">Notice of Absence : </span>
              <span>
                The tenant shall provide the landlord with written notice if
                they plan to be away from the premises for an extended period.
              </span>
            </li>
            <li>
              <span className="condition-title">Dispute Resolution : </span>
              <span>
                In case of any disputes or disagreements, both parties shall
                first attempt to resolve the matter amicably through
                negotiation. If unresolved, mediation or arbitration can be
                pursued before pursuing legal action.
              </span>
            </li>
            <li>
              <span className="condition-title">Force Majeure : </span>
              <span>
                In the event that either party is unable to fulfil its
                obligations due to circumstances beyond their control (such as
                acts of God, natural disasters, government actions), the
                affected party shall be excused from such obligations during the
                period of disruption.
              </span>
            </li>
            <li>
              <span className="condition-title">Indemnity : </span>
              <span>
                The tenant shall indemnify and hold the landlord harmless from
                any claims, damages, or liabilities arising from the tenant's
                use of the premises.
              </span>
            </li>
            <li>
              <span className="condition-title">Notices : </span>
              <span>
                {" "}
                All notices and communications shall be in writing and shall be
                deemed properly delivered if sent via registered post or other
                medium as per the convenience of both parties.
              </span>
            </li>
          </ol>
          <br />
          <br />
          <h3>
            In Witness Whereof , the Parties hereto have set their hands and
            signatures on the date and year first above mentioned.
          </h3>
          <p>Landlord(s) Signatures</p>
          <div className="landlord-sign">
            <img src="" />
            <span className="landlord-name"> {values.Landlord_Name} </span>
            <span> resident of</span>
            <span className="landlord-city"> {values.Landlord_Address} </span>
            <span> having PAN number : </span>
            <span className="landlord-Pan-number"> {values.Landlord_Pan} </span>
          </div>
          <p>Tenant(s) Signatures</p>
          <div className="tenant-sign">
            <img src="" />
            <span className="landlord-name"> {values.Tenant_Name} </span>
            <span> resident of</span>
            <span className="landlord-city"> {values.Tenant_Address} </span>
            <span> having PAN number : </span>
            <span className="landlord-Pan-number"> {values.Tenant_Pan} </span>
          </div>
        </div>
        {/* <div className="submit-btn">
          <button onClick={downloadPDF}>DOWNLOAD</button>
        </div> */}
      </div>
    </div>
  );
};
