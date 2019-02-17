import "./layout.sass";
import Header from "./Header";
import LayoutFooter from "./Footer";

import { Container } from "rbx";

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <LayoutFooter />
  </div>
);

export default Layout;
