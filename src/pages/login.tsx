/* eslint-disable @next/next/no-img-element */
import {
  Content,
  LoginContainer,
  Logo,
  RightContainer,
  LeftContainer,
  Title,
  ForgetPassword,
  Button,
  ButtonContainer,
} from "@styles/login";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Modal from "@components/Modal";
import ForgetPassModal from "@components/Modal/ForgetPassModal";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Head from "next/head";
import { useRouter } from "next/router";
import AuthContext from "src/context/AuthContext";
import Cookies from "js-cookie";
import { ResetButton } from "@styles/loginByPhone";
import Icon from "@components/Icon";
import LoginIcon from "@icons/LoginLogo";
import { Backdrop } from "@mui/material";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: function (values) {
      handleLogin();
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .label("Email")
        .required("برجاء إدخال بريد المستخدم")
        .email("بريد المستخدم غير صحيح"),
      password: Yup.string()
        .label("Password")
        .required("برجاء إدخال كلمة السر"),
    }),
  });
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const handleForgetPass = () => {
    setOpenPopup(true);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const { setUser, user, setCurrentUserId, currentUserId, setLoginPhone }: any =
    useContext(AuthContext);

  const { BASE_URL } = process.env;
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}/admins/auth/login`, {
        email: formik.values.email,
        password: formik.values.password,
      })
      .then((response) => {
        Cookies.set("loggedIn", "true");
        console.log(response.data);
        console.log(response.data.data.token);
        localStorage.setItem("accessToken", response.data.data.token);
        setIsLoading(false);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Head>
        <title>Root Academy</title>
        <meta name="description" content={"this is the Root Academy website"} />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon4.png"
        />
      </Head>
      <LoginContainer>
        <RightContainer>
          <Content>
            <Logo>
              {/*  <Image
                    src="/images/logo.svg"
                    width={284.6}
                    height={49}
                    alt=""
                  /> */}
              <Icon>
                <LoginIcon />
              </Icon>
            </Logo>
            <Title>
              <h1>اهلاً بك</h1>
              <p>فى صفحة تحكم اكاديمية رووت</p>
            </Title>
            <form onSubmit={formik.handleSubmit} /* onSubmit={loginUser} */>
              <label>من فصلك قم بتسجيل الدخول</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="البريد الإلكتروني"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  "field " +
                  (formik.errors.email && formik.touched.email && "error")
                }
              />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="كلمة المرور"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  "field " +
                  (formik.errors.password && formik.touched.password && "error")
                }
              />
              <ForgetPassword>
                <span onClick={handleForgetPass}>هل نسيت كلمة المرور؟</span>
              </ForgetPassword>
              <br />
              <ButtonContainer>
                <Button
                  type="submit"
                  //disabled={isSubmitting}
                  //onClick={handleLogin}
                  value="LOG IN"
                >
                  تسجيل الدخول
                </Button>
              </ButtonContainer>

              {formik.touched.email && formik.errors.email && (
                <h5 style={{ color: "red" }}>{formik.errors.email}</h5>
              )}
              {formik.touched.password && formik.errors.password && (
                <h5 style={{ color: "red" }}>{formik.errors.password}</h5>
              )}
              {errorMessage && <h5 style={{ color: "red" }}>{errorMessage}</h5>}
              {/* <p>{errorMessage}</p>
                <p>
                  {errors.email && touched.email && <div>{errors.email}</div>}
                </p>
                <p>
                  {errors.password && touched.password && (
                    <div>{errors.password}</div>
                  )}
                </p> */}
            </form>
          </Content>
        </RightContainer>
        <LeftContainer>
          <h1>انضم لعائلة اكاديمية رووت</h1>
          <p>واطلق العنان لإمكانياتك الكاملة كلاعب كرة قدم.</p>
          <p>تدرب مثل الابطال ، وستلعب مثل الابطال.</p>
          <br />
          <Image
            src="/images/player.png"
            alt=""
            width={358 * 0.7}
            height={696 * 0.7}
          />
        </LeftContainer>
      </LoginContainer>
      {openPopup && (
        <Modal onClose={() => setOpenPopup(false)}>
          <ForgetPassModal onClose={() => setOpenPopup(false)} />
        </Modal>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={() => setIsLoading(true)}
      >
        <div className="loading"></div>
      </Backdrop>
    </div>
  );
};
export default Login;
