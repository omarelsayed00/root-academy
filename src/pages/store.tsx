import dynamic from "next/dynamic";
import React from "react";
import Header2 from "@components/Header";
import { Content, Page } from "@layout/styles";
import { Container } from "@styles/globals";
//const MyPage = React.lazy(() => import('./pages/MyPage'));
const Store = dynamic(() => import("@containers/Store"), {
  ssr: false,
});
const StorePage = () => {
  return (
    <Container>
      <Header2 title="المتجر" />
      <Content>
        <Page>
          <Store />
        </Page>
      </Content>
    </Container>
  );
};

export default StorePage;
