import React from "react";
import { useState } from "react";
import {
  Actions,
  Block,
  Container,
  Edit,
  Name,
  Row,
  Button,
  Button2,
} from "./tableStyles";
import EditIcon from "@icons/Edit";
import DeleteIcon from "@icons/Delete";
import Icon from "@components/Icon";
import DeleteIcon2 from "@icons/Delete2";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Modal from "@components/Modal";
import Rating from "@components/Rating";
import { Router } from "react-router-dom";
import { useRouter } from "next/router";
import MovePlayer from "@components/Modal/Move Player";
import { Backdrop } from "@mui/material";
import axios from "axios";

const SelectTableComponent = (props) => {
  //const [List, setList] = useState(props.table);
  const [openPopup, setOpenPopup] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [deletedId, setDeletedId] = useState(0);
  const [movedId, setMovedId] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState();
  const [movedTeam, setMovedTeam] = useState("");
  const [MasterChecked, setMasterChecked] = useState(false);
  const [SelectedList, setSelectedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { BASE_URL } = process.env;

  const router = useRouter();

  const deletePlayers = async () => {
    setOpenDialog(false);
    props.setIsLoading(true);
    const usersIds = SelectedList.map((obj) => obj.id);
    const formData = new FormData();
    formData.append("_method", "Delete");
    for (let i = 0; i < usersIds.length; i++) {
      formData.append(`playerIds[${i}]`, usersIds[i]);
    }

    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    await axios
      .post(`${BASE_URL}/admins/players/delete`, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    props.fetchPlayers();
  };

  const deletePlayer = async () => {
    setOpenDialog2(false);
    props.setIsLoading(true);
    const formData = new FormData();
    formData.append("_method", "Delete");
    formData.append(`playerIds[0}]`, deletedId);

    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    await axios
      .post(`${BASE_URL}/admins/players/delete`, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    props.fetchPlayers();
  };

  const handleEditUser = (id) => {
    setCurrentId(id);
    console.log("Current ID: " + id);
    setOpenPopup(true);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleOpenDialog2 = (id) => {
    setDeletedId(id);
    setOpenDialog2(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseDialog2 = () => {
    setOpenDialog2(false);
  };

  const movePlayer = (id, team, player) => {
    setMovedId(id);
    setMovedTeam(team);
    setOpenPopup(true);
    setCurrentPlayer(player);
  };
  // Select/ UnSelect Table rows
  const onMasterCheck = (e) => {
    let tempList = props.users;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));
    setMasterChecked(e.target.checked);
    setSelectedList(props.users.filter((e) => e.selected));
  };

  // Update List Item's state and Master Checkbox State
  const onItemCheck = (e, item) => {
    let tempList = props.users;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = props.users.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    setMasterChecked(totalItems === totalCheckedItems);
    setSelectedList(props.users.filter((e) => e.selected));
  };

  // Event to get selected rows(Optional)
  const getSelectedRows = () => {
    setSelectedList(props.users.filter((e) => e.selected));
  };

  return (
    <Container>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col" style={{ width: "600px" }}>
                <Row>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={MasterChecked}
                    id="mastercheck"
                    onChange={(e) => onMasterCheck(e)}
                  />
                  <span>اسم اللاعب</span>
                </Row>
              </th>
              <th scope="col">المركز</th>
              <th scope="col">الفريق</th>

              <th scope="col">التقييم</th>
              <th scope="col">المستوى</th>
              <th style={{ width: "40px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "flex-end",
                  }}
                >
                  <div className="navigation">
                    <button
                      onClick={props.handlePreviousPage}
                      disabled={props.page === 1}
                    >
                      {"<"}
                    </button>
                    <span>
                      {props.page}/{props.lastPage}
                    </span>
                    <button
                      onClick={props.handleNextPage}
                      disabled={props.page == props.lastPage}
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    style={{
                      cursor: "pointer",
                      width: "20px",
                    }}
                    onClick={handleOpenDialog}
                  >
                    <Icon strokeColor="transparent">
                      <DeleteIcon2 />
                    </Icon>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user) => (
              <tr key={user.id} className={user.selected ? "selected" : ""}>
                <td>
                  <Row>
                    <input
                      type="checkbox"
                      checked={user.selected}
                      className="form-check-input"
                      id="rowcheck{user.id}"
                      onChange={(e) => onItemCheck(e, user)}
                    />
                    <Name>
                      <span>{user.name}</span>
                    </Name>
                  </Row>
                </td>
                <td>{user.position}</td>
                <td>{user.team}</td>

                <td>
                  <Rating rating={user.stars} />
                </td>
                <td>{user.level}</td>

                <td>
                  <Actions>
                    <Edit onClick={() => router.push(`/players/${user.id}`)}>
                      الملف الشخصى
                    </Edit>
                    <Edit onClick={() => movePlayer(user.id, user.team, user)}>
                      نقل اللاعب
                    </Edit>
                    <Block onClick={() => handleOpenDialog2(user.id)}>
                      <Icon strokeColor="#E1284A">
                        <DeleteIcon />
                      </Icon>
                      حذف
                    </Block>
                  </Actions>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*  <button className="btn btn-primary" onClick={() => getSelectedRows()}>
          Get Selected Items {SelectedList.length}
        </button>
        <div className="row">
          <b>All Row Items:</b>
          <code>{JSON.stringify(props.users)}</code>
        </div>
        <div className="row">
          <b>Selected Row Items(Click Button To Get):</b>
          <code>{JSON.stringify(SelectedList)}</code>
        </div> */}
      </div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span style={{ fontSize: "24px", fontFamily: "Arb-Regular" }}>
            هل انت متأكد من الحذف؟
          </span>
        </DialogTitle>

        <DialogActions style={dialogStyles}>
          <Button onClick={deletePlayers}>تأكيد</Button>
          <Button2 onClick={handleCloseDialog} autoFocus>
            رجوع
          </Button2>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDialog2}
        onClose={handleCloseDialog2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span
            style={{
              fontSize: "24px",
              fontFamily: "Arb-Regular",
              display: "flex",
              justifyContent: "center",
            }}
          >
            هل انت متأكد من حذف اللاعب؟
          </span>
        </DialogTitle>

        <DialogActions style={dialogStyles2}>
          <Button onClick={deletePlayer}>تأكيد</Button>
          <Button2 onClick={handleCloseDialog2} autoFocus>
            رجوع
          </Button2>
        </DialogActions>
      </Dialog>

      {openPopup && (
        <Modal onClose={() => setOpenPopup(false)}>
          <MovePlayer
            onClose={() => setOpenPopup(false)}
            movedId={movedId}
            team={movedTeam}
            fetchPlayers={props.fetchPlayers}
            currentPlayer={currentPlayer}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
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

export default SelectTableComponent;

const dialogStyles = {
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  gap: "8px",
  padding: "12px 36px",
};

const dialogStyles2 = {
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  gap: "8px",
  padding: "12px 76px",
};
