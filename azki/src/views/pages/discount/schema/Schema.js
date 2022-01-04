
import * as Yup from "yup";



export const discountSchema = Yup.object().shape({
    thirdDiscount: Yup.string()
        .max(255)
        .required("این مقدار اجباری میباشد"),
    driverDiscount: Yup.string()
        .required("این مقدار اجباری میباشد"),
});