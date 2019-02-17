import Link from "next/link";
import { Icon, Content, Footer } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Flag from "react-flags";
const LayoutFooter = () => (
  <Footer>
    <Content textAlign="centered">
      <p>
        <strong>Hand-crafted with</strong>{" "}
        <Icon color="danger">
          <FontAwesomeIcon icon={faHeart} />
        </Icon>{" "}
        in the{" "}
        <Icon>
          <Flag
            name="GB"
            alt="the United Kingdom"
            format="svg"
            basePath="/static/img/flags"
          />
        </Icon>{" "}
        <strong>United Kingdom</strong> by{" "}
        <a href="mailto:rai@rbutera.com">
          <img
            alt="RSTLSS"
            src="/static/img/logo/full.svg"
            style={{
              height: "20px",
              verticalAlign: "baseline",
              position: "relative",
              top: "4px"
            }}
          />
        </a>
        , a{" "}
        <a href="mailto:rai@rbutera.com">
          <strong>CLOAKROOM LIMITED</strong>
        </a>{" "}
        group.
      </p>
      <p>
        The source code for this website is available under the{" "}
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          CC BY NC ND 4.0
        </a>{" "}
        license at{" "}
        <Icon>
          <FontAwesomeIcon icon={faGithub} />
        </Icon>{" "}
        GitHub
      </p>

      <p>
        <em>
          "stay <strong>RSTLSS</strong>"
        </em>
      </p>
      <p>&copy; 2019</p>
    </Content>
  </Footer>
);
export default LayoutFooter;
