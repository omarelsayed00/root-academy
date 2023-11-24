/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Content,
  DeleteButton,
  EditButton,
  Info,
  Schedule,
  SelectStyled,
  SelectWrapper,
  Time,
  Title,
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import SelectDropdown from "@components/Select copy 3";
import { trainingsData } from "@mocks/timing";
import DeleteIcon from "@icons/Delete";
import Icon from "@components/Icon";
import EditIcon from "@icons/Edit";
import {
  Button3,
  Button2,
  TimeInput,
} from "@containers/Upcoming Matches/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Backdrop } from "@mui/material";
import Cookies from "js-cookie";
import { SelectFilter } from "@containers/Player Profile/styles";

const optionsData = [
  { label: "السبت", value: "0" },
  { label: "الأحد", value: "1" },
  { label: "الإثنين", value: "2" },
  { label: "الثلاثاء", value: "3" },
  { label: "الأربعاء", value: "5" },
  { label: "الخميس", value: "6" },
  { label: "الجمعة", value: "7" },
];

const days = ["اليوم الأول", "اليوم الثاني", "اليوم الثالث"];

const Profile = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [options, setOptions] = useState(
    optionsData /* .filter((option) => {
      return option != props.team;
    }) */
  );
  const [trainings, setTrainings] = useState([]);
  const [team, setTeam] = useState("");
  const [hour1, setHour1] = useState("");
  const [minute1, setMinute1] = useState("");
  const [ampm1, setAmpm1] = useState("م");
  const [hour2, setHour2] = useState("");
  const [minute2, setMinute2] = useState("");
  const [ampm2, setAmpm2] = useState("م");
  const [hour3, setHour3] = useState("");
  const [minute3, setMinute3] = useState("");
  const [ampm3, setAmpm3] = useState("م");
  const [day1, setDay1] = useState("الأحد");
  const [day2, setDay2] = useState("الأحد");
  const [day3, setDay3] = useState("الأحد");

  const [eteam, setETeam] = useState("");
  const [ehour1, setEHour1] = useState("");
  const [eminute1, setEMinute1] = useState("");
  const [eampm1, setEAmpm1] = useState("م");
  const [ehour2, setEHour2] = useState("");
  const [eminute2, setEMinute2] = useState("");
  const [eampm2, setEAmpm2] = useState("م");
  const [ehour3, setEHour3] = useState("");
  const [eminute3, setEMinute3] = useState("");
  const [eampm3, setEAmpm3] = useState("م");
  const [eday1, setEDay1] = useState("");
  const [eday2, setEDay2] = useState("");
  const [eday3, setEDay3] = useState("");

  const [editingId, setEditingId] = useState(0);
  const [deletedId, setDeletedId] = useState(0);
  const [editingTraining, setEditingTraining] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(".......");

  const { BASE_URL } = process.env;

  useEffect(() => {
    fetchTrainings();
    fetchTeams();
  }, []);

  const fetchTrainings = async () => {
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .get(`${BASE_URL}/admins/trainings`, config)
      .then((response) => {
        console.log(response.data);
        setTrainings(response.data.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          router.push("/login");
          Cookies.remove("loggedIn");
        } else {
          console.log(error.response);
        }
      });
    setIsLoading(false);
  };

  const fetchTeams = async () => {
    setIsLoading(true);
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
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const handleSelectChange1 = (event: any) => {
    setDay1(event.target.value);
  };
  const handleSelectChange2 = (event: any) => {
    setDay2(event.target.value);
  };
  const handleSelectChange3 = (event: any) => {
    setDay3(event.target.value);
  };
  const handleSelectChangeE1 = (event: any) => {
    setEDay1(event.target.value);
  };
  const handleSelectChangeE2 = (event: any) => {
    setEDay2(event.target.value);
  };
  const handleSelectChangeE3 = (event: any) => {
    setEDay3(event.target.value);
  };

  const Select = ({ options, onChange, value }: any) => (
    <SelectWrapper>
      <SelectStyled value={value} onChange={onChange}>
        {options.map((option: any) => (
          <option key={option.value} value={option.label}>
            {option.label}
          </option>
        ))}
      </SelectStyled>
    </SelectWrapper>
  );

  const handleKeyDown1 = (e: any) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      e.preventDefault(); // Prevents the cursor from moving in the input field
      setAmpm1((prevAmpm) => (prevAmpm === "ص" ? "م" : "ص"));
    }
  };

  const handleKeyDown2 = (e: any) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      e.preventDefault(); // Prevents the cursor from moving in the input field
      setAmpm2((prevAmpm) => (prevAmpm === "ص" ? "م" : "ص"));
    }
  };

  const handleKeyDown3 = (e: any) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      e.preventDefault(); // Prevents the cursor from moving in the input field
      setAmpm3((prevAmpm) => (prevAmpm === "ص" ? "م" : "ص"));
    }
  };

  const handleKeyDownE1 = (e: any) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      e.preventDefault(); // Prevents the cursor from moving in the input field
      setEAmpm1((prevAmpm) => (prevAmpm === "ص" ? "م" : "ص"));
    }
  };
  const handleKeyDownE2 = (e: any) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      e.preventDefault(); // Prevents the cursor from moving in the input field
      setEAmpm2((prevAmpm) => (prevAmpm === "ص" ? "م" : "ص"));
    }
  };
  const handleKeyDownE3 = (e: any) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      e.preventDefault(); // Prevents the cursor from moving in the input field
      setEAmpm3((prevAmpm) => (prevAmpm === "ص" ? "م" : "ص"));
    }
  };

  const handleOpenDialog = (id: any) => {
    setDeletedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const deleteTraining = () => {
    setTrainings((users) =>
      users.filter((user: any) => {
        return user.id !== deletedId;
      })
    );
    setOpenDialog(false);
  };

  const addTraining = () => {
    const newTraining = {
      id: trainings.length + 1,
      name: team,
      day1: day1,
      day2: day2,
      day3: day3,
      h1: hour1,
      h2: hour2,
      h3: hour3,
      m1: minute1,
      m2: minute2,
      m3: minute3,
      am1: ampm1,
      am2: ampm2,
      am3: ampm3,
    };
    setTeam("");
  };

  const editTraining = (id: any, training: any) => {
    setEditingId(id);
    setEditingTraining(training);
    setETeam(training.name);
    setEHour1(training.h1);
    setEMinute1(training.m1);
    setEAmpm1(training.am1);
    setEDay1(training.day1);
    setEHour2(training.h2);
    setEMinute2(training.m2);
    setEAmpm2(training.am2);
    setEDay2(training.day2);
    setEHour3(training.h3);
    setEMinute3(training.m3);
    setEAmpm3(training.am3);
    setEDay3(training.day3);
  };

  const confirmEdit = async () => {
    const editedTrainings = trainings.map((training: any) => {
      if (editingId == training.id) {
        return {
          name: eteam,
          day1: eday1,
          day2: eday2,
          day3: eday3,
          h1: ehour1,
          h2: ehour2,
          h3: ehour3,
          m1: eminute1,
          m2: eminute2,
          m3: eminute3,
          am1: eampm1,
          am2: eampm2,
          am3: eampm3,
        };
      }
      return training;
    });
    //setTrainings(editedTrainings);
    setEditingId(0);
  };

  const handleSelectChange = (event: any) => {
    setSelectedTeam(event.target.value);
  };

  return (
    <Container>
      <Schedule>
        <Title>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Info>
              <h2>اسم الفريق</h2>
              <SelectFilter value={selectedTeam} onChange={handleSelectChange}>
                {teams.map((bus: any, index: any) => (
                  <option key={index} value={bus.name}>
                    {bus.name}
                  </option>
                ))}
              </SelectFilter>
            </Info>
          </div>
        </Title>
        <Content>
          <Info>
            <h2>اختار اليوم الأول</h2>
            <Select
              value={day1}
              options={optionsData}
              onChange={handleSelectChange1}
            />
          </Info>
          <Info>
            <h2>التوقيت</h2>
            <TimeInput>
              <input
                type="number"
                value={minute1}
                onChange={(e) => {
                  const i = e.target.value;
                  if (/^\d{0,2}$/.test(i)) {
                    setMinute1(i);
                  }
                }}
              />
              <h3>:</h3>
              <input
                type="number"
                value={hour1}
                onChange={(e) => {
                  const i = e.target.value;
                  if (/^\d{0,2}$/.test(i)) {
                    setHour1(i);
                  }
                }}
              />
              <input
                type="text"
                value={ampm1}
                onKeyDown={handleKeyDown1}
                readOnly
              />
            </TimeInput>
          </Info>{" "}
          <Info>
            <h2>اختار اليوم الثاني</h2>
            <Select
              value={day2}
              options={optionsData}
              onChange={handleSelectChange2}
            />
          </Info>
          <Info>
            <h2>التوقيت</h2>
            <TimeInput>
              <input
                type="number"
                value={minute2}
                onChange={(e) => {
                  const i = e.target.value;
                  if (/^\d{0,2}$/.test(i)) {
                    setMinute2(i);
                  }
                }}
              />
              <h3>:</h3>
              <input
                type="number"
                value={hour2}
                onChange={(e) => {
                  const i = e.target.value;
                  if (/^\d{0,2}$/.test(i)) {
                    setHour2(i);
                  }
                }}
              />
              <input
                type="text"
                value={ampm2}
                onKeyDown={handleKeyDown2}
                readOnly
              />
            </TimeInput>
          </Info>
          <Info>
            <h2>اختار اليوم الثالث</h2>
            <Select
              value={day3}
              options={optionsData}
              onChange={handleSelectChange3}
            />
          </Info>
          <Info>
            <h2>التوقيت</h2>
            <TimeInput>
              <input
                type="number"
                value={minute3}
                onChange={(e) => {
                  const i = e.target.value;
                  if (/^\d{0,2}$/.test(i)) {
                    setMinute3(i);
                  }
                }}
              />
              <h3>:</h3>
              <input
                type="number"
                value={hour3}
                onChange={(e) => {
                  const i = e.target.value;
                  if (/^\d{0,2}$/.test(i)) {
                    setHour3(i);
                  }
                }}
              />
              <input
                type="text"
                value={ampm3}
                onKeyDown={handleKeyDown3}
                readOnly
              />
            </TimeInput>
          </Info>
        </Content>
        <p></p>
        <Button onClick={addTraining}>إضافة فريق</Button>
      </Schedule>

      {trainings.map((training: any, idx: number) => (
        <Schedule key={`${idx}`}>
          {editingId == training.id ? (
            <Schedule>
              <Title>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <input
                    value={eteam}
                    onChange={(e) => setETeam(e.target.value)}
                  />
                </div>
              </Title>
              <Content>
                <Info>
                  <h2>اختار اليوم الأول</h2>
                  <Select
                    value={eday1}
                    options={optionsData}
                    onChange={handleSelectChangeE1}
                  />
                </Info>
                <Info>
                  <h2>التوقيت</h2>
                  <TimeInput>
                    <input
                      type="number"
                      value={eminute1}
                      onChange={(e) => {
                        const i = e.target.value;
                        if (/^\d{0,2}$/.test(i)) {
                          setEMinute1(i);
                        }
                      }}
                    />
                    <h3>:</h3>
                    <input
                      type="number"
                      value={ehour1}
                      onChange={(e) => {
                        const i = e.target.value;
                        if (/^\d{0,2}$/.test(i)) {
                          setEHour1(i);
                        }
                      }}
                    />
                    <input
                      type="text"
                      value={eampm1}
                      onKeyDown={handleKeyDownE1}
                      readOnly
                    />
                  </TimeInput>
                </Info>{" "}
                <Info>
                  <h2>اختار اليوم الأول</h2>
                  <Select
                    value={eday2}
                    options={optionsData}
                    onChange={handleSelectChangeE2}
                  />
                </Info>
                <Info>
                  <h2>التوقيت</h2>
                  <TimeInput>
                    <input
                      type="number"
                      value={eminute2}
                      onChange={(e) => {
                        const i = e.target.value;
                        if (/^\d{0,2}$/.test(i)) {
                          setEMinute2(i);
                        }
                      }}
                    />
                    <h3>:</h3>
                    <input
                      type="number"
                      value={ehour2}
                      onChange={(e) => {
                        const i = e.target.value;
                        if (/^\d{0,2}$/.test(i)) {
                          setEHour2(i);
                        }
                      }}
                    />
                    <input
                      type="text"
                      value={eampm2}
                      onKeyDown={handleKeyDownE2}
                      readOnly
                    />
                  </TimeInput>
                </Info>
                <Info>
                  <h2>اختار اليوم الأول</h2>
                  <Select
                    value={eday3}
                    options={optionsData}
                    onChange={handleSelectChangeE3}
                  />
                </Info>
                <Info>
                  <h2>التوقيت</h2>
                  <TimeInput>
                    <input
                      type="number"
                      maxLength={2}
                      value={eminute3}
                      onChange={(e) => {
                        const i = e.target.value;
                        if (/^\d{0,2}$/.test(i)) {
                          setEMinute3(i);
                        }
                      }}
                    />
                    <h3>:</h3>
                    <input
                      type="number"
                      value={ehour3}
                      onChange={(e) => {
                        const i = e.target.value;
                        if (/^\d{0,2}$/.test(i)) {
                          setEHour3(i);
                        }
                      }}
                    />
                    <input
                      type="text"
                      value={eampm3}
                      onKeyDown={handleKeyDownE3}
                      readOnly
                    />
                  </TimeInput>
                </Info>
              </Content>
              <p></p>
              <Button onClick={confirmEdit}>تأكيد</Button>
            </Schedule>
          ) : (
            <Schedule style={{ padding: "0px 0px", paddingBottom: "16px" }}>
              <Title>
                <div></div>
                <h1>{training.teamName}</h1>
                <div>
                  <EditButton
                    onClick={() => editTraining(training.id, training)}
                  >
                    <Icon>
                      <EditIcon />
                    </Icon>
                  </EditButton>
                  <DeleteButton onClick={() => handleOpenDialog(training.id)}>
                    <p>حذف</p>
                    <Icon>
                      <DeleteIcon />
                    </Icon>
                  </DeleteButton>
                </div>
              </Title>
              <Content>
                <Info>
                  <h2>اليوم الأول</h2>
                  <h4>{training.day1}</h4>
                </Info>{" "}
                <Info>
                  <h2>التوقيت</h2>
                  <Time>
                    <p>{training.m1}</p>
                    <h3>:</h3>
                    <p>{training.h1}</p>
                    <p>{training.am1}</p>
                  </Time>
                </Info>{" "}
                <Info>
                  <h2>اليوم الثاني</h2>
                  <h4>{training.day2}</h4>
                </Info>
                <Info>
                  <h2>التوقيت</h2>
                  <Time>
                    <p>{training.m2}</p>
                    <h3>:</h3>
                    <p>{training.h2}</p>
                    <p>{training.am2}</p>
                  </Time>
                </Info>
                <Info>
                  <h2>اليوم الثالث</h2>
                  <h4>{training.day3}</h4>
                </Info>
                <Info>
                  <h2>التوقيت</h2>
                  <Time>
                    <p>{training.m3}</p>
                    <h3>:</h3>
                    <p>{training.h3}</p>
                    <p>{training.am3}</p>
                  </Time>
                </Info>
              </Content>
            </Schedule>
          )}
        </Schedule>
      ))}
      <Button>حفظ المواعيد</Button>

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
          <Button3 onClick={deleteTraining}>تأكيد</Button3>
          <Button2 onClick={handleCloseDialog} autoFocus>
            رجوع
          </Button2>
        </DialogActions>
      </Dialog>
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

export default Profile;

const dialogStyles2 = {
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  gap: "8px",
  padding: "12px 76px",
};
