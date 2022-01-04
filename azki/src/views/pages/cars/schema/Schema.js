
import * as Yup from "yup";



export const selectCarSchema = Yup.object().shape({
    carType: Yup.string()
        .max(255)
        .required("این مقدار اجباری میباشد"),
    carBrand: Yup.string()
        .required("این مقدار اجباری میباشد"),
});