import type { NextPage } from "next";
import { Fragment, Suspense, useEffect, useState } from "react";
import Header2 from "@components/Header";
import { Content, Page } from "@layout/styles";
import { Container } from "@styles/globals";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import { AuthProvider } from "src/context/AuthContext";
import axios from "axios";
import dynamic from "next/dynamic";
const LoginHistory = dynamic(() => import("@containers/Login History"), {
  ssr: false,
});
const Home: NextPage = () => {
  return (
    <Container>
      <Header2 title="سجل الدخول" />
      <Content>
        <Page>
          <LoginHistory />
        </Page>
      </Content>
    </Container>
  );
};

export default Home;
