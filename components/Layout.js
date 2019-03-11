import "./layout.sass";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import Navi from "@rstlss/navi";
import Head from "next/head";
import { Provider } from "react-redux";
import Header from "./Header";
import LayoutFooter from "./Footer";
import { Logo } from "./Logo";
import HeroBackground from "./HeroBackground";

import store from "../state/store";
import { expandNavi } from "../state/navi/actions";

const backgrounds = [
  "/static/img/navi/bg1.svg",
  "/static/img/navi/bg2.svg",
  "/static/img/navi/bg3.svg",
  "/static/img/navi/bg4.svg",
  "/static/img/navi/bg5.svg"
];

const herobg = <HeroBackground src={backgrounds} duration={5000} />;

function innerLayout(props) {
  const { expandOnClick, collapsed, children, dispatch } = props;
  return (
    <Navi
      navbar={Header}
      collapsed={collapsed}
      fixed={collapsed}
      herobg={herobg}
      collapseAt={1}
      logo={Logo}
      logoSrc="/static/img/logo/v4/rstlss-animated.svg"
      logoAlt="RSTLSS"
      fixed
      onClick={() => {
        if (expandOnClick) {
          dispatch(expandNavi());
        }
      }}
    >
      {children}
      <LayoutFooter />
    </Navi>
  );
}

function mapStateToProps({ navi, browser }, ownState) {
  const { fixed, collapsed } = navi;
  return {
    fixed,
    collapsed: ownState.collapsed || collapsed
  };
}

const InnerLayout = connect(mapStateToProps)(innerLayout);

function Layout(props) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{props.title ? `${props.title} - RSTLSS` : "RSTLSS"}</title>
      </Head>
      <InnerLayout {...props} />
    </Provider>
  );
}
export default Layout;
