import Header2 from "@components/Header";
import { Content, Page } from "@layout/styles";
import { Container } from "@styles/globals";
import dynamic from "next/dynamic";
import React from "react";
//const MyPage = React.lazy(() => import('./pages/MyPage'));
const Profile = dynamic(() => import("@containers/New Player"), {
  ssr: false,
});
const ProfilePage = () => {
  return (
    <Container>
      <Header2 title="إنشاء لاعب جديد" />
      <Content>
        <Page>
          <Profile />
        </Page>
      </Content>
    </Container>
  );
};

export default ProfilePage;
