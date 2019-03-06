import "./layout.sass";
import { Fragment } from "react";
import Header from "./Header";
import LayoutFooter from "./Footer";
import { Navi } from "@rstlss/navi";
import { Logo } from "./Logo";
import Head from "next/head";
import HeroBackground from "./HeroBackground";

const backgrounds = [
  "/static/img/navi/bg1.svg",
  "/static/img/navi/bg2.svg",
  "/static/img/navi/bg3.svg",
  "/static/img/navi/bg4.svg",
  "/static/img/navi/bg5.svg"
];

const herobg = <HeroBackground src={backgrounds} duration={5000} />;

const Layout = props => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{props.title || "RSTLSS"}</title>
    </Head>
    <Navi
      navbar={Header}
      collapsed={props.collapsed}
      herobg={herobg}
      collapseAt={1}
      logo={Logo}
      logoSrc="/static/img/logo/v3/full-default.svg"
      logoAlt="RSTLSS"
      onClick={() => {
        console.debug("Navi clicked");
      }}
    >
      {props.children}
      <LayoutFooter />
    </Navi>
  </>
);

export default Layout;
