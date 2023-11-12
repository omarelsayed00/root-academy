/* eslint-disable @next/next/no-img-element */
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
  Info,
  User,
} from "./EditUserStyles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import { AnyNaptrRecord } from "dns";
import { set } from "date-fns";

const EditUserForm = (props: any) => {
  const [user, setUser] = useState(props.user[0]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [coach, setCoach] = useState("");
  const [plan, setPlan] = useState("");
  const [image, setImage] = useState("");
  /*   const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState(""); */

  const { baseURL }: any = useContext(AuthContext);
  const [newImage, setNewImage] = useState(
    "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
  );

  const onImageChange2 = (event: any) => {
    setNewImage(URL.createObjectURL(event.target.files[0]));
    //console.log(event.target.files[0]);
    //getFileUrl(event.target.files[0]);
  };

  /*  useEffect(() => {
  }, []); */
  const editUser = () => {
    console.log(props.currentId);
    //console.log("User Edited");
    const editedUser = props.users.map((user: any) => {
      if (props.currentId == user.id) {
        return {
          ...user,
          name: fullName != "" ? fullName : user.name,
          email: email != "" ? email : user.email,
          plan: plan != "" ? plan : user.plan,
          coach: coach != "" ? coach : user.coach,
        };
      }
      return user;
    });
    props.setUsers(editedUser);
    props.onClose();
    /*    console.log(username);
      console.log(user); */
  };

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
            <User>
              <img src={newImage} alt="userPhoto" />
              <Info>
                <h1>{user.name}</h1>
                <h3>مدرب</h3>
              </Info>
            </User>
            <div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                onChange={onImageChange2}
              />
              <label className="Btn" htmlFor="contained-button-file">
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

              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                style={{ display: "none" }}
              />
              <label htmlFor="icon-button-file"></label>
            </div>
          </StateHeader>
          <br />
          <br />

          <ControlField>
            <InputControl>
              <h1>الإسم الكامل</h1>
              <Input
                placeholder={user.name}
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
                placeholder={user.email}
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
                placeholder={user.plan}
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
                placeholder={user.coach}
                //required
                type="text"
                onChange={(e: any) => {
                  setCoach(e.target.value);
                }}
              />
            </InputControl>
          </ControlField>

          <Actions>
            <Btn type="button" onClick={editUser}>
              تعديل
            </Btn>
          </Actions>
        </FormContent>
      </Form>
    </Fragment>
  );
};

export default EditUserForm;
