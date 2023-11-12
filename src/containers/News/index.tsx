/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Button2,
  Button3,
  Container,
  Content,
  DeleteButton,
  Info,
  Schedule,
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

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

const today = new Date();
const formatter = new Intl.DateTimeFormat("ar", options);
const parts = formatter.formatToParts(today);
const arabicDate = `${parts[0].value} - ${parts[4].value} ${parts[2].value}`;

const Profile = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [news, setNews] = useState(newsData);
  const [newsText, setNewsText] = useState("");

  const [deletedId, setDeletedId] = useState(0);

  const addMatch = () => {
    const newNews = {
      id: news.length + 1,
      date: arabicDate,
      news: newsText,
    };
    setNewsText("");

    setNews([...news, newNews]);
  };

  const handleOpenDialog = (id: any) => {
    setDeletedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const deleteMatch = () => {
    setNews((users) =>
      users.filter((user) => {
        return user.id !== deletedId;
      })
    );
    setOpenDialog(false);
  };

  return (
    <Container>
      <Schedule>
        <h1>إضافة خبر جديد</h1>
        <Content>
          <Info style={{ width: "120%" }}>
            <h2>قم بكتابة تفاصيل الخبر</h2>
            <textarea
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
            />
          </Info>
        </Content>
        <Button onClick={addMatch}>نشر الخبر</Button>
      </Schedule>
      {news.map((match: any, idx: number) => (
        <Schedule key={`${idx}`}>
          <Title>
            <div></div>
            <h1>{match.date}</h1>
            <DeleteButton onClick={() => handleOpenDialog(match.id)}>
              <p>حذف</p>
              <Icon>
                <DeleteIcon />
              </Icon>
            </DeleteButton>
          </Title>

          <Content>
            <Info style={{ width: "120%" }}>
              <h4>{match.news}</h4>
            </Info>
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
            هل انت متأكد من حذف الخبر؟
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
