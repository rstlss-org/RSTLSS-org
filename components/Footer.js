import Link from "next/link";
import { Icon, Container, Footer } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Flag from "react-flags";
const LayoutFooter = () => (
  <Footer backgroundColor="white-bis" textColor="dark">
    <Container textAlign="centered">
      <p>
        <a href="mailto:rai@rbutera.com">
          <img
            alt="RSTLSS"
            src="/static/img/logo/v3/full-default.svg"
            style={{
              height: "20px",
              verticalAlign: "baseline",
              position: "relative",
              top: "4px"
            }}
          />
        </a>{" "}
        - a{" "}
        <a href="mailto:rai@rbutera.com">
          <strong>CLOAKROOM LIMITED</strong>
        </a>{" "}
        group.
      </p>
      <p style={{ fontSize: "0.85rem" }}>
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
        <strong>United Kingdom</strong>
      </p>

      <p style={{ fontStyle: "italic" }} style={{ fontSize: "0.75rem" }}>
        "stay <strong>RSTLSS</strong>"
      </p>
      <p style={{ fontSize: "0.75rem" }}>&copy; 2019</p>

      <p
        className="footer-legal"
        style={{
          fontSize: "0.65rem",
          opacity: "0.6"
        }}
      >
        <em>RSTLSS LTD</em> (company number 12031646) incorporated in England
        and Wales. Registered business address: Kemp House, 160 City Road,
        London, EC1V 2NX.
      </p>
    </Container>
  </Footer>
);
export default LayoutFooter;
