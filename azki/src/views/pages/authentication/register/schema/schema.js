
import * as Yup from "yup";
import { getMobileNumber } from "../../../../../services/validationServices/ValidationServices";


export const registerSchema = Yup.object().shape({
  firstname: Yup.string()
    .matches('^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF ]+$', 'نام خود را فارسی وارد نمایید')
    .required("این مقدار اجباری میباشد"),
  lastname: Yup.string()
    .matches('^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF ]+$', 'نام خانوادگی خود را فارسی وارد نمایید')
    .required("این مقدار اجباری میباشد"),
  password: Yup.string()
    .min(4, "حداقل رمز عبور 4 کاراکتر باشد")
    .max(10, 'حداکثر رمز عبور 10 کاراکتر باشد')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10,}$/,
      "رمز عبور  از حداقل یک عدد حداقل یک حرف لاتین بزرگ و حداقل یک حرف لاتین کوچک  حداکثر ١٠ کاراکتر  تشکیل شده باشد"
    )
    .required("وارد کردن رمز  الزامی هست"),

  mobile: Yup.number()
    .typeError("فقط از اعداد استفاده شود")
    .test("max & min", "شماره همراه صحیح نمی باشد", function (value) {
      if (getMobileNumber(value).length !== 0) {
        return true;
      }
      return false;
    })
    .required("وارد کردن موبایل الزامی است"),
});