import type { NextPage } from "next";
import { Fragment, Suspense, useEffect, useState } from "react";
import Header2 from "@components/Header";
import { Content, Page } from "@layout/styles";
import { Container } from "@styles/globals";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import { AuthProvider } from "src/context/AuthContext";
import axios from "axios";
import News from "@containers/News";

const Home: NextPage = () => {
  return (
    <Container>
      <Header2 title="اخبار الاكاديمية" />
      <Content>
        <Page>
          <News />
        </Page>
      </Content>
    </Container>
  );
};

export default Home;
