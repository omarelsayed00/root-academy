import dynamic from "next/dynamic";
import React from "react";
import Header2 from "@components/Header";
import { Content, Page } from "@layout/styles";
import { Container } from "@styles/globals";
//const MyPage = React.lazy(() => import('./pages/MyPage'));
const Upcoming = dynamic(() => import("@containers/Upcoming Matches"), {
  ssr: false,
});
const AboutPage = () => {
  return (
    <Container>
      <Header2 title="المباريات القادمة" />
      <Content>
        <Page>
          <Upcoming />
        </Page>
      </Content>
    </Container>
  );
};

export default AboutPage;
