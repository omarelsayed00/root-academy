import dynamic from "next/dynamic";
import React from "react";
import Header2 from "@components/Header";
import { Content, Page } from "@layout/styles";
import { Container } from "@styles/globals";
//const MyPage = React.lazy(() => import('./pages/MyPage'));
const Schedule = dynamic(() => import("@containers/Training Schedule"), {
  ssr: false,
});

const MeetingsPage = () => {
  return (
    <Container>
      <Header2 title="مواعيد التمرين" />
      <Content>
        <Page>
          <Schedule />
        </Page>
      </Content>
    </Container>
  );
};

export default MeetingsPage;
