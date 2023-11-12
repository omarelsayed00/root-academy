/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";

const About = () => {
  const router = useRouter();
  const [image, setImage] = useState("/images/profilePhoto.png");
  const isAdmin = Cookies.get("isAdmin");

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(
    "في عام 1948م تأسست الجهة المسئولة عن الطيران المدني في المملكة تحت مسمى (مصلحة الطيران المدني) لتضم كلا من الخطوط السعودية وإدارة الطيران المدني، وفي عام 1959م تم فصل الخطوط السعودية عن الطيران المدني ليصبح المسمى الجديد للأخيرة (مديرية الطيران المدني)، وفي عام 1977م تم تغيير مسمى (مديرية الطيران المدني) إلى (رئاسة الطيران المدني).وبموجب قرار مجلس الوزراء رقم (13) والذي صدر في 17/1/1425هـ (2004م) تحولت رئاسة الطيران المدني إلى هيئة عامة ذات شخصية اعتبارية واستقلال مالي وإداري لتعمل وفق أسس ومعايير تجارية، وليصبح مسماها الجديد (الهيئة العامة للطيران المدني).    وفي 9/12/1432هـ (2011م) صدر الأمر الملكي الكريم رقم أ/230 والذي قضى بفصل الهيئة العامة للطيران المدني عن وزارة الدفاع، الجوي في المملكة.وفي 30/7/1437هـ ( 2016م) صدر الأمر الملكي الكريم رقم أ/133 والذي قضى بربط الهيئة العامة للطيران المدني بوزير النقل، وفي 11/4/1438هـ صدر المرسوم الملكي الكريم رقم (17049) الذي قضى بفصل الجانب التشريعي عن الجانب التشغيلي في المملكةِ، ومن ثم الوقوف على مسافةٍ واحدةٍ من كافةِ المشغلين والعاملين في القطاع. "
  );

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleContentChange = (event: any) => {
    setContent(event.target.value);
  };

  const handleSaveChangesButtonClick = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      <h1>نظرة عامة</h1>
      <p>{content}</p>
      <p>
        وفي 9/12/1432هـ (2011م) صدر الأمر الملكي الكريم رقم أ/230 والذي قضى بفصل
        الهيئة العامة للطيران المدني عن وزارة الدفاع، الجوي في المملكة.وفي
        30/7/1437هـ ( 2016م) صدر الأمر الملكي الكريم رقم أ/133 والذي قضى بربط
        الهيئة العامة للطيران المدني بوزير النقل، وفي 11/4/1438هـ صدر المرسوم
        الملكي الكريم رقم (17049) الذي قضى بفصل الجانب التشريعي عن الجانب
        التشغيلي في المملكةِ، ومن ثم الوقوف على مسافةٍ واحدةٍ من كافةِ المشغلين
        والعاملين في القطاع.
      </p>
      <p></p>
      <h1>الرؤية</h1>
      <p>
        ريادة المملكة فى مجال الطيران عبر تقديم خدمتات تنظيمية تلبى احتياجات
        المسافري وتواكب أفضل التقنيات الحديثة .
      </p>
      <p></p> <h1>الرسالة</h1>
      <p>
        جهه تنظيمية رائدة عالمياً تتسم بالموثوقية والابتكار فى قطاع الطيران .
      </p>
      <div></div>
      {/*       <button>حفظ التعديلات</button>
       */}{" "}
    </Container>
  );
};

export default About;
