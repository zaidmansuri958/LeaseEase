import * as Yup from "yup";

export const propertiesUploadSchema=Yup.object({
    propertyAddress:Yup.string().min(10,'Too Short!').max(120,'Too Long!').required("Please enter property address"),
    propertyName:Yup.string().min(2,'Too Short!').max(25,'Too Long!').required("Please enter property name"),
    rentAmount:Yup.number().min(100).max(500000).required("Please enter rent amount"),
    depositAmount:Yup.number().min(100).max(500000).required("Please enter deposit amount"),
    propertyType:Yup.string().required("Please enter property type"),
    bedRooms:Yup.number().min(1).max(10).required("Please enter bedrooms"),
    bathRooms:Yup.number().min(1).max(10).required("Please enter bathrooms"),
    squareFootage:Yup.number().min(50).max(1000).required("Please enter square footage"),
    description:Yup.string().min(60).max(256).required("Please enter description"),
    city:Yup.string().required("Please enter city"),
    propertyMedia:Yup.array().required("please select the images")
})
