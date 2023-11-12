/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Button2,
  Button3,
  Container,
  Content,
  DateContainer,
  DeleteButton,
  Info,
  Schedule,
  Time,
  TimeInput,
  Title,
  Upload,
  UploadContainer,
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import UploadIcon from "@icons/Upload2";
import Icon from "@components/Icon";
import { matchesData } from "@mocks/matches";
import DeleteIcon from "@icons/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import CalendarIcon from "@icons/Calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ar } from "date-fns/locale";

const Profile = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [matches, setMatches] = useState(matchesData);
  const [logo, setLogo] = useState("");
  const [fileName, setFileName] = useState("");
  const [team, setTeam] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("م");

  const [day, setDay] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const [deletedId, setDeletedId] = useState(0);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
      setLogo(event.target.files[0]);
    }
  };

  const formatDate = (date: any) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleKeyDown = (e: any) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      e.preventDefault(); // Prevents the cursor from moving in the input field
      setAmpm((prevAmpm) => (prevAmpm === "ص" ? "م" : "ص"));
    }
  };

  const addMatch = () => {
    const newMatch = {
      id: matches.length + 1,
      name: team,
      photo: fileName,
      hour: hour,
      minute: minute,
      ampm: ampm,
      date: selectedDate,
    };
    setTeam("");
    setFileName("");
    setDay(undefined);
    setMonth(undefined);
    setYear(undefined);
    setHour("");
    setMinute("");

    setMatches([...matches, newMatch]);
  };

  const handleOpenDialog = (id: any) => {
    setDeletedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const deleteMatch = () => {
    setMatches((users) =>
      users.filter((user) => {
        return user.id !== deletedId;
      })
    );
    setOpenDialog(false);
  };

  return (
    <Container>
      <Schedule>
        <h1>المباراة القادمة</h1>
        <Content>
          <Info style={{ width: "120%" }}>
            <h2>اسم الفريق المنافس</h2>
            <input value={team} onChange={(e) => setTeam(e.target.value)} />
          </Info>
          <Info>
            <h2>لوجو الفريق المنافس</h2>
            <UploadContainer>
              <div style={{ width: "100%" }}>
                <label htmlFor="file-input" style={{ width: "100%" }}>
                  <Upload>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      {fileName}
                    </div>
                    <Icon>
                      <UploadIcon />
                    </Icon>
                  </Upload>
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={onImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </UploadContainer>
          </Info>
          <Info>
            <h2>تاريخ المباراة</h2>{" "}
            <DateContainer>
              <style>{css}</style>
              <Icon>
                <CalendarIcon />
              </Icon>
              <DatePicker
                selected={selectedDate}
                onChange={(date: any) => setSelectedDate(date)}
                locale={ar}
                dateFormat="dd/MM/yyyy"
              />
            </DateContainer>
          </Info>
          <Info style={{ width: "45%" }}>
            <h2>التوقيت</h2>
            <TimeInput>
              <input
                type="number"
                value={minute}
                onChange={(e) => {
                  const i = e.target.value;
                  if (/^\d{0,2}$/.test(i)) {
                    setMinute(i);
                  }
                }}
              />
              <h3>:</h3>
              <input
                type="number"
                value={hour}
                onChange={(e) => {
                  const i = e.target.value;
                  if (/^\d{0,2}$/.test(i)) {
                    setHour(i);
                  }
                }}
              />
              <input
                type="text"
                value={ampm}
                maxLength={1}
                onKeyDown={handleKeyDown}
                readOnly
              />
            </TimeInput>
          </Info>{" "}
        </Content>
        <Button onClick={addMatch}>إضافة المباراة</Button>
      </Schedule>
      {matches.map((match: any, idx: number) => (
        <Schedule key={`${idx}`}>
          <div></div>
          <Title>
            <div></div>
            <h1>المباراة القادمة</h1>
            <DeleteButton onClick={() => handleOpenDialog(match.id)}>
              <p>حذف</p>
              <Icon>
                <DeleteIcon />
              </Icon>
            </DeleteButton>
          </Title>

          <Content>
            <Info style={{ width: "120%" }}>
              <h2>اسم الفريق المنافس</h2>
              <h4>{match.name}</h4>
            </Info>
            <Info>
              <h2>لوجو الفريق المنافس</h2>
              <UploadContainer>
                <h5 style={{ width: "100%", textAlign: "center" }}>
                  {match.photo}
                </h5>
                <Icon>
                  <UploadIcon />
                </Icon>
              </UploadContainer>
            </Info>
            <Info>
              <h2>تاريخ المباراة</h2>{" "}
              <DateContainer>
                <input value={formatDate(match.date)} />
              </DateContainer>
            </Info>
            <Info style={{ width: "45%" }}>
              <h2>التوقيت</h2>
              <Time>
                <p>{match.minute}</p>
                <h3>:</h3>
                <p>{match.hour}</p>
                <p>{match.ampm}</p>
              </Time>
            </Info>{" "}
          </Content>
        </Schedule>
      ))}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span style={{ fontSize: "24px", fontFamily: "Arb-Regular" }}>
            هل انت متأكد من حذف المباراة؟
          </span>
        </DialogTitle>

        <DialogActions style={dialogStyles2}>
          <Button3 onClick={deleteMatch}>تأكيد</Button3>
          <Button2 onClick={handleCloseDialog} autoFocus>
            رجوع
          </Button2>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Profile;

const dialogStyles2 = {
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  gap: "8px",
  padding: "12px 76px",
};

const css = ` 


  .react-datepicker {
    font-size: 1rem !important;
  }

  .react-datepicker__day-name, .react-datepicker__day {
    margin: 0.4rem 0.5rem !important;

  }

`;
