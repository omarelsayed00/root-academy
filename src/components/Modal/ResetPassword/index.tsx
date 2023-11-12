import Icon from "@components/Icon";
import ResetPasswordForm from "./ResetPasswordForm";
import CloseIcon from "@icons/Close";
import HomeIcon from "@icons/Home";
import React, { FC } from "react";
import { MLContainer, MLHeader, MLStyled } from "./styles";

const ResetPasswordModal = ({ otp, onClose }: any) => {
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
        <ResetPasswordForm onClose={onClose} otp={otp} />
      </MLContainer>
    </MLStyled>
  );
};

export default ResetPasswordModal;
