/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Block,
  Block1,
  Block3,
  CircularChart,
  Column,
  Column2,
  Container,
  DateContainer,
  Info,
  Label,
  Numbers,
  ProfilePhoto,
  ProgressBar,
  ProgressBarContainer,
  Row,
  Row2,
  Separator,
  Status,
  Task,
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Circular from "@components/Chart/Circular";
import Circular2 from "@components/Chart/Circular2";
import MenuListComposition from "./edit";
import Cookies from "js-cookie";

const Profile = () => {
  const router = useRouter();
  const [image, setImage] = useState("/images/profilePhoto.png");
  const isAdmin = Cookies.get("isAdmin");

  return (
    <Container>
      <h4>المعلومات الاساسية</h4>
      <Block1>
        <ProfilePhoto>
          <div>
            <Image src={image} width={170} height={170} alt="" />
            <button>
              <MenuListComposition setImage={setImage} />
            </button>
          </div>
        </ProfilePhoto>
        <Column>
          <h1>الاسم</h1>
          <h1>المسمى الوظيفى</h1>
          <h1>الإدارة</h1>
          <h1>الكود الوظيفى</h1>
          <h1>المدير المباشر</h1>
          <h1>الموقع</h1>
          <h1>تاريخ الانضمام للمؤسسة</h1>
        </Column>
        <Separator />
        <Column>
          <h1>خالد عبدالله محمد مصطفى</h1>
          <h1>مدير قسم الموارد البشرية</h1>
          <h1>الإدارة</h1>
          <h1>55277</h1>
          <h1>عبدالله النفيعى</h1>
          <h1>الرياض</h1>
          <h1>يناير 2020</h1>
        </Column>
      </Block1>

      <Block>
        <Column2>
          <h2>مؤشر الإنجاز العام</h2>

          <Row>
            <h3>التقييم العام</h3>
            <p>هذه هى نسبة التقييم العام نظراً للالتزام الوظيفى</p>
            <p>وانجاز الموظف للمهام و المبادرات</p>
          </Row>
          <Row>
            <h3>إحصائيات الموقع</h3>
            <p>هذه هى إحصائيات الموقع من خلال عدد الانشطة</p>
            <p>المشارك فيها الموظف</p>
          </Row>
          <Numbers>
            <Info>
              <h1>12</h1>
              <p>المبادرات</p>
            </Info>
            <Separator />
            <Info>
              <h1>22</h1>
              <p>المهام</p>
            </Info>
            <Separator />
            <Info>
              <h1>28</h1>
              <p>الترتيب</p>
            </Info>
          </Numbers>
        </Column2>
        <Column>
          <CircularChart>
            <Circular percentage={64} />
            <Label>
              <h1>63.4%</h1>
              <p>التقييم العام</p>
            </Label>
          </CircularChart>
        </Column>
        <Column>
          <CircularChart>
            <Circular2 percentage={75} />
            <Label>
              <h1>75%</h1>
              <p>الالتزام الوظيفى</p>
            </Label>
          </CircularChart>
        </Column>
      </Block>

      <Block3>
        <h1>المبادرات التى انضم لها </h1>
        <Row2>
          <h1>عنوان المبادرة يكتب هنا</h1>
        </Row2>
        <Row2>
          <h1>عنوان المبادرة يكتب هنا</h1>
        </Row2>
        <Row2>
          <h1> </h1>
        </Row2>
      </Block3>

      <Block3>
        <h1>المهام الموكلة له </h1>
        <Task>
          <h1>عنوان المهمة هنا ...</h1>
          <Status status="NotStarted">
            <p>لم يبدأ العمل</p>
          </Status>
          <ProgressBarContainer>
            <ProgressBar status="NotStarted"></ProgressBar>
            <h2>0%</h2>
          </ProgressBarContainer>
          <DateContainer>
            <h2>05</h2>
            <div></div>
            <h2>مارس</h2>
          </DateContainer>
        </Task>
        <Task>
          <h1>عنوان المهمة هنا ...</h1>
          <Status status="InProgress">
            <p>جارى العمل</p>
          </Status>
          <ProgressBarContainer>
            <ProgressBar status="InProgress">
              <div></div>
            </ProgressBar>
            <h2>50%</h2>
          </ProgressBarContainer>
          <DateContainer>
            <h2>12</h2>
            <div></div>
            <h2>مارس</h2>
          </DateContainer>
        </Task>
        <Task>
          <h1>عنوان المهمة هنا ...</h1>
          <Status status="Ended">
            <p>تم الانتهاء</p>
          </Status>
          <ProgressBarContainer>
            <ProgressBar status="Ended">
              <div></div>
            </ProgressBar>
            <h2>100%</h2>
          </ProgressBarContainer>
          <DateContainer>
            <h2>07</h2>
            <div></div>
            <h2>فبراير</h2>
          </DateContainer>
        </Task>
      </Block3>
      {isAdmin && (
        <button onClick={() => router.push("/jobProfile")}>
          تحقق من مؤشرات العمل
        </button>
      )}
    </Container>
  );
};

export default Profile;
