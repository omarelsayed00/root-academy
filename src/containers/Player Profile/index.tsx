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
import Image from "next/image";
import Circular from "@components/Chart/Circular";
import Circular2 from "@components/Chart/Circular2";
import MenuListComposition from "./edit";
import HalfCircleLinearProgress2 from "@components/Chart/SemiCircle2";
import HalfCircleLinearProgress3 from "@components/Chart/SemiCircle3";
import HalfCircleLinearProgress4 from "@components/Chart/SemiCircle4";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import EditPlayerIcon from "@icons/EditPlayer";
import Icon from "@components/Icon";
import RatingIcon from "@icons/Rating";
import Modal from "@components/Modal";
import MovePlayer from "@components/Modal/Move Player";

const Profile = () => {
  const router = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [players, setPlayers] = useState([]);

  const [name, setName] = useState("محمد مصطفى أحمد مسعود");
  const [team, setTeam] = useState("فريق اكاديمية رووت - الفريق الاول");
  const [birthDate, setBirthDate] = useState("23/11/2004  - 19سنة");
  const [weight, setWeight] = useState("77 ك");
  const [height, setHeight] = useState("180 سم");
  const [level, setLevel] = useState("محترف");

  const [playerRating, setPlayerRating] = useState("4.5");

  const [strenght, setStrength] = useState(85);
  const [attack, setAttack] = useState(99);
  const [defense, setDefense] = useState(44);
  const [skills, setSkills] = useState(88);

  const [editable1, setEditable1] = useState(false);
  const [editable2, setEditable2] = useState(false);
  const [editable3, setEditable3] = useState(false);

  const [deletedId, setDeletedId] = useState(0);

  const handleOpenDialog = () => {
    setOpenDialog(true);
    //setDeletedId(id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const removeUser = () => {
    handleOpenDialog();
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

  const editDetails = () => {
    setEditable1(false);
  };

  const editRating = () => {
    setEditable2(false);
  };

  const editStats = () => {
    setEditable3(false);
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
            <Button3 onClick={editDetails}>حفظ</Button3>
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
          <h1>الفريق</h1>
          <input
            type="text"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
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
            <Button4 onClick={editRating}>حفظ</Button4>
          )}
        </Rating>
        <img src="/images/playerCard.png" alt="" />
        <Actions>
          <Button onClick={() => setOpenPopup(true)}>نقل اللاعب</Button>
          <Button2 onClick={removeUser}>حذف اللاعب</Button2>
        </Actions>
      </Main>
      <Column2>
        <HalfCircle>
          <HalfCircleLinearProgress2 progress={66} height={70} />
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
              <Button3 onClick={editStats}>حفظ</Button3>
            )}
          </Title>
          <h2></h2>
          <Stats>
            <Item>
              <Info2 editable={editable3}>
                <h3>القوة البدنية</h3>
                <input
                  type="number"
                  value={strenght}
                  onChange={(e) => setStrength(parseInt(e.target.value))}
                  readOnly={!editable3}
                />
              </Info2>
              <ProgressBar percent={strenght ? strenght : 0}>
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
