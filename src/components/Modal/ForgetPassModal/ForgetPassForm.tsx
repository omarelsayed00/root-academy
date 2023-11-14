import Buttonmui from "@mui/material/Button";
import { Fragment, useEffect, useState } from "react";
import Modal from "@components/Modal";
import VerifyOTP from "@components/Modal/OTP";
import axios from "axios";
import {
  Actions,
  Button,
  ControlField,
  Form,
  FormContent,
  Input,
  InputControl,
  InputIcon,
} from "./ForgetPassStyles";
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgetPassForm = (props: any) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: function (values) {
      getEmployees();
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .label("Email")
        .required("برجاء إدخال بريد المستخدم")
        .email("بريد المستخدم غير صحيح"),
    }),
  });

  useEffect(() => {
    getEmployees();
  }, []);

  let getEmployees = async () => {
    await axios
      .get("https://logist8768.herokuapp.com/api/v1/employee/employees")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };

  return (
    <Fragment>
      <Form onSubmit={formik.handleSubmit}>
        <FormContent>
          <h3>برجاء إدخال البريد الاكتروني الخاص بك</h3>
          <p></p>

          <ControlField>
            <InputControl>
              <Input
                id="email"
                name="email"
                value={formik.values.email}
                type="text"
                placeholder="البريد الاكتروني"
                onChange={formik.handleChange}
              />
            </InputControl>
          </ControlField>
          <ControlField>
            {formik.touched.email && formik.errors.email && (
              <label>{formik.errors.email}</label>
            )}
          </ControlField>

          <Button type="submit">تأكيد</Button>
        </FormContent>
      </Form>
    </Fragment>
  );
};

export default ForgetPassForm;
