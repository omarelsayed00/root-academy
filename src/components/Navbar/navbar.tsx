/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { FC, useState } from "react";
import {
  Button,
  MLContainer,
  MLStyled,
  Name,
  NavLink,
  NavbarLinks,
  Notifications,
  User,
  Button2,
  Button3,
} from "./navbarStyles";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import SelectDropdown from "@components/Select copy";
import Icon from "@components/Icon";
import LogoutIcon from "@icons/Logout";
import { Dialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const Navbar /* : FC<{ onClose?: () => void }> */ = (props: any) => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  const isHomeActiveLink = (route: string) => router.pathname === `${route}`;

  const isActiveLink = (route: string) => router.pathname.includes(`${route}`);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const logout = () => {
    Cookies.remove("loggedIn");
    localStorage.removeItem("accessToken");
    router.push("/login");
    props.onClose();
  };

  return (
    <MLStyled>
      <MLContainer>
        <div>
          <Image
            style={{ cursor: "pointer" }}
            src="/images/navbarOpen.svg"
            width={46 * 0.6}
            height={33}
            alt=""
            onClick={() => props.onClose()}
          />
        </div>

        <NavbarLinks /* onClick={() => props.onClose()} */>
          {/* {isAdmin
            ? adminLinks.map((link) => (
                <Link key={link.name} href={link.path}>
                  <NavLink>
                    <span>{link.name}</span>
                  </NavLink>
                </Link>
              ))
            : */}
          <Link href={"/"}>
            <NavLink active={isHomeActiveLink("/")}>
              <span>سجل الدخول</span>
            </NavLink>
          </Link>
          {links.map((link) => (
            <Link key={link.name} href={link.path}>
              <NavLink active={isActiveLink(link.path)}>
                <span>{link.name}</span>
              </NavLink>
            </Link>
          ))}

          <Button onClick={handleOpenDialog} style={{ color: "white" }}>
            <Icon>
              <LogoutIcon />
            </Icon>
            تسجيل الخروج
          </Button>
        </NavbarLinks>
      </MLContainer>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span style={{ fontSize: "24px", fontFamily: "Arb-Regular" }}>
            هل انت متأكد من تسجيل الخروج؟
          </span>
        </DialogTitle>

        <DialogActions style={dialogStyles2}>
          <Button3 onClick={logout}>تسجيل خروج</Button3>
          <Button2 onClick={handleCloseDialog} autoFocus>
            رجوع
          </Button2>
        </DialogActions>
      </Dialog>
    </MLStyled>
  );
};

export default Navbar;

export const links = [
  {
    name: "قائمة اللاعبين",
    path: "/players",
  },
  {
    name: "مواعيد التمرين",
    path: "/trainings",
  },
  {
    name: "المباريات القادمة",
    path: "/matches",
  },
  {
    name: "اخبار الاكاديمية",
    path: "/news",
  },
  {
    name: "تعديل المتجر",
    path: "/store",
  },
  {
    name: "قواعد الاكاديمية",
    path: "/rules",
  },
];

const dialogStyles2 = {
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  gap: "8px",
  padding: "12px 76px",
};

export const adminLinks = [
  {
    name: "سجل الدخول",
    path: "/",
  },
  {
    name: "قائمة اللاعبين",
    path: "/players",
  },
  {
    name: "مواعيد التمرين",
    path: "/trainings",
  },
  {
    name: "المباريات القادمة",
    path: "/matches",
  },
  {
    name: "اخبار الاكاديمية",
    path: "/news",
  },
  {
    name: "تعديل المتجر",
    path: "/store",
  },
  {
    name: "قواعد الاكاديمية",
    path: "/rules",
  },
];
