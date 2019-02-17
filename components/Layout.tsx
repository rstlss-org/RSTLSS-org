import "./layout.sass";
import { Content } from "rbx";
import Header from "./Header";
import LayoutFooter from "./Footer";

const Layout = props => (
  <Content>
    <Header />
    {props.children}
    <LayoutFooter />
  </Content>
);

export default Layout;
