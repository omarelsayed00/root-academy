/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Button2,
  Button3,
  Container,
  Content,
  DeleteButton,
  EditButton,
  Info,
  Schedule,
  Schedule2,
  Title,
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import UploadIcon from "@icons/Upload2";
import Icon from "@components/Icon";
import DeleteIcon from "@icons/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { newsData } from "@mocks/news";
import { Backdrop } from "@mui/material";
import EditIcon from "@icons/Edit";
import Cookies from "js-cookie";
import DeleteIcon2 from "@icons/Delete2";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric",
};

const today = new Date();
const formatter = new Intl.DateTimeFormat("ar", options);
const parts = formatter.formatToParts(today);
const arabicDate = `${parts[0].value} - ${parts[4].value} ${parts[2].value} ${parts[6].value}`;

const Profile = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [news, setNews] = useState([]);
  const [newsText, setNewsText] = useState("");
  const [editable, setEditable] = useState(false);
  const [editableId, setEditableId] = useState(0);
  const [editableText, setEditableText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [deletedId, setDeletedId] = useState(0);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { BASE_URL } = process.env;

  useEffect(() => {
    fetchNews();
  }, [page]);

  const fetchNews = async () => {
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .get(`${BASE_URL}/admins/news?page=${page}`, config)
      .then((response) => {
        //console.log(response.data.data);
        setLastPage(response.data.meta.last_page);
        setNews(response.data.data);
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

  const addNews = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", "news");
    formData.append("content", newsText);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/news`, formData, config)
      .then((response) => {
        console.log(response.data);
        fetchNews();
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
    setNewsText("");
  };

  const editNews = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("_method", "put");
    //formData.append("title", "Edited Content");
    formData.append("content", editableText);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/news/${editableId}`, formData, config)
      .then((response) => {
        console.log(response.data);
        fetchNews();
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const deleteNews = async () => {
    setOpenDialog(false);
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .delete(`${BASE_URL}/admins/news/${deletedId}`, config)
      .then((response) => {
        console.log(response.data);
        fetchNews();
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const handleOpenDialog = (id: any) => {
    setDeletedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleEditNews = (news: any) => {
    setEditable(true);
    setEditableText(news.content);
    setEditableId(news.id);
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

  const arabicDate = (date: Date) => {
    const today = new Date(date);
    const formatter = new Intl.DateTimeFormat("ar", options);
    const parts = formatter.formatToParts(today);
    return `${parts[0].value} - ${parts[2].value} ${parts[4].value} ${parts[6].value}`;
  };

  return (
    <Container>
      <Schedule onSubmit={addNews}>
        <h1>إضافة خبر جديد</h1>
        <Content>
          <Info style={{ width: "120%" }}>
            <h2>قم بكتابة تفاصيل الخبر</h2>
            <textarea
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
              required
            />
          </Info>
        </Content>
        <Button type="submit">نشر الخبر</Button>
      </Schedule>
      {news.map((obj: any, idx: number) => (
        <div key={`${idx}`}>
          {editable && editableId == obj.id ? (
            <Schedule onSubmit={editNews} key={`${idx}`}>
              <Title>
                <div></div>
                <h1>{arabicDate(obj.createdAt)}</h1>
                <div className="actions">
                  <EditButton type="submit">
                    <p>حفظ</p>
                    <Icon>
                      <EditIcon />
                    </Icon>
                  </EditButton>
                  <DeleteButton
                    type="button"
                    onClick={() => handleOpenDialog(obj.id)}
                  >
                    <p>حذف</p>
                    <Icon>
                      <DeleteIcon />
                    </Icon>
                  </DeleteButton>
                </div>
              </Title>
              <Content>
                <Info style={{ width: "120%" }}>
                  <textarea
                    required
                    value={editableText}
                    onChange={(e) => setEditableText(e.target.value)}
                  />
                </Info>{" "}
              </Content>
            </Schedule>
          ) : (
            <Schedule2 key={`${idx}`}>
              <Title>
                <div></div>
                <h1>{arabicDate(obj.createdAt)}</h1>
                <div className="actions">
                  <EditButton type="button" onClick={() => handleEditNews(obj)}>
                    <p>تعديل</p>
                    <Icon>
                      <EditIcon />
                    </Icon>
                  </EditButton>
                  <DeleteButton
                    type="button"
                    onClick={() => handleOpenDialog(obj.id)}
                  >
                    <p>حذف</p>
                    <Icon>
                      <DeleteIcon />
                    </Icon>
                  </DeleteButton>
                </div>
              </Title>
              <Content>
                <Info style={{ width: "120%" }}>
                  <h4>{obj.content}</h4>
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
            هل انت متأكد من حذف الخبر؟
          </span>
        </DialogTitle>

        <DialogActions style={dialogStyles2}>
          <Button3 onClick={deleteNews}>تأكيد</Button3>
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
