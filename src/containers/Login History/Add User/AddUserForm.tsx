import Buttonmui from "@mui/material/Button";
import { FormEvent, Fragment, useState, useContext, useEffect } from "react";
import {
  Actions,
  ControlField,
  Form,
  FormContent,
  Input,
  InputControl,
  StateHeader,
  Btn,
  Upload,
} from "./AddUserStyles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import { AnyNaptrRecord } from "dns";
import { set } from "date-fns";

const AddUserForm = (props: any) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [coach, setCoach] = useState("");
  const [plan, setPlan] = useState("");
  const [image, setImage] = useState("");
  /*   const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState(""); */

  const { baseURL }: any = useContext(AuthContext);

  useEffect(() => {
    /* setAddress("");
    setPassword(""); */
  }, []);

  const AddUser = async () => {
    const newUser = {
      avatar: image,
      name: fullName,
      plan: plan,
      email: email,
      coach: coach,
    };

    if (fullName == "" || coach == "" || email == "") {
      alert("Please Enter All Data");
      return;
    }
    props.setUsers([...props.users, newUser]);
    props.onClose();
  };

  /*     if (password != confrimPassword) {
      alert("Password doesn't match");
      return;
    } */

  /* await axios
      .post(
        "https://logist8768.herokuapp.com/api/v1/employee/regester",
        newEmployee
      )
      .then((response) => {
        console.log(response.data);
        console.log("New employee added!!!");
        props.setMembers();
        props.onClose();
      })
      .catch((error) => {
        console.log(error);
        alert("ERROR");
      }); 
  };*/

  const handleAddImage = (event: any) => {
    console.log("Add image");
    console.log(URL.createObjectURL(event.target.files[0]));
    setImage(URL.createObjectURL(event.target.files[0]).substring(5));
    console.log("new image is " + image);
  };

  return (
    <Fragment>
      <Form>
        <FormContent>
          <StateHeader>
            <h3></h3>
            <div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                onChange={handleAddImage}
              />
              <label className="Btn" htmlFor="contained-button-file">
                {/* <Upload>رفع صورة</Upload> */}
                <Buttonmui
                  style={{
                    borderRadius: 7,
                    backgroundColor: "#67b375",
                    padding: "10px 20px",
                    fontWeight: "400",
                    fontFamily: "Arb-Regular",
                    fontSize: "12px",
                  }}
                  variant="contained"
                  component="span"
                >
                  رفع صورة
                </Buttonmui>
              </label>
            </div>
          </StateHeader>

          <ControlField>
            <InputControl>
              <h1>الإسم الكامل</h1>
              <Input
                value={fullName}
                //required
                type="text"
                onChange={(e: any) => {
                  setFullName(e.target.value);
                }}
              />
            </InputControl>
            <InputControl>
              <h1>البريد الإلكتروني</h1>
              <Input
                value={email}
                //required
                type="text"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
            </InputControl>
          </ControlField>
          <ControlField>
            <InputControl>
              <h1>باقة الإشتراك</h1>
              <Input
                value={plan}
                //required
                type="text"
                onChange={(e: any) => {
                  setPlan(e.target.value);
                }}
              />
            </InputControl>
            <InputControl>
              <h1>المدرب</h1>
              <Input
                value={coach}
                //required
                type="text"
                onChange={(e: any) => {
                  setCoach(e.target.value);
                }}
              />
            </InputControl>
          </ControlField>

          <Actions>
            <Btn type="button" onClick={AddUser}>
              إضافة
            </Btn>
          </Actions>
        </FormContent>
      </Form>
    </Fragment>
  );
};

export default AddUserForm;
