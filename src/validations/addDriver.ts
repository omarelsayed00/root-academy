import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const addDriverResolver = yupResolver(
  yup.object({
    username: yup
      .string()
      .min(4)
      .max(9)
      .required("يجب أن يكون اسمك أكثر من 4 أحرف وأقل من 9 أحرف"),
    plateNumber: yup
      .number()
      .min(1111)
      .max(9999)
      .required("الرجاء إدخال رقم لوحة صالح"),
    vehicleRegNumber: yup
      .string()
      .trim()
      //   .matches(/\d{1,4}[A-Z\x{0600}-\x{06FF}]{3}/)
      .required("الرجاء إدخال رقم تسجيل مركبة صالح"),
    birthDay: yup
      .date()
      .min("01/01/1950")
      .max("01/10/2022")
      .required("الرجاء إدخال تاريخ صحيح"),
    nationality: yup.string().trim().required(),
    identityNumber: yup.string().trim().required(),
    liscence: yup.string().trim().required(),
  })
);
