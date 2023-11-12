/* eslint-disable react-hooks/rules-of-hooks */
import Buttonmui from "@mui/material/Button";
import { Fragment, useContext, useState } from "react";
import axios from "axios";
import {
  Actions,
  ControlField,
  Form,
  FormContent,
  Input,
  InputControl,
  InputIcon,
} from "./ResetPassword";

import { Formik } from "formik";
import * as Yup from "yup";
import AuthContext from "src/context/AuthContext";

const ResetPasswordForm = (props: any) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPassword = async () => {
    if (password != confirmPassword) {
      setErrorMessage("Password doesn't match");
      return;
    }
    const data = {
      new_password: password,
      otp: props.otp,
    };
    await axios
      .post(
        "https://logist8768.herokuapp.com/api/v1/employee/reset_password",
        data
      )
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
      <Form>
        <FormContent>
          <p></p>
          <ControlField></ControlField>

          <ControlField>
            <InputControl>
              <Input
                type="password"
                placeholder="كلمة المرور"
                name="password"
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
            </InputControl>
          </ControlField>
          <br />
          <ControlField>
            <InputControl>
              <Input
                type="password"
                placeholder="تأكيد كلمة المرور"
                name="password"
                value={confirmPassword}
                onChange={(e: any) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </InputControl>
          </ControlField>
          <ControlField>
            <label>{errorMessage}</label>
          </ControlField>

          <Buttonmui
            onClick={resetPassword}
            style={{
              fontSize: "14px",
              outline: "none",
              fontFamily: "inherit",
              color: "white",
              background: "#5C9EF6",
              border: "1px solid #e6e6e6",
              boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.04)",
              borderRadius: "7px",
              padding: "10px 14px",

              width: "120px",
            }}
          >
            تأكيد
          </Buttonmui>
        </FormContent>
      </Form>
    </Fragment>
  );
};

export default ResetPasswordForm;
