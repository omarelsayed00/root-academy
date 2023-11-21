import Icon from "@components/Icon";
import CloseIcon from "@icons/Close";
import HomeIcon from "@icons/Home";
import React, { FC } from "react";
import { ImageContainer, MLContainer, MLHeader, MLStyled } from "./styles";
import AddUserForm from "@containers/Users/Add User/AddUserForm";

const ViewImageModal /* : FC<{ onClose?: () => void }> */ = (props: any) => {
  return (
    <MLStyled>
      <MLContainer>
        <MLHeader>
          <span>لوجو الفريق المنافس</span>
          <div className="icon">
            <Icon onClick={props.onClose}>
              <CloseIcon />
            </Icon>
          </div>
        </MLHeader>
        <ImageContainer>
          <img src={props.img} alt="opponent logo" />
        </ImageContainer>
      </MLContainer>
    </MLStyled>
  );
};

export default ViewImageModal;
