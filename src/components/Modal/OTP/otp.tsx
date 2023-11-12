import Buttonmui from "@mui/material/Button";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {
  Actions,
  ControlField,
  Form,
  FormContent,
  Input,
  InputControl,
  InputIcon,
} from "./otpStyles";
import Modal from "@components/Modal";
import ResetPasswordModal from "@components/Modal/ResetPassword";

const VerifyOTPForm = (props: any) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [openPopupRefuse, setOpenPopupRefuse] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const verifyOTP = async (phone: any) => {
    setOpenPopup(true);
    /* const data = {
      phone_number: props.phone,
      otp: otp,
    };
    await axios
      .post(
        "https://logist8768.herokuapp.com/api/v1/employee/verify_otp",
        phone
      )
      .then(({ data }) => {})
      .catch((error) => {
        console.log(error);
      }); */
  };

  return (
    <Fragment>
      <Form>
        <FormContent>
          <h3>برجاء إدخال OTP</h3>
          <p></p>
          <ControlField></ControlField>

          <ControlField>
            <InputControl>
              <Input
                required
                value={otp}
                type="text"
                placeholder="OTP"
                onChange={(e: any) => {
                  setOTP(e.target.value);
                }}
              />
            </InputControl>
          </ControlField>

          {minutes > 0 || seconds > 0 ? (
            <p>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes} :{" "}
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : (
            <p dir="ltr">Didnt get code?</p>
          )}

          <Buttonmui
            onClick={resendOTP}
            disabled={minutes > 0 || seconds > 0}
            style={{
              color: `${minutes > 0 || seconds > 0 ? "#AEADAD" : "#FF5630"}`,
              fontSize: "13px",
              fontFamily: "inherit",
              border: "1px solid #e6e6e6",
              boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.04)",
              borderRadius: "7px",
              padding: "10px 14px",
              marginBottom: "5px",
            }}
          >
            Resend OTP
          </Buttonmui>

          <Buttonmui
            type="submit"
            onClick={verifyOTP}
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
        {openPopup && (
          <Modal onClose={() => setOpenPopup(false)}>
            <ResetPasswordModal onClose={() => setOpenPopup(false)} otp={otp} />
          </Modal>
        )}
      </Form>
    </Fragment>
  );
};

export default VerifyOTPForm;
