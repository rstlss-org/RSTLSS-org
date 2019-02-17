import "./layout.scss";

import Header from "./Header";

const Layout = props => (
  <section className="section">
    <div className="container">
      <Header />
      {props.children}
    </div>
  </section>
);

export default Layout;
