
import * as Yup from "yup";



export const selectLastInsuranceSchema= Yup.object().shape({
    lastInsurance: Yup.string()
        .max(255)
        .required("این مقدار اجباری میباشد"),
});