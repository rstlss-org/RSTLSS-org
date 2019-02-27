import "./layout.sass";
import { Fragment } from "react";
import Header from "./Header";
import LayoutFooter from "./Footer";
import { Navi } from "@rstlss/navi";
import Head from "next/head";

const herobg = (
  <>
    <figure />
    <figure />
    <figure />
    <figure />
    <figure />
  </>
);

const Layout = props => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Navi
      navbar={Header}
      herobg={herobg}
      collapseAt={1}
      logo="/static/img/logo/v3/full-default.svg"
    >
      {props.children}
      <LayoutFooter />
    </Navi>
  </>
);

export default Layout;
