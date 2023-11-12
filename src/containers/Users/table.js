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
} from "./tableStyles";
import EditIcon from "@icons/Edit";
import DeleteIcon from "@icons/Delete";
import Icon from "@components/Icon";
import DeleteIcon2 from "@icons/Delete2";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Modal from "@components/Modal";
import EditUserModal from "@components/Modal/EditUserMo";

const SelectTableComponent = (props) => {
  //const [List, setList] = useState(props.table);
  const [openDialog, setOpenDialog] = useState(false);
  const [deletedId, setDeletedId] = useState(0);

  const [MasterChecked, setMasterChecked] = useState(false);
  const [SelectedList, setSelectedList] = useState([]);

  const deleteUser = () => {
    console.log("Deleted ID: " + deletedId);
    props.setUsers((users) =>
      users.filter((user) => {
        console.log(user.id);
        return user.id !== deletedId;
      })
    );

    setOpenDialog(false);
  };

  const handleEditUser = (id) => {
    setCurrentId(id);
    console.log("Current ID: " + id);
    setOpenPopup(true);
  };

  const handleOpenDialog = (id) => {
    console.log("SentID: " + id);
    setDeletedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Select/ UnSelect Table rows
  const onMasterCheck = (e) => {
    let tempList = props.users;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));
    setMasterChecked(e.target.checked);
    props.setUsers(tempList);
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
    props.setUsers(tempList);
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
              <th scope="col" style={{ width: "400px" }}>
                <Row>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={MasterChecked}
                    id="mastercheck"
                    onChange={(e) => onMasterCheck(e)}
                  />
                  <span>اسم المستخدم</span>
                </Row>
              </th>
              <th scope="col" style={{ width: "400px" }}>
                البريد الإلكتروني
              </th>
              <th scope="col" style={{ width: "700px" }}>
                رقم الهاتف
              </th>

              <th scope="col"></th>
              <th></th>
              <th dir="ltr">
                {/*      <button
                  dir="ltr"
                  style={{
                    cursor: "pointer",
                    border: "none",
                    textAlign: "left",
                  }}
                > */}
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
                {/* </button> */}
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
                    <span>{user.name}</span>
                  </Row>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Actions>
                    <Block onClick={() => handleOpenDialog(user.id)}>
                      <Icon strokeColor="#E1284A">
                        <DeleteIcon />
                      </Icon>
                      حذف
                    </Block>
                  </Actions>
                </td>
                <td></td>
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
          {"هل انت متأكد من حذف المستخدم ؟"}
        </DialogTitle>

        <DialogActions style={{ display: "flex", gap: "8px" }}>
          <Button onClick={deleteUser}>حذف</Button>
          <Button onClick={handleCloseDialog} autoFocus>
            إلغاء
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SelectTableComponent;
