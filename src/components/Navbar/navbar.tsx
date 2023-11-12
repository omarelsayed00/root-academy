/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { FC } from "react";
import {
  Button,
  MLContainer,
  MLStyled,
  Name,
  NavLink,
  NavbarLinks,
  Notifications,
  User,
} from "./navbarStyles";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import SelectDropdown from "@components/Select copy";
import Icon from "@components/Icon";
import LogoutIcon from "@icons/Logout";

const Navbar /* : FC<{ onClose?: () => void }> */ = (props: any) => {
  const router = useRouter();

  const isAdmin = Cookies.get("isAdmin");

  const isHomeActiveLink = (route: string) => router.pathname === `${route}`;

  const isActiveLink = (route: string) => router.pathname.includes(`${route}`);

  const logout = () => {
    Cookies.remove("loggedin");
    Cookies.remove("isAdmin");
    localStorage.removeItem("accesToken");
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

          {isAdmin && (
            <SelectDropdown
              data={[
                {
                  name: "الاعضاء",
                  path: "/members",
                },
                {
                  name: "المبادرات المقترحة",
                  path: "/suggestedInitiatives",
                },
                {
                  name: "الاجتماعات المقترحة",
                  path: "/suggestedMeetings",
                },
                {
                  name: "المهام المقترحة",
                  path: "/suggestedTasks",
                },
              ]}
              settings={{
                textColor: "black",
                arrowColor: "orange",
                transparent: true,
              }}
            />
          )}

          <Button onClick={logout} style={{ color: "white" }}>
            <Icon>
              <LogoutIcon />
            </Icon>
            تسجيل الخروج
          </Button>
        </NavbarLinks>
      </MLContainer>
    </MLStyled>
  );
};

export default Navbar;

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
    path: "/trainingSchedule",
  },
  {
    name: "المباريات القادمة",
    path: "/upcomingMatches",
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

export const links = [
  {
    name: "قائمة اللاعبين",
    path: "/players",
  },
  {
    name: "مواعيد التمرين",
    path: "/trainingSchedule",
  },
  {
    name: "المباريات القادمة",
    path: "/upcomingMatches",
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
