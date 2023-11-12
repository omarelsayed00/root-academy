import {
  Row,
  Hr,
  ActivateBtn,
  SetupBtn,
  Info,
  SecurityWrapper,
} from "./styles";
import ButtonUI from "@mui/material/Button";
import Icon from "@components/Icon";
import UserIcon from "@icons/User";

const Security = () => {
  return (
    <SecurityWrapper>
      <Row>
        <Info>
          <h1>عملية التحقق بخطوتين 2FA</h1>
          <h3>
            عملية التحقق بخطوتين ستساعدك على التأمين حسابك بشكل كبير من
            الإختراقات.
          </h3>
        </Info>
        <ActivateBtn>تفعيل</ActivateBtn>
      </Row>
      <Hr />
      <Row>
        <Info>
          <h2>رسالة البريد الإلكتروني</h2>
          <h3>رابط تفعيل عبر البريد الإلكتروني</h3>
        </Info>
        <SetupBtn>تثبيت</SetupBtn>
      </Row>
      <Hr />
      <Row>
        <Info>
          <h2>رسالة هاتف SMS</h2>
          <h3>عبر رقم هاتفك الخاصة الدي أدخلته</h3>
        </Info>
        <SetupBtn>تثبيت</SetupBtn>
      </Row>
    </SecurityWrapper>
  );
};

export default Security;
