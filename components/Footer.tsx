import Link from "next/link";
import { Icon, Content, Footer } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const LayoutFooter = () => (
  <Footer>
    <Content textAlign="centered">
      <p>
        Hand-crafted in the United Kingdom with{" "}
        <Icon color="danger">
          <FontAwesomeIcon icon={faHeart} />
        </Icon>{" "}
        by <strong>RSTLSS</strong>, a <a href="mailto:">CLOAKROOM LIMITED</a>{" "}
        group.
      </p>
      <p>
        The source code for this website is available under the{" "}
        <a href="https://opensource.org/licenses/mit-license.php">
          MIT License
        </a>{" "}
        at Github
      </p>
      <p>&copy; 2019</p>
    </Content>
  </Footer>
);
export default LayoutFooter;
