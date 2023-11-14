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
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import HalfCircleLinearProgress2 from "@components/Chart/SemiCircle2";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import EditPlayerIcon from "@icons/EditPlayer";
import Icon from "@components/Icon";
import RatingIcon from "@icons/Rating";
import Modal from "@components/Modal";
import MovePlayer from "@components/Modal/Move Player";
import { Backdrop } from "@mui/material";
import {
  Card,
  CardContent,
  CardHeader,
  Details,
  ImageCard,
  Position,
  StatsCard,
} from "@containers/New Player/styles";

const Profile = () => {
  const router = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [player, setPlayer] = useState<any>();

  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [birthDate, setBirthDate] = useState("23/11/2004  - 19سنة");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState("");
  const [playerRating, setPlayerRating] = useState("0");
  const [strength, setStrength] = useState<any>(0);
  const [attack, setAttack] = useState<any>(0);
  const [defense, setDefense] = useState<any>(0);
  const [skills, setSkills] = useState<any>(0);
  const [averageStrength, setAverageStrength] = useState(0);
  const [nickname, setNickname] = useState("");
  const [position, setPositon] = useState("");

  const [editable1, setEditable1] = useState(false);
  const [editable2, setEditable2] = useState(false);
  const [editable3, setEditable3] = useState(false);
  const { BASE_URL } = process.env;
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPlayer();
  }, []);

  const fetchPlayer = async () => {
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .get(`${BASE_URL}/admins/players/${id}`, config)
      .then((response) => {
        console.log(response.data);
        const data = response.data.data;
        setPlayer(response.data.data);
        setName(data.name);
        setTeam(data.team);
        setBirthDate(data.date_of_birth);
        setWeight(data.weight);
        setHeight(data.length);
        setLevel(data.level);
        setStrength(data.physical);
        setAttack(data.attack);
        setDefense(data.defense);
        setSkills(data.dribble);
        setPlayerRating(data.playerRating);
        setPlayerRating(data.stars);
        setImage(data.profile_image);
        setPositon(data.position);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
  };

  const editPlayer = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("_method", "put");
    formData.append("name", name);
    formData.append("team", team);
    //formData.append("birthDate", birthDate);
    formData.append("weight", weight);
    formData.append("length", height);
    formData.append("level", level);
    formData.append("image", image);
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
      .post(`${BASE_URL}/admins/players/${id}`, formData, config)
      .then((response) => {
        console.log(response.data);
        fetchPlayer();
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
    setEditable1(false);
    setEditable2(false);
    setEditable3(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const removeUser = () => {
    handleOpenDialog();
  };

  const deleteUser = () => {
    setOpenDialog(false);
    router.push("/players");
  };

  return (
    <Container>
      <Column>
        <Title>
          <h1>معلومات اللاعب</h1>
          {!editable1 ? (
            <button onClick={() => setEditable1(true)}>
              <Icon>
                <EditPlayerIcon />
              </Icon>
            </button>
          ) : (
            <Button3 onClick={editPlayer}>حفظ</Button3>
          )}
        </Title>
        <h2></h2>
        <User>
          <h1>الاسم</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={!editable1}
          />
          <h1>اللقب</h1>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            readOnly={!editable1}
          />
          <h1>الفريق</h1>
          <input
            type="text"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            readOnly={!editable1}
          />
          <h1>المركز</h1>
          <input
            type="text"
            value={position}
            onChange={(e) => setPositon(e.target.value)}
            readOnly={!editable1}
          />
          <h1>تاريخ الميلاد</h1>
          <input
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            readOnly={!editable1}
          />
          <h1>الوزن</h1>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            readOnly={!editable1}
          />
          <h1>الطول</h1>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            readOnly={!editable1}
          />
          <h1>المستوى</h1>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            readOnly={!editable1}
          />
        </User>
      </Column>
      <Main>
        <Rating editable={editable2}>
          <h1>تقييم اللاعب</h1>
          <div>
            <input
              type="text"
              value={playerRating}
              onChange={(e) => setPlayerRating(e.target.value)}
              readOnly={!editable2}
            />
            <Icon>
              <RatingIcon />
            </Icon>
          </div>
          {!editable2 ? (
            <button onClick={() => setEditable2(true)}>
              <Icon>
                <EditPlayerIcon />
              </Icon>
            </button>
          ) : (
            <Button4 onClick={editPlayer}>حفظ</Button4>
          )}
        </Rating>
        <Card>
          <CardContent>
            <CardHeader>
              <ImageCard>{image && <img src={image} alt="" />}</ImageCard>
              <Position>
                <h1>
                  {Math.round((strength + attack + defense + skills) / 4)}
                </h1>
                <h2>{position ? position : ""}</h2>
              </Position>
            </CardHeader>
            <Details>
              <h1> {name}</h1>
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
          <Button onClick={() => setOpenPopup(true)}>نقل اللاعب</Button>
          <Button2 onClick={removeUser}>حذف اللاعب</Button2>
        </Actions>
      </Main>
      <Column2>
        <HalfCircle>
          <HalfCircleLinearProgress2
            progress={Math.round((strength + attack + defense + skills) / 4)}
            height={70}
          />
          <h1>متوسط القوة</h1>
        </HalfCircle>
        <Column2Container>
          <Title>
            <h1>احصائيات اللاعب</h1>
            {!editable3 ? (
              <button onClick={() => setEditable3(true)}>
                <Icon>
                  <EditPlayerIcon />
                </Icon>
              </button>
            ) : (
              <Button3 onClick={editPlayer}>حفظ</Button3>
            )}
          </Title>
          <h2></h2>
          <Stats>
            <Item>
              <Info2 editable={editable3}>
                <h3>القوة البدنية</h3>
                <input
                  type="number"
                  value={strength}
                  onChange={(e) => setStrength(parseInt(e.target.value))}
                  readOnly={!editable3}
                />
              </Info2>
              <ProgressBar percent={strength ? strength : 0}>
                <div></div>
              </ProgressBar>
            </Item>
            <Item>
              <Info2 editable={editable3}>
                <h3>القوة الهجومية</h3>
                <input
                  type="number"
                  value={attack}
                  onChange={(e) => setAttack(parseInt(e.target.value))}
                  readOnly={!editable3}
                />
              </Info2>
              <ProgressBar percent={attack ? attack : 0}>
                <div></div>
              </ProgressBar>
            </Item>
            <Item>
              <Info2 editable={editable3}>
                <h3>القوة الدفاعية</h3>
                <input
                  type="number"
                  value={defense}
                  onChange={(e) => setDefense(parseInt(e.target.value))}
                  readOnly={!editable3}
                />
              </Info2>
              <ProgressBar percent={defense ? defense : 0}>
                <div></div>
              </ProgressBar>
            </Item>
            <Item>
              <Info2 editable={editable3}>
                <h3>المهارة</h3>
                <input
                  type="number"
                  value={skills}
                  onChange={(e) => setSkills(parseInt(e.target.value))}
                  readOnly={!editable3}
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
          <span style={{ fontSize: "24px", fontFamily: "Arb-Regular" }}>
            هل انت متأكد من حذف المستخدم؟
          </span>
        </DialogTitle>

        <DialogActions style={dialogStyles2}>
          <Button onClick={deleteUser}>تأكيد</Button>
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
