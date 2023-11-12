import Icon from "@components/Icon";
import VerifyOTP from "./otp";
import CloseIcon from "@icons/Close";
import HomeIcon from "@icons/Home";
import React, { FC } from "react";
import { MLContainer, MLHeader, MLStyled } from "./styles";

const OTPModal = (props: any) => {
  return (
    <MLStyled>
      <MLContainer>
        <MLHeader>
          <span>إنشاء كلمة مرور جديدة</span>
          <div className="icon">
            <Icon onClick={props.onClose}>
              <CloseIcon />
            </Icon>
          </div>
        </MLHeader>
        <VerifyOTP phone={props.phone} />
      </MLContainer>
    </MLStyled>
  );
};

export default OTPModal;
