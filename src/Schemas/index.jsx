import * as Yup from "yup";

export const signUpSchema=Yup.object({
    First_Name:Yup.string().min(2).max(25).required("Please enter first name"),
    Last_Name:Yup.string().min(2).max(25).required("Please enter last name"),
    Email_ID:Yup.string().email().required("Please enter email"),
    Phone_No:Yup.string().min(10).max(10).required("Please enter valid phone number"),
    Pancard_Number:Yup.string().min(10).max(10).required("Please enter valid PAN number"),
    Password:Yup.string().min(4).max(10).required("Please enter password"),
    Date_Of_Birth:Yup.string().min(8).max(25).required("Please enter birth date"),
    City_ID:Yup.string().min(2).max(25).required("Please enter city"),
    Gender:Yup.string().min(2).max(25).required("Please enter gender"),

})
