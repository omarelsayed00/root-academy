import { NextPage } from "next";
import { ReactNode } from "react";
import { Content, MainTitle, Page, Wrapper } from "./styles";
import Head from "next/head";
import dynamic from "next/dynamic";

type LayoutType = {
  children: JSX.Element | ReactNode;
};

const Layout: NextPage<LayoutType> = ({ children }) => {
  return (
    <Wrapper>
      <Head>
        <title>Root Academy</title>
        <meta name="description" content={"this is Root Academy website"} />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon4.png"
        />
      </Head>

      {children}
    </Wrapper>
  );
};

//export defaultLayout;
export default dynamic(() => Promise.resolve(Layout), { ssr: false });
