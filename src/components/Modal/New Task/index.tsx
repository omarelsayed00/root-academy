/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Button,
  Calender,
  Column,
  Container,
  Content,
  Form,
  InputControl,
  MLContainer,
  MLHeader,
  MLStyled,
  Row,
  TextArea,
  SelectControl,
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import TriangleIcon from "@icons/Triangle";
import Icon from "@components/Icon";
import RequiredIcon from "@icons/Rating";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import "react-datetime-picker/dist/DateTimePicker.css";
import Select from "react-select";

//import DatePicker from "react-date-picker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ar } from "date-fns/locale";
import CalendarIcon from "@icons/Calendar";
import SelectDropdown from "@components/Select";
import SelectDropdown2 from "@components/Select2";
import SelectDropdown3 from "@components/Select3";

import CloseIcon from "@icons/Close";

const dates = [
  { label: "الكل", value: 1 },
  { label: "اليوم", value: 2 },
  { label: "", value: 2 },
  { label: "يناير 2022", value: 1 },
  { label: "فبراير 2022", value: 2 },
  /*{ label: "مارس 2022", value: 3 },
  { label: "أبريل 2022", value: 4 },
  { label: "مايو 2022", value: 5 },
  { label: "يونيو 2022", value: 6 }, */
];

/* import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css"; */
const NewTask = (props: any) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());

  /*   const [choice1, setChoice1] = useState({
    isActive: false,
    value: "Select...",
  });
  const [choice2, setChoice2] = useState({
    isActive: false,
    value: "Select...",
  });
  const [choice3, setChoice3] = useState({
    isActive: false,
    value: "Select...",
  }); */

  return (
    <MLStyled>
      <MLContainer>
        <MLHeader>
          <div className="icon">
            <Icon onClick={props.onClose}>
              <CloseIcon />
            </Icon>
          </div>
        </MLHeader>
        <Container>
          <Form>
            <Content>
              <Column>
                <Row>
                  <h1>عنوان المهمة</h1>
                  <InputControl>
                    <input type="text" />
                    <Icon>
                      <RequiredIcon />
                    </Icon>
                  </InputControl>
                  <h1>مبادرة</h1>
                  <SelectControl>
                    <SelectDropdown
                      data={Array.from({ length: 8 })}
                      settings={{
                        textColor: "black",
                        arrowColor: "orange",
                        transparent: true,
                      }}
                      value={undefined}
                      setValue={undefined}
                    />
                    <Icon>
                      <RequiredIcon />
                    </Icon>
                  </SelectControl>
                </Row>
                <Row>
                  <h1>الإدارة</h1>
                  <SelectControl>
                    <SelectDropdown2
                      data={Array.from({ length: 8 })}
                      settings={{
                        textColor: "black",
                        arrowColor: "orange",
                        transparent: true,
                      }}
                    />
                    <Icon>
                      <RequiredIcon />
                    </Icon>
                  </SelectControl>
                  <h1>الأعضاء المقترحون</h1>
                  <SelectControl>
                    <SelectDropdown3
                      data={Array.from({ length: 8 })}
                      settings={{
                        textColor: "black",
                        arrowColor: "orange",
                        transparent: true,
                      }}
                    />
                    <Icon>
                      <RequiredIcon />
                    </Icon>
                  </SelectControl>
                </Row>
              </Column>
              <Column>
                <Row>
                  <h1>وصف المهمة</h1>
                  <TextArea>
                    <textarea />
                    <div>
                      <Icon>
                        <RequiredIcon />
                      </Icon>
                    </div>
                  </TextArea>
                </Row>
                <Row>
                  <h1>الإطار الزمنى</h1>

                  <InputControl>
                    <Calender>
                      <Icon>
                        <CalendarIcon />
                      </Icon>
                      <DatePicker
                        selected={startDate}
                        onChange={(date: any) => setStartDate(date)}
                        showTimeSelect
                        locale={ar}
                      ></DatePicker>
                    </Calender>
                    <Icon>
                      <RequiredIcon />
                    </Icon>
                  </InputControl>
                  <h1>موعد اجتماع مقترح</h1>
                  <InputControl>
                    <Calender>
                      <Icon>
                        <CalendarIcon />
                      </Icon>
                      <DatePicker
                        selected={startDate}
                        onChange={(date: any) => setStartDate(date)}
                        showTimeSelect
                        locale={ar}
                      ></DatePicker>
                    </Calender>
                    <Icon>
                      <RequiredIcon />
                    </Icon>
                  </InputControl>
                </Row>
              </Column>
            </Content>
            <Button onClick={props.onClose}>طلب موافقة</Button>
          </Form>
        </Container>
      </MLContainer>
    </MLStyled>
  );
};

export default NewTask;

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    //background: "#f3f3f3",
    width: "500%",
    //minHeight: "65px",
    maxHeight: "25px",
    fontSize: "14px",
    color: "black",
    //marginTtop: "10px",
    border: "none",
    borderColor: state.isFocused ? "grey" : "red",
  }),
  placeholder: (defaultStyles: any) => {
    return {
      ...defaultStyles,
      color: "grey",
    };
  },
};
