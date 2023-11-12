/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Actions,
  Button,
  Button2,
  Container,
  Content,
  Form,
  MLContainer,
  MLHeader,
  MLStyled,
  SelectControl,
  Team,
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import { useRouter } from "next/router";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import SelectDropdown from "@components/Select";
import SelectDropdown2 from "@components/Select2";
import SelectDropdown3 from "@components/Select3";

import CloseIcon from "@icons/Close";

const optionsData = [
  "الفريق الأول",
  "الفريق الثاني",
  "الفريق الثالث",
  "فريق الناشئين",
];

const MovePlayer = (props: any) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("...");
  const [options, setOptions] = useState(
    optionsData.filter((option) => {
      return option != props.team;
    })
  );

  const movePlayer = () => {
    console.log("id: " + props.movedId);

    const editedPlayers = props.players.map((member: any) => {
      if (member.id == props.movedId) {
        return {
          ...member,
          team: selected,
        };
      }
      return member;
    });

    props.setPlayers(editedPlayers);
    props.onClose();
  };

  return (
    <MLStyled>
      <MLContainer>
        <MLHeader>
          <h1>نقل اللاعب</h1>
        </MLHeader>
        <Container>
          <Form>
            <Content>
              <p>من</p>
              <Team>
                <h1>{props.team}</h1>
              </Team>
              <p>إلي</p>
              <SelectDropdown
                data={options}
                settings={{
                  textColor: "black",
                  arrowColor: "black",
                  transparent: true,
                }}
                setValue={setSelected}
                value={selected}
              />
            </Content>
            <Actions>
              <Button type="button" onClick={movePlayer}>
                تأكيد
              </Button>
              <Button2 onClick={props.onClose} autoFocus>
                رجوع
              </Button2>
            </Actions>
          </Form>
        </Container>
      </MLContainer>
    </MLStyled>
  );
};

export default MovePlayer;

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
