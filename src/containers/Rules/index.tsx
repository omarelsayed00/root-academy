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

const About = () => {
  const router = useRouter();
  const [image, setImage] = useState("/images/profilePhoto.png");
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  const [content1, setContent1] = useState(
    "1- يتم تسليم اللاعب شنطة ملابس خاصة به يجب أن يحضر اللاعب بكامل الملابس (الطقمين) وإن لم يرتدي اللاعب الطقم كامل لن ينضم للتمرين.\n 2- تبدأ الأكاديمية التمرين في ميعاد معين يجب على كل اللاعبين التواجد في الميعاد وعدم التأخير نهائياً. \n 3- يوجد لكل لاعب بروفايل خاص به داخل الأكاديمية فعليه متابعة البروفايل الخاص به لمعرفة كل ما هو جديد بالنسبة له. \n 4- يوجد أيام تمرين للأكاديمية في الأسبوع يجب على كل اللاعبين الحضور خلال هذه الأيام وعند الغياب من التمرين يجب الاستئذان أولاً وعند غياب اللاعب شهر متواصل يلغى البروفايل الخاص به من الاكاديمية. \n 5- يوجد بالأكاديمية مدير اداري عند وجود اي سؤال او استفسار متعلق بغير كرة القدم داخل التدريب يجب التعامل مع الاداري وليس المدير الفني. \n 6- احترام اللاعبين داخل التمرين وعدم التلفظ بأي لفظ خارج وعند حدوث ذلك يعتبر اللاعب مفصول من الأكاديمية نهائياً."
  );
  const [content2, setContent2] = useState(
    "1- يوجد مقر رسمي للأكاديمية وهو مقر شركة ROOT الرئيسي وهي المسؤولة عن الأكاديمية.  \n 2- على المتقدم للأكاديمية أن يتواصل للتقديم من خلال مقر الشركة او من خلال التقديم أونلاين.  \n 3- يوجد 3 فئات للأكاديمية هي A,B,C يضاف كل لاعب الى كل فئة بناءًا على مستوى كل لاعب أو من خلال استيعاب اللاعب للتمرين المقدم له وتحسن المستوى."
  );
  const [content3, setContent3] = useState(
    "1- على كل اللاعبين دفع المبلغ الشهري في الميعاد المحدد لكل لاعب.  \n 2- يوجد مكافآت للاعبين المتميزين داخل الاكاديمية. "
  );

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleTitle2Change = (event: any) => {
    setTitle2(event.target.value);
  };

  const handleTitleBehavChange = (event: any) => {
    setTitleBehav(event.target.value);
  };
  const handleTitleManagChange = (event: any) => {
    setTitleManage(event.target.value);
  };
  const handleTitleFinaincChange = (event: any) => {
    setTitleFinanc(event.target.value);
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
    setIsEditing(false);
  };

  const handleCancelEditButtonClick = () => {
    setIsEditing(false);
    //setContent("");
    setTitle("لائحة ونظام أكاديمية ROOT لتعليم اساسيات كرة القدم :-");
    setTitle2(
      "- تعلن أكاديمية ROOT عن استقبال اللاعبين لتأسيس وتنمية كرة القدم"
    );
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
              <TitleInput value={title} onChange={handleTitleChange} />
              <TitleInput2 value={title2} onChange={handleTitle2Change} />
            </div>
            <button onClick={handleEditButtonClick}>
              <Icon>
                <EditIcon2 />
              </Icon>
            </button>
          </Title>
          <Text>
            <SubTitleInput
              value={titleBehav}
              onChange={handleTitleBehavChange}
            />
            <TextInput value={content1} onChange={handleContentChange1} />
            <SubTitleInput
              value={titleManage}
              onChange={handleTitleManagChange}
            />
            <TextInput
              style={{ height: "150px" }}
              value={content2}
              onChange={handleContentChange2}
            />
            <SubTitleInput
              value={titleFianc}
              onChange={handleTitleFinaincChange}
            />
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
    </Container>
  );
};

export default About;
