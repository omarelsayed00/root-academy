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

const optionsData = [
  "الفريق الأول",
  "الفريق الثاني",
  "الفريق الثالث",
  "فريق الناشئين",
];

const MovePlayer = (props: any) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTeam, setSelectedTeam] = useState(".......");
  const [teams, setTeams] = useState([]);
  const [options, setOptions] = useState([]);

  const { BASE_URL } = process.env;

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    props.setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .get(`${BASE_URL}/admins/teams`, config)
      .then((response) => {
        console.log(response.data.data.date);
        setTeams(response.data.data.date);
        setOptions(
          response.data.data.date
            .filter((team: any) => team.name !== props.team)
            .map((team: any) => team.name)
        );
        //setSelectedBus(response.data.results[0].bus_name);
      })
      .catch((error) => {
        console.log(error.response);
      });
    props.setIsLoading(false);
  };

  const movePlayer = async () => {
    const team: any = teams.find((team: any) => team.name === selectedTeam);
    const formData = new FormData();
    formData.append("_method", "put");
    formData.append("team_id", team.id);
    formData.append("name", props.currentPlayer.name);
    formData.append("weight", props.currentPlayer.weight);
    formData.append("length", props.currentPlayer.length);
    formData.append("level", props.currentPlayer.level);
    formData.append("playerRating", props.currentPlayer.playerRating);
    formData.append("physical", props.currentPlayer.strength);
    formData.append("attack", props.currentPlayer.attack);
    formData.append("defense", props.currentPlayer.defense);
    formData.append("dribble", props.currentPlayer.skills);
    formData.append("position", props.currentPlayer.position);

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/players/${props.movedId}`, formData, config)
      .then((response) => {
        console.log(response.data);
        props.fetchPlayers();
      })
      .catch((error) => {
        console.log(error.response);
      });
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
                setValue={setSelectedTeam}
                value={selectedTeam}
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
