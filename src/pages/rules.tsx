import dynamic from "next/dynamic";
import React from "react";
import Header2 from "@components/Header";
import { Content, Page } from "@layout/styles";
import { Container } from "@styles/globals";
//const MyPage = React.lazy(() => import('./pages/MyPage'));
const Rules = dynamic(() => import("@containers/Rules"), {
  ssr: false,
});
const RulesPage = () => {
  return (
    <Container>
      <Header2 title="قواعد الاكاديمية" />
      <Content>
        <Page>
          <Rules />
        </Page>
      </Content>
    </Container>
  );
};

export default RulesPage;
