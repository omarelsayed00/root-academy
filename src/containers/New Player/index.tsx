/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Column,
  Column2,
  Container,
  User,
  Actions,
  Main,
  Rating,
  Button2,
  Button,
  Title,
  Column2Container,
  HalfCircle,
  Button3,
  Item,
  Info2,
  ProgressBar,
  Stats,
  Button4,
  Upload,
  UploadContainer,
  Card,
  CardContent,
  Details,
  ImageCard,
  StatsCard,
  CardHeader,
  Position,
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Circular from "@components/Chart/Circular";
import Circular2 from "@components/Chart/Circular2";
import HalfCircleLinearProgress2 from "@components/Chart/SemiCircle2";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import EditPlayerIcon from "@icons/EditPlayer";
import Icon from "@components/Icon";
import RatingIcon from "@icons/Rating";
import Modal from "@components/Modal";
import MovePlayer from "@components/Modal/Move Player";
import UploadIcon from "@icons/Upload";
import { Backdrop } from "@mui/material";

const Profile = () => {
  const router = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [players, setPlayers] = useState([]);
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState<any>(null);
  const [viewedImage, setViewedImage] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [team, setTeam] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [level, setLevel] = useState("");
  const [position, setPositon] = useState("");
  const [playerRating, setPlayerRating] = useState("5");
  const [strength, setStrength] = useState<any>(0);
  const [attack, setAttack] = useState<any>(0);
  const [defense, setDefense] = useState<any>(0);
  const [skills, setSkills] = useState<any>(0);
  const [averageStrength, setAverageStrength] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const { BASE_URL } = process.env;

  useEffect(() => {
    setAverageStrength(Math.round((strength + attack + defense + skills) / 4));
  }, [strength, attack, defense, skills]);

  const addPlayer = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("short_name", nickname);
    formData.append("team_id", "1");
    formData.append("date_of_birth", birthDate);
    formData.append("weight", weight);
    formData.append("length", height);
    formData.append("level", level);
    formData.append("profile_image", image);
    formData.append("playerRating", playerRating);
    formData.append("physical", strength);
    formData.append("attack", attack);
    formData.append("defense", defense);
    formData.append("dribble", skills);
    formData.append("position", position);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/players`, formData, config)
      .then((response) => {
        console.log(response.data);
        //router.push("/players");
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const deleteUser = () => {
    /*     setMembers((members: any) =>
      members.filter((member: any) => {
        return member.id !== deletedId;
      })
    ); */
    setOpenDialog(false);
    router.push("/players");
  };

  const onImageChange = (event: any) => {
    setViewedImage(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  return (
    <Container>
      <Column>
        <Title>
          <h1>معلومات اللاعب</h1>
        </Title>
        <h2></h2>
        <User>
          <h1>صورة اللاعب</h1>
          <UploadContainer>
            <div style={{ width: "100%" }}>
              <label htmlFor="file-input" style={{ width: "100%" }}>
                <Upload>
                  <div>{fileName}</div>
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

          <h1>الاسم</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h1>اللقب</h1>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <h1>المركز</h1>
          <input
            type="text"
            value={position}
            onChange={(e) => setPositon(e.target.value)}
          />
          <h1>الفريق</h1>
          <input
            type="text"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
          <h1>تاريخ الميلاد</h1>
          <input
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <h1>الوزن</h1>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <h1>الطول</h1>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <h1>المستوى</h1>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </User>
      </Column>
      <Main>
        <Rating>
          <h1>تقييم اللاعب</h1>
          <div>
            <input
              type="text"
              value={playerRating}
              onChange={(e) => setPlayerRating(e.target.value)}
            />
            <Icon>
              <RatingIcon />
            </Icon>
          </div>
          <div></div>
        </Rating>
        {/* Make div and make the bck img the photo and divide it */}
        <Card>
          <CardContent>
            <CardHeader>
              <ImageCard>
                {viewedImage && <img src={viewedImage} alt="" />}
              </ImageCard>
              <Position>
                <h1>{averageStrength ? averageStrength : ""}</h1>
                <h2>{position ? position : ""}</h2>
              </Position>
            </CardHeader>
            <Details>
              <h1> {nickname}</h1>
              <StatsCard>
                {" "}
                <p>{skills ? skills : ""} DRI</p>
                <p>{defense ? defense : ""} DEF</p>
                <p>{attack ? attack : ""} ATT</p>
              </StatsCard>
            </Details>
          </CardContent>
        </Card>
        <Actions>
          <Button onClick={addPlayer}>إنشاء اللاعب</Button>
          <Button2 onClick={handleOpenDialog}>إلغاء</Button2>
        </Actions>
      </Main>
      <Column2>
        <HalfCircle>
          <HalfCircleLinearProgress2
            progress={averageStrength ? averageStrength : 0}
            height={70}
          />
          <h1>متوسط القوة</h1>
        </HalfCircle>
        <Column2Container>
          <Title>
            <h1>احصائيات اللاعب</h1>
          </Title>
          <h2></h2>
          <Stats>
            <Item>
              <Info2>
                <h3>القوة البدنية</h3>
                <input
                  type="number"
                  value={strength}
                  onChange={(e) => setStrength(parseInt(e.target.value))}
                />
              </Info2>
              <ProgressBar percent={strength ? strength : 0}>
                <div></div>
              </ProgressBar>
            </Item>
            <Item>
              <Info2>
                <h3>القوة الهجومية</h3>
                <input
                  type="number"
                  value={attack}
                  onChange={(e) => setAttack(parseInt(e.target.value))}
                />
              </Info2>
              <ProgressBar percent={attack ? attack : 0}>
                <div></div>
              </ProgressBar>
            </Item>
            <Item>
              <Info2>
                <h3>القوة الدفاعية</h3>
                <input
                  type="number"
                  value={defense ? defense : 0}
                  onChange={(e) => setDefense(parseInt(e.target.value))}
                />
              </Info2>
              <ProgressBar percent={defense}>
                <div></div>
              </ProgressBar>
            </Item>
            <Item>
              <Info2>
                <h3>المهارة</h3>
                <input
                  type="number"
                  value={skills}
                  onChange={(e) => setSkills(parseInt(e.target.value))}
                />
              </Info2>
              <ProgressBar percent={skills ? skills : 0}>
                <div></div>
              </ProgressBar>
            </Item>
          </Stats>
        </Column2Container>
      </Column2>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span style={{ fontSize: "20px", fontFamily: "Arb-Regular" }}>
            سيتم فقد جميع البيانات, هل انت متأكد؟{" "}
          </span>
        </DialogTitle>

        <DialogActions style={dialogStyles2}>
          <Button onClick={() => router.push("/players")}>تأكيد</Button>
          <Button2 onClick={handleCloseDialog} autoFocus>
            رجوع
          </Button2>
        </DialogActions>
      </Dialog>

      {openPopup && (
        <Modal onClose={() => setOpenPopup(false)}>
          <MovePlayer
            onClose={() => setOpenPopup(false)}
            movedId={1}
            team={"الفريق الأول"}
            players={players}
            setPlayers={setPlayers}
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

export default Profile;

const dialogStyles2 = {
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  gap: "8px",
  padding: "12px 76px",
};
