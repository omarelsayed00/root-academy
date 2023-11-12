import Buttonmui from "@mui/material/Button";
import { Fragment, useEffect, useState } from "react";
import Modal from "@components/Modal";
import VerifyOTP from "@components/Modal/OTP";
import axios from "axios";
import {
  Actions,
  ControlField,
  Form,
  FormContent,
  Input,
  InputControl,
  InputIcon,
} from "./ForgetPassStyles";

const ForgetPassForm = (props: any) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");
  const [employees, setEmployees] = useState([]);

  var phones = employees.map((employee: any) => employee.phone_number);

  useEffect(() => {
    getEmployees();
  }, []);

  let getEmployees = async () => {
    await axios
      .get("https://logist8768.herokuapp.com/api/v1/employee/employees")
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };

  const handleConfirm = (e: any) => {
    e.preventDefault();
    if (phones.includes(/* "+2" + */ phone) == false) {
      setErrorMessage("هذا الرقم غير مسجل");
    } else {
      setErrorMessage("");
      sendOTP(phone);
      setOpenPopup(true);
    }
  };

  const sendOTP = async (phoneNo: any) => {
    const phoneObj = {
      phone_number: phoneNo,
    };
    await axios
      .post(
        "https://logist8768.herokuapp.com/api/v1/employee/send_otp",
        phoneObj
      )
      .then((respone) => {
        /* setOpenPopup(true); */
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOTP = async (phone: any) => {
    await axios
      .post("https://logist8768.herokuapp.com/api/v1/employee/send_otp", phone)
      .then(({ data }) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <Form>
        <FormContent>
          <h3>برجاء إدخال رقم الهاتف الخاص بك</h3>
          <p></p>
          <ControlField></ControlField>

          <ControlField>
            <InputControl>
              <Input
                required
                value={phone}
                type="text"
                placeholder="رقم الهاتف"
                onChange={(e: any) => {
                  setPhone(e.target.value);
                }}
              />
            </InputControl>
          </ControlField>
          <ControlField>
            <label>{errorMessage}</label>
          </ControlField>

          <Buttonmui
            type="submit"
            onClick={handleConfirm}
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
            <VerifyOTP onClose={() => setOpenPopup(false)} phone={phone} />
          </Modal>
        )}
      </Form>
    </Fragment>
  );
};

export default ForgetPassForm;
