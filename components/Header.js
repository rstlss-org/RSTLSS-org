import React from "react";
import Link from "next/link";
import { Navbar, Button, Icon } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

const linkStyle = {
  marginRight: 15
};

// const Header = ({ fixed, collapsed }) => (
//   <Navbar fixed={fixed ? "top" : false} color="black">
/*
    <nav
      className={`navbar is-black is-transparent ${
        fixed && collapsed ? "is-fixed-top" : ""
      }`}
      role="navigation"
    >
*/

function Header() {
  return (
    <Navbar className="is-fixed-top" transparent color="black">
      <Navbar.Brand>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start" />
        <Navbar.Segment align="end">
          <Navbar.Item as="a" dropdown hoverable>
            <Link href="/services">
              <Navbar.Link>Services</Navbar.Link>
            </Link>
            <Navbar.Dropdown boxed>
              <Navbar.Item href="/services">Overview</Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item as="a" href="/services#web">
                Web Design/Development
              </Navbar.Item>
              <Navbar.Item as="a" href="/services#app">
                App Design/Development
              </Navbar.Item>
              <Navbar.Item as="a" href="/services#branding">
                Branding
              </Navbar.Item>
              <Navbar.Item as="a" href="/services#media">
                Media
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item as="a" dropdown hoverable>
            <Link href="/projects">
              <Navbar.Link>Projects</Navbar.Link>
            </Link>
            <Navbar.Dropdown boxed>
              <Navbar.Item href="/projects">Our Work</Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item href="/showcases#cloakroom" as="a">
                Cloakroom
              </Navbar.Item>
              <Navbar.Item href="/showcases#chan" as="a">
                Chan
              </Navbar.Item>
              <Navbar.Item href="/showcases#JRNL" as="a">
                Jour
              </Navbar.Item>
              <Navbar.Item href="/showcases#" as="a">
                Navi
              </Navbar.Item>
              <Navbar.Item href="/showcases#" as="a">
                RAIGASM
              </Navbar.Item>
              <Navbar.Item href="/showcases#tekkers" as="a">
                Tekkers
              </Navbar.Item>
              <Navbar.Item href="/showcases#" as="a">
                RSTLSS Sounds
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item as="a" dropdown hoverable>
            <Link href="/join">
              <Navbar.Link>Join</Navbar.Link>
            </Link>
            <Navbar.Dropdown boxed>
              <Navbar.Item as="a" href="/join">
                Work with Us
              </Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item as="a" href="/join#hipsters">
                for Hipsters
              </Navbar.Item>
              <Navbar.Item as="a" href="/join#hackers">
                for Hackers
              </Navbar.Item>
              <Navbar.Item as="a" href="/join#hustlers">
                for Hustlers
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item as="a" href="mailto:hello@rstlss.org">
            <Button.Group>
              <Button outlined color="success">
                <strong>Hire Us</strong>
                <Icon>
                  <FontAwesomeIcon icon={faHammer} />
                </Icon>
              </Button>
            </Button.Group>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
}

export default Header;
