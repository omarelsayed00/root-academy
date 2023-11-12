import Icon from "@components/Icon";
import CloseIcon from "@icons/Close";
import HomeIcon from "@icons/Home";
import React, { FC } from "react";
import { MLContainer, MLHeader, MLStyled } from "./styles";
import AddUserForm from "@containers/Users/Add User/AddUserForm";

const NewUserModal /* : FC<{ onClose?: () => void }> */ = (props: any) => {
  return (
    <MLStyled>
      <MLContainer>
        <MLHeader>
          <span>المستخدم</span>
          <div className="icon">
            <Icon onClick={props.onClose}>
              <CloseIcon />
            </Icon>
          </div>
        </MLHeader>
        <AddUserForm
          onClose={props.onClose}
          users={props.users}
          setUsers={props.setUsers}
        />
      </MLContainer>
    </MLStyled>
  );
};

export default NewUserModal;
