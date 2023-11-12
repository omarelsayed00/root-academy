/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import Noty from "./Noty";
//import Notifications from "react-notifications-menu";
import "./styles";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { HeaderContainer, HeaderContent, MainImage } from "./styles";
import Layout from "@layout/index";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Icon from "@components/Icon";
import Link from "next/link";
import NavbarModal from "@components/Navbar";
import Navbar from "@components/Navbar/navbar";
import { MainTitle } from "@layout/styles";
import HOfficeIcon from "@icons/HOffice";

const Header2: React.FC = (props: any) => {
  const router = useRouter();
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const handleSignOut = () => {
    router.push("/login");
    Cookies.remove("loggedin");
    localStorage.removeItem("accesToken");
  };

  return (
    <HeaderContainer>
      <Image
        style={{ cursor: "pointer" }}
        src="/images/navbar.svg"
        width={46 * 0.6}
        height={33}
        alt=""
        onClick={() => setOpenPopup(true)}
      />
      <h1>{props.title}</h1>

      <Image src="/images/logo.svg" width={60} height={60} alt="" />
      {openPopup && (
        <NavbarModal onClose={() => setOpenPopup(false)}>
          <Navbar onClose={() => setOpenPopup(false)} />
        </NavbarModal>
      )}
    </HeaderContainer>
  );
};

export default Header2;
