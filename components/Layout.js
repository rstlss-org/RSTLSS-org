import "./layout.sass";
import { Fragment } from "react";
import Header from "./Header";
import LayoutFooter from "./Footer";
import { Navi } from "@rstlss/navi";

const herobg = (
  <>
    <figure />
    <figure />
    <figure />
    <figure />
    <figure />
    <figure />
    <figure />
    <figure />
    <figure />
    <figure />
    <figure />
  </>
);

const Layout = props => (
  <>
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
