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
  const [team, setTeam] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("م");

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
  const [editableDate, setEditableDate] = useState("");
  const [editableTime, setEditableTime] = useState("");
  const [editableLogo, setEditableLogo] = useState("");
  const [editableId, setEditableId] = useState("");

  /*   const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null); */

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [deletedId, setDeletedId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { BASE_URL } = process.env;

  useEffect(() => {
    fetchMatches();
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
      .get(`${BASE_URL}/admins/games`, config)
      .then((response) => {
        console.log(response.data);
        setLastPage(response.data.meta.last_page);
        setMatches(response.data.data.date);
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

        //setSelectedBus(response.data.results[0].bus_name);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const addMatch = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("opponent_name", editableOpponentName);
    formData.append("opponent_logo", editableLogo);
    formData.append("date", editableDate);
    formData.append("time", editableTime);
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
    setTeam("");
    setFileName("");
    setDay(undefined);
    setMonth(undefined);
    setYear(undefined);
    setHour("");
    setMinute("");
  };

  const editMatch = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("_method", "patch");
    formData.append("opponent_name", editableOpponentName);
    formData.append("opponent_logo", editableLogo);
    formData.append("date", editableDate);
    formData.append("time", editableTime);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/games/${editableId}`, formData, config)
      .then((response) => {
        console.log(response.data);
        fetchMatches();
        setEditable(false);
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
    setEditable(true);
    setEditableMatch(match);
    setEditableId(match.id);
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

  const formatDate = (date: any) => {
    const day = new Date(date).getDate().toString().padStart(2, "0");
    const month = (new Date(date).getMonth() + 1).toString().padStart(2, "0");
    const year = new Date(date).getFullYear();
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
        <div key={`${idx}`}>
          {editable && editableId == match.id ? (
            <Schedule>
              <div></div>
              <Title>
                <div></div>
                <h1>المباراة القادمة</h1>
                <div className="actions">
                  <EditButton onClick={editMatch}>
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
                  <Time>
                    <p>{match.minute}</p>
                    <h3>:</h3>
                    <p>{match.hour}</p>
                    <p>{match.ampm}</p>
                  </Time>
                </Info>{" "}
              </Content>
            </Schedule>
          ) : (
            <Schedule>
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
                  <Time>
                    <p>{match.minute}</p>
                    <h3>:</h3>
                    <p>{match.hour}</p>
                    <p>{match.ampm}</p>
                  </Time>
                </Info>{" "}
              </Content>
            </Schedule>
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
