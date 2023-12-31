/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  SaveButton,
  Button,
  Button2,
  Content,
  Text,
  TitleInput,
  TitleInput2,
  SubTitleInput,
  TextInput,
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";
import EditIcon from "@icons/Edit";
import Icon from "@components/Icon";
import EditIcon2 from "@icons/EditAbout";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { isFormElement } from "react-router-dom/dist/dom";
import { Backdrop } from "@mui/material";
import CloseIcon from "@icons/Close";

const About = () => {
  const router = useRouter();
  const [image, setImage] = useState("/images/profilePhoto.png");
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rules, setRules] = useState([]);
  const { BASE_URL } = process.env;

  const [title, setTitle] = useState(
    "لائحة ونظام أكاديمية ROOT لتعليم اساسيات كرة القدم :-"
  );
  const [title2, setTitle2] = useState(
    "- تعلن أكاديمية ROOT عن استقبال اللاعبين لتأسيس وتنمية كرة القدم"
  );
  const [titleBehav, setTitleBehav] = useState(
    "- النظام السلوكي للأكاديمية :-"
  );
  const [titleManage, setTitleManage] = useState(
    "- النظام الإداري للأكاديمية :-"
  );
  const [titleFianc, setTitleFinanc] = useState(
    "- النظام المالى للأكاديمية :-"
  );

  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .get(`${BASE_URL}/admins/rules`, config)
      .then((response) => {
        console.log(response.data.data);
        setRules(response.data.data);
        //setTitleBehav(response.data.data[0].ruleCategory.name);
        setContent1(response.data.data[0].content);
        setContent2(response.data.data[1].content);
        setContent3(response.data.data[2].content);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const editRules = async (content: any, id: any) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("_method", "put");
    formData.append("content", content);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/rules/${id}`, formData, config)
      .then((response) => {
        console.log(response.data.data);
        setRules(response.data.data);
        //setTitleBehav(response.data.data[0].ruleCategory.name);
        setContent1(response.data.data[0].content);
        setContent2(response.data.data[1].content);
        setContent3(response.data.data[2].content);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleContentChange1 = (event: any) => {
    setContent1(event.target.value);
  };
  const handleContentChange2 = (event: any) => {
    setContent2(event.target.value);
  };
  const handleContentChange3 = (event: any) => {
    setContent3(event.target.value);
  };

  const handleSaveChangesButtonClick = () => {
    editRules(content1, 1);
    editRules(content2, 2);
    editRules(content3, 3);
    fetchRules();
    setIsEditing(false);
  };

  return (
    <Container>
      {isEditing ? (
        <Content>
          <Title>
            <p></p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "10px",
              }}
            >
              <h1>{title}</h1>
              <h2>{title2}</h2>
            </div>
            <button className="closeIcon" onClick={handleCloseEdit}>
              <Icon>
                <CloseIcon />
              </Icon>
            </button>
          </Title>
          <Text>
            <h1>{titleBehav}</h1>

            <TextInput value={content1} onChange={handleContentChange1} />
            <h1>{titleManage}</h1>

            <TextInput
              style={{ height: "150px" }}
              value={content2}
              onChange={handleContentChange2}
            />
            <h1>{titleFianc}</h1>

            <TextInput
              style={{ height: "150px" }}
              value={content3}
              onChange={handleContentChange3}
            />
            <br />
          </Text>
        </Content>
      ) : (
        ///////////////////////////////////////////////
        ////////////////////////////////////////////////
        <Content>
          <Title>
            <p></p>
            <div>
              <h1>{title}</h1>
              <h2>{title2}</h2>
            </div>
            <button onClick={handleEditButtonClick}>
              <Icon>
                <EditIcon2 />
              </Icon>
            </button>
          </Title>
          <Text>
            <h1>{titleBehav}</h1>
            <p>{content1}</p>
            <p></p>
            <h1>{titleManage}</h1>
            <p>{content2}</p>
            <p></p>
            <h1>{titleFianc}</h1>
            <p>{content3}</p>
            <div></div>
          </Text>
        </Content>
      )}

      {isEditing && (
        <SaveButton onClick={handleSaveChangesButtonClick}>
          حفظ القواعد
        </SaveButton>
      )}

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={() => setIsLoading(true)}
      >
        <div className="loading"></div>
      </Backdrop>
    </Container>
  );
};

export default About;
