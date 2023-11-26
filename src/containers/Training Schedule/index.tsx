/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Content,
  DeleteButton,
  EditButton,
  Info,
  Row,
  Schedule,
  SelectStyled,
  SelectWrapper,
  Time,
  Title,
  AddButton,
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

const amPmOptions = [
  { label: "ص", value: "0" },
  { label: "م", value: "1" },
];

const days = [
  "الأول",
  "الثاني",
  "الثالث",
  "الرابع",
  "الخامس",
  "السادس",
  "السابع",
  "الثامن",
  "التاسع",
  "العاشر",
];

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
  //const [editingSchedule, setEditingSchedule] = useState(null);
  const [schedule, setSchedule] = useState([
    { day: "", time: { hour: "", minute: "", ampm: "ص" } },
  ]);

  const [editingSchedule, setEditingSchedule] = useState([
    { day: "", time: { hour: "", minute: "", ampm: "ص" } },
  ]);

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

  const handleOpenDialog = (id: any) => {
    setDeletedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const deleteTraining = async () => {
    setOpenDialog(false);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("_method", "delete");
    formData.append(`trainingIds[0]`, deletedId.toString());

    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    await axios
      .post(`${BASE_URL}/admins/trainings/delete`, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    fetchTrainings();
    setIsLoading(false);
    setOpenDialog(false);
  };

  const addTraining = async () => {
    setIsLoading(true);
    const team: any = teams.filter((team: any) => team.name === selectedTeam);
    const formData = new FormData();
    schedule.forEach((item, index) => {
      formData.append(`trainings[${index}][team_id]`, team[0].id);
      formData.append(`trainings[${index}][date]`, item.day);
      formData.append(
        `trainings[${index}][time]`,
        generate24HourTime(item.time.hour, item.time.minute, item.time.ampm)
      );
    });

    /// EDIT GAME STATUS

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/trainings`, formData, config)
      .then((response) => {
        console.log(response.data);
        fetchTrainings();
        setEditingId(0);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setTeam("");
  };

  const editTraining = (id: any, training: any) => {
    setEditingId(id);
    setEditingTraining(training);
    convertToEditingSchedule(training);
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

  const addDayAndTime = () => {
    setSchedule([
      ...schedule,
      { day: "", time: { hour: "", minute: "", ampm: "" } },
    ]);
  };

  const handleInputChange = (index: number, fieldName: any, value: any) => {
    const updatedSchedule: any = [...schedule];
    if (fieldName === "day") {
      updatedSchedule[index][fieldName] = value;
    } else if (
      fieldName === "hour" ||
      fieldName === "minute" ||
      fieldName === "ampm"
    ) {
      updatedSchedule[index].time[fieldName] = value;
    }
    setSchedule(updatedSchedule);
  };

  const handleEditInputChange = (index: number, fieldName: any, value: any) => {
    const updatedSchedule: any = [...editingSchedule];
    if (fieldName === "day") {
      updatedSchedule[index][fieldName] = value;
    } else if (
      fieldName === "hour" ||
      fieldName === "minute" ||
      fieldName === "ampm"
    ) {
      updatedSchedule[index].time[fieldName] = value;
    }
    setEditingSchedule(updatedSchedule);
  };

  const generate24HourTime = (hour: any, minute: any, ampm: any) => {
    let hour24 = parseInt(hour, 10);

    if (ampm === "م" && hour !== "12") {
      hour24 += 12;
    } else if (ampm === "ص" && hour === "12") {
      hour24 = 0;
    }
    const formattedTime = `${hour24.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };

  const convertTo12HourTime = (time: any) => {
    const [hour, minute] = time.split(":");
    let hour12 = parseInt(hour, 10);
    let period = "ص";

    if (hour12 >= 12) {
      period = "م";
      if (hour12 > 12) {
        hour12 -= 12;
      }
    }

    if (hour12 == 0) {
      hour12 += 12;
    }

    const formattedTime = `${hour12
      .toString()
      .padStart(2, "0")}:${minute.padStart(2, "0")} ${period}`;
    return (
      <Time>
        <p>{minute}</p>
        <h3>:</h3>
        <p>{hour12}</p>
        <p>{period}</p>
      </Time>
    );
  };

  /*   const handleEditingInputChange = (fieldName: any, value: any) => {
    setEditingSchedule((prevEditingSchedule: any) => ({
      ...prevEditingSchedule,
      [fieldName]: value,
    }));
  }; */

  const convertToEditingSchedule = (teamObject: any) => {
    const { teamName, trainings } = teamObject;

    const convertedSchedule = trainings.map((training: any) => {
      const { trainingId, day, time } = training;
      const [hour, minute, second] = time.split(":");
      console.log(day);
      console.log(minute);

      const convertedTraining = {
        day,
        time: {
          hour,
          minute,
          ampm: hour < 12 ? "ص" : "م", // Assuming the time is in 24-hour format
        },
      };
      return convertedTraining;
    });

    setEditingSchedule(convertedSchedule);
  };

  return (
    <Container>
      <Schedule>
        <Title>
          <div style={{ display: "flex", flex: "1" }}></div>

          <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
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
          <div style={{ display: "flex", flex: "1", justifyContent: "left" }}>
            <AddButton onClick={addDayAndTime}>اضافة يوم</AddButton>
          </div>
        </Title>
        <Content>
          {schedule.map((item, index) => (
            <Row key={index}>
              <Info>
                <h2>اختار اليوم {days[index]}</h2>
                <Select
                  value={item.day}
                  options={optionsData}
                  onChange={(e: any) =>
                    handleInputChange(index, "day", e.target.value)
                  }
                />
              </Info>

              <Info>
                <h2>التوقيت</h2>
                <TimeInput>
                  <input
                    type="number"
                    max={60}
                    value={item.time.minute}
                    onChange={(e) => {
                      const i = e.target.value;
                      if (/^\d{0,2}$/.test(i)) {
                        handleInputChange(index, "minute", e.target.value);
                      }
                    }}
                  />
                  <h3>:</h3>
                  <input
                    type="number"
                    max={12}
                    value={item.time.hour}
                    onChange={(e) => {
                      const i = e.target.value;
                      if (/^\d{0,2}$/.test(i)) {
                        handleInputChange(index, "hour", e.target.value);
                      }
                    }}
                  />

                  <Select
                    value={item.time.ampm}
                    options={amPmOptions}
                    onChange={(e: any) =>
                      handleInputChange(index, "ampm", e.target.value)
                    }
                  />
                </TimeInput>
              </Info>
            </Row>
          ))}
        </Content>
        <br />
        <Button onClick={addTraining}>إضافة فريق</Button>
      </Schedule>

      {trainings.map((training: any, idx: number) => (
        <Schedule key={`${idx}`}>
          {editingId == training.teamId ? (
            <Schedule>
              <Title>
                <h1 style={{ width: "100%" }}>{training.teamName}</h1>
              </Title>
              <Content>
                {editingSchedule.map((item: any, index: any) => (
                  <Row key={index}>
                    <Info>
                      <h2>اختار اليوم {days[index]}</h2>
                      <Select
                        value={item.day}
                        options={optionsData}
                        onChange={(e: any) =>
                          handleEditInputChange(index, "day", e.target.value)
                        }
                      />
                    </Info>

                    <Info>
                      <h2>التوقيت</h2>
                      <TimeInput>
                        <input
                          type="number"
                          max={60}
                          value={item.time.minute}
                          onChange={(e) => {
                            const i = e.target.value;
                            if (/^\d{0,2}$/.test(i)) {
                              handleEditInputChange(
                                index,
                                "minute",
                                e.target.value
                              );
                            }
                          }}
                        />
                        <h3>:</h3>
                        <input
                          type="number"
                          max={12}
                          value={item.time.hour}
                          onChange={(e) => {
                            const i = e.target.value;
                            if (/^\d{0,2}$/.test(i)) {
                              handleEditInputChange(
                                index,
                                "hour",
                                e.target.value
                              );
                            }
                          }}
                        />

                        <Select
                          value={item.time.ampm}
                          options={amPmOptions}
                          onChange={(e: any) =>
                            handleEditInputChange(index, "ampm", e.target.value)
                          }
                        />
                      </TimeInput>
                    </Info>
                  </Row>
                ))}
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
                    onClick={() => editTraining(training.teamId, training)}
                  >
                    <Icon>
                      <EditIcon />
                    </Icon>
                  </EditButton>
                </div>
              </Title>
              <Content>
                {training.trainings.map((item: any, index: any) => (
                  <Row key={index}>
                    <Info>
                      <h2>اليوم {days[index]}</h2>
                      <Select
                        value={item.day}
                        options={optionsData}
                        onChange={(e: any) =>
                          handleInputChange(index, "day", e.target.value)
                        }
                      />
                    </Info>

                    <Info>
                      <h2>التوقيت</h2>
                      {convertTo12HourTime(training.trainings[index].time)}
                    </Info>
                    <Info>
                      <DeleteButton
                        onClick={() =>
                          handleOpenDialog(training.trainings[index].trainingId)
                        }
                      >
                        <p>حذف</p>
                        <Icon>
                          <DeleteIcon />
                        </Icon>
                      </DeleteButton>
                    </Info>
                  </Row>
                ))}
              </Content>
            </Schedule>
          )}
        </Schedule>
      ))}
      {/* <Button>حفظ المواعيد</Button> */}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span style={{ fontSize: "24px", fontFamily: "Arb-Regular" }}>
            هل انت متأكد من حذف التمرين؟
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
