import Icon from "@components/Icon";
import ForgetPassForm from "./ForgetPassForm";
import CloseIcon from "@icons/Close";
import HomeIcon from "@icons/Home";
import React, { FC } from "react";
import { MLContainer, MLHeader, MLStyled } from "./styles";

const ForgetPassModal: FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <MLStyled>
      <MLContainer>
        <MLHeader>
          <span>إنشاء كلمة مرور جديدة</span>
          <div className="icon">
            <Icon onClick={onClose}>
              <CloseIcon />
            </Icon>
          </div>
        </MLHeader>
        <ForgetPassForm onClose={onClose} />
      </MLContainer>
    </MLStyled>
  );
};

export default ForgetPassModal;
