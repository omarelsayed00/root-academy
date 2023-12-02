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
  EditButton,
  Info,
  Schedule,
  Time,
  TimeInput,
  Title,
  Upload,
  UploadContainer,
  SelectFilter,
  Schedule2,
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
import { Backdrop } from "@mui/material";
import Cookies from "js-cookie";
import EyeIcon from "@icons/Eye";
import ViewImageModal from "@components/Modal/View Image";
import Modal from "@components/Modal";
import EditIcon from "@icons/Edit";

const Matches = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [matches, setMatches] = useState([]);
  const [logo, setLogo] = useState("");
  const [fileName, setFileName] = useState("");
  const [eFileName, setEFileName] = useState("");
  const [eLogo, setELogo] = useState();
  const [opponentName, setOpponentName] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("م");

  const [ehour, setEHour] = useState("");
  const [eminute, setEMinute] = useState("");
  const [eampm, setEAmpm] = useState("م");

  const [day, setDay] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const [teams, setTeams] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState("");
  const [editable, setEditable] = useState(false);
  const [editableMatch, setEditableMatch] = useState(false);
  const [editableOpponentName, setEditableOpponentName] = useState("");
  const [editableDate, setEditableDate] = useState<Date>(new Date());
  const [editableId, setEditableId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [selectedTeam, setSelectedTeam] = useState(".......");
  const [selectedETeam, setESelectedTeam] = useState(".......");

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [deletedId, setDeletedId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { BASE_URL } = process.env;

  useEffect(() => {
    fetchMatches();
    fetchTeams();
  }, [page]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchMatches = async () => {
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .get(`${BASE_URL}/admins/games?page=${page}`, config)
      .then((response) => {
        console.log(response.data);
        setLastPage(response.data.meta.last_page);
        setMatches(response.data.data.date);
        setEditable(false);
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
        response.data.data.date[0].name &&
          setSelectedTeam(response.data.data.date[0].name);

        //setSelectedBus(response.data.results[0].bus_name);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const addMatch = async (event: any) => {
    event.preventDefault();
    if (fileName == "") {
      setErrorMessage("برجاء رفع لوجو الفريق المنافس");
      return;
    }
    setIsLoading(true);
    const team: any = teams.filter((team: any) => team.name === selectedTeam);
    const formData = new FormData();
    formData.append("opponent_name", opponentName);
    formData.append("opponent_logo", logo);
    formData.append("team_id", team[0].id);
    formData.append("date", formatDateToYYYYMMDD(selectedDate));
    formData.append("time", generate24HourTime(hour, minute, ampm));
    formData.append("game_status", "unPlayed");
    /// EDIT GAME STATUS

    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/games`, formData, config)
      .then((response) => {
        console.log(response.data);
        fetchMatches();
        setEditable(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
    setOpponentName("");
    setFileName("");
    setDay(undefined);
    setMonth(undefined);
    setYear(undefined);
    setHour("");
    setMinute("");
  };

  const editMatch = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const team: any = teams.filter((team: any) => team.name === selectedETeam);

    const formData = new FormData();
    formData.append("_method", "patch");
    formData.append("opponent_name", editableOpponentName);
    eLogo && formData.append("opponent_logo", eLogo);
    formData.append("date", formatDateToYYYYMMDD(editableDate));
    formData.append("time", generate24HourTime(ehour, eminute, eampm));
    formData.append("team_id", team[0].id);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(
        `${BASE_URL}/admins/partial-update/games/${editableId}`,
        formData,
        config
      )
      .then((response) => {
        console.log(response.data);
        fetchMatches();
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const deleteMatch = async () => {
    setOpenDialog(false);
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .delete(`${BASE_URL}/admins/games/${deletedId}`, config)
      .then((response) => {
        console.log(response.data);
        fetchMatches();
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
    setOpenDialog(false);
  };

  const handleOpenDialog = (id: any) => {
    setDeletedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleViewImage = (img: any) => {
    setCurrentImage(img);
    setOpenPopup(true);
  };

  const handleEditMatch = (match: any) => {
    console.log("edit action");
    setEditable(true);
    setEditableMatch(match);
    convertTo12HourTimeEdit(match.time);
    setEditableId(match.id);
    setEditableOpponentName(match.opponentName);
    setEditableDate(new Date(match.date));
    setESelectedTeam(getTeamNameById(match.teamId));
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page != lastPage) {
      setPage(page + 1);
    }
  };

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
      setLogo(event.target.files[0]);
    }
  };

  const onImageEChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setEFileName(event.target.files[0].name);
      setELogo(event.target.files[0]);
    }
  };

  const formatDate = (date: any) => {
    const day = new Date(date).getDate().toString().padStart(2, "0");
    const month = (new Date(date).getMonth() + 1).toString().padStart(2, "0");
    const year = new Date(date).getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatDateToYYYYMMDD = (dateString: Date) => {
    const inputDate = new Date(dateString);

    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
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

  const handleKeyDownEdit = (e: any) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      e.preventDefault(); // Prevents the cursor from moving in the input field
      setEAmpm((prevAmpm) => (prevAmpm === "ص" ? "م" : "ص"));
    }
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

  const convertTo12HourTimeEdit = (time: any) => {
    const [hour, minute] = time.split(":");
    let hour12 = parseInt(hour, 10);
    let period = "ص";

    if (hour12 >= 12) {
      period = "م";
      if (hour12 > 12) {
        hour12 -= 12;
      }
    }
    const formattedTime = `${hour12
      .toString()
      .padStart(2, "0")}:${minute.padStart(2, "0")} ${period}`;

    setEHour(hour12.toString());
    setEMinute(minute);
    setEAmpm(period);
  };

  const handleSelectChange = (event: any) => {
    setSelectedTeam(event.target.value);
  };

  const handleESelectChange = (event: any) => {
    setESelectedTeam(event.target.value);
  };

  const getTeamNameById = (id: number) => {
    const team: any = teams.find((team: any) => team.id === id);
    return team ? team.name : null;
  };

  return (
    <Container>
      <Schedule onSubmit={addMatch}>
        <h1>المباراة القادمة</h1>
        <Content>
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
          <Info style={{ width: "100%" }}>
            <h2>اسم الفريق المنافس</h2>
            <input
              value={opponentName}
              required
              onChange={(e) => setOpponentName(e.target.value)}
            />
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
                max={60}
                required
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
                required
                value={hour}
                max={12}
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
                required
                maxLength={1}
                onKeyDown={handleKeyDown}
                readOnly
              />
            </TimeInput>
          </Info>
        </Content>
        {errorMessage && <h6 style={{ color: "red" }}>{errorMessage}</h6>}
        <Button type="submit">إضافة المباراة</Button>
      </Schedule>
      {matches.map((match: any, idx: number) => (
        <div key={`${idx}`}>
          {editable && editableId == match.id ? (
            <Schedule onSubmit={editMatch}>
              <div></div>
              <Title>
                <div></div>
                <h1>المباراة القادمة</h1>
                <div className="actions">
                  <EditButton type="submit">
                    <p>حفظ</p>
                    <Icon>
                      <EditIcon />
                    </Icon>
                  </EditButton>
                  <DeleteButton onClick={() => handleOpenDialog(match.id)}>
                    <p>حذف</p>
                    <Icon>
                      <DeleteIcon />
                    </Icon>
                  </DeleteButton>
                </div>
              </Title>

              <Content>
                <Info>
                  <h2>اسم الفريق</h2>
                  <SelectFilter
                    value={selectedETeam}
                    onChange={handleESelectChange}
                  >
                    {teams.map((bus: any, index: any) => (
                      <option key={index} value={bus.name}>
                        {bus.name}
                      </option>
                    ))}
                  </SelectFilter>
                </Info>
                <Info style={{ width: "120%" }}>
                  <h2>اسم الفريق المنافس</h2>
                  <input
                    value={editableOpponentName}
                    required
                    onChange={(e) => setEditableOpponentName(e.target.value)}
                  />
                </Info>
                <Info>
                  <h2>لوجو الفريق المنافس</h2>
                  <UploadContainer>
                    <div style={{ width: "100%" }}>
                      <label htmlFor="file-input" style={{ width: "100%" }}>
                        <Upload>
                          <div style={{ width: "100%", textAlign: "center" }}>
                            {eFileName}
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
                        onChange={onImageEChange}
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
                      selected={editableDate}
                      onChange={(date: any) => setEditableDate(date)}
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
                      required
                      value={eminute}
                      max={60}
                      onChange={(e) => {
                        const i = e.target.value;
                        if (/^\d{0,2}$/.test(i)) {
                          setEMinute(i);
                        }
                      }}
                    />
                    <h3>:</h3>
                    <input
                      type="number"
                      required
                      value={ehour}
                      max={12}
                      onChange={(e) => {
                        const i = e.target.value;
                        if (/^\d{0,2}$/.test(i)) {
                          setEHour(i);
                        }
                      }}
                    />
                    <input
                      type="text"
                      required
                      value={eampm}
                      maxLength={1}
                      onKeyDown={handleKeyDownEdit}
                    />
                  </TimeInput>
                </Info>{" "}
              </Content>
            </Schedule>
          ) : (
            <Schedule2>
              <div></div>
              <Title>
                <div></div>
                <h1>المباراة القادمة</h1>
                <div className="actions">
                  <EditButton onClick={() => handleEditMatch(match)}>
                    <p>تعديل</p>
                    <Icon>
                      <EditIcon />
                    </Icon>
                  </EditButton>
                  <DeleteButton onClick={() => handleOpenDialog(match.id)}>
                    <p>حذف</p>
                    <Icon>
                      <DeleteIcon />
                    </Icon>
                  </DeleteButton>
                </div>
              </Title>

              <Content>
                <Info style={{ width: "120%" }}>
                  <h2>اسم الفريق </h2>
                  <h4>{getTeamNameById(match.teamId)}</h4>
                </Info>
                <Info style={{ width: "120%" }}>
                  <h2>اسم الفريق المنافس</h2>
                  <h4>{match.opponentName}</h4>
                </Info>
                <Info>
                  <h2>لوجو الفريق المنافس</h2>
                  <UploadContainer
                    style={{ cursor: "pointer" }}
                    onClick={() => handleViewImage(match.opponentLogo)}
                  >
                    <h5 style={{ width: "100%", textAlign: "center" }}>
                      Team Logo
                    </h5>
                    <Icon>
                      <EyeIcon />
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
                  {convertTo12HourTime(match.time)}
                </Info>{" "}
              </Content>
            </Schedule2>
          )}
        </div>
      ))}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "flex-end",
        }}
      >
        <div className="navigation2">
          <button onClick={handlePreviousPage} disabled={page === 1}>
            {"<"}
          </button>
          <span>
            {page}/{lastPage}
          </span>
          <button onClick={handleNextPage} disabled={page == lastPage}>
            {">"}
          </button>
        </div>
      </div>

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
      {openPopup && (
        <Modal onClose={() => setOpenPopup(false)}>
          <ViewImageModal
            onClose={() => setOpenPopup(false)}
            img={currentImage}
          />
        </Modal>
      )}
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

export default Matches;

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
