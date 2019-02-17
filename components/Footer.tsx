import Link from "next/link";
import { Icon, Content, Footer } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Flag from "react-world-flags";

const LayoutFooter = () => (
  <Footer>
    <Content textAlign="centered">
      <p>
        Made in <Flag code="uk" alt="the United Kingdom" />
      </p>
      <p>
        Hand-crafted with{" "}
        <Icon color="danger">
          <FontAwesomeIcon icon={faHeart} />
        </Icon>{" "}
        by <strong>RSTLSS</strong>, a <a href="mailto:">CLOAKROOM LIMITED</a>{" "}
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
      <p>&copy; 2019</p>
    </Content>
  </Footer>
);
export default LayoutFooter;
