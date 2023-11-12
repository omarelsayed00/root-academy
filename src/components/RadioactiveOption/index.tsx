/* eslint-disable @next/next/no-img-element */

//import Button from "@components/Button";
import React, { useState } from "react";
import {
  Button,
  Button2,
  Container,
  Content,
  Driver,
  Form,
  Info,
  Separator,
  User,
  DriverForm,
  RatingForm,
} from "./styles";
//import Tooltip from "@mui/material/Tooltip";

import Tooltip from "react-simple-tooltip";
import { css, DefaultTheme, ThemedCssFunction } from "styled-components";
import Rating from "@components/Rating";

//let css: ThemedCssFunction<DefaultTheme>;

const RadioactiveOption = () => {
  let driverInfo = (
    <DriverForm>
      <img
        src="/images/userIcon.png"
        alt="userPhoto"
        width={60}
        height={60}
        //onMouseEnter={() => setIsShown(true)}
        //onMouseLeave={() => setIsShown(false)}
      ></img>
      <h1>علي أحمد ابن رامي</h1>
      <p>سائق شاحنة كبيرة</p>
      <RatingForm>
        <div dir="ltr">
          <h1>4.6</h1>
          <p> /5</p>
        </div>
        <div dir="ltr">
          <Rating rating={4.5} />
          <p> (120)</p>
        </div>
      </RatingForm>
    </DriverForm>
  );

  return (
    <Container>
      <Content>
        <img src="/images/mega.png" alt="phones" width={150} height={130} />
        <Form>
          <h1>شاحنة MEGA 8C 420 </h1>
          <p>
            شاحنة MEGA 8C 420 تمتاز بتوازن و تبات عالي الجودة تستخدم في نقل
            المعادن و الأتاث بالإضافة للمواد الغداية سريعة جدا أتناء عملية
            النقل...
          </p>
        </Form>
      </Content>
      <Separator />
      <Driver>
        <User>
          <img
            src="/images/userIcon.png"
            alt="userPhoto"
            width={40}
            height={40}
            //onMouseEnter={() => setIsShown(true)}
            //onMouseLeave={() => setIsShown(false)}
          ></img>
          <Tooltip
            radius="8"
            arrow="28"
            zIndex="1"
            customCss={css`
              white-space: nowrap;
              text-align: left;
              //width: 5;
              //padding: 5px;
              //padding-right: 25px;
              //border-radius: 60px;
              height: "190px";
              border: none;
            `}
            content={driverInfo}
            background="#ffffff"
            border="none"
            padding="none"
            placement="bottom"
            fadeDuration="500"
            width="600px"

            //fixed="true"
          >
            <Info>
              <h1>علي أحمد ابن رامي</h1>
              <h3>مستخدم لوجيست</h3>
            </Info>
          </Tooltip>
        </User>

        <div>
          <Button>قبول السائق</Button>
          <Button2>سائق جديد</Button2>
        </div>
      </Driver>
    </Container>
  );
};

export default RadioactiveOption;
