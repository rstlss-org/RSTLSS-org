import Link from "next/link";
import { Navbar, Button, Icon } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

const linkStyle = {
  marginRight: 15
};

// const Header = () => (
//   <div>
//     <Link href="/">
//       <a style={linkStyle}>Home</a>
//     </Link>
//     <Link href="/services">
//       <a style={linkStyle}>Services</a>
//     </Link>
//     <Link href="/projects">
//       <a style={linkStyle}>Projects</a>
//     </Link>
//     <Link href="/contact">
//       <a style={linkStyle}>Contact Us</a>
//     </Link>
//   </div>
// );

const Header = () => (
  <Navbar color="white">
    <Navbar.Brand>
      <Navbar.Item href="#">
        <img
          src="./static/img/logo/black.png"
          alt="RSTLSS"
          role="presentation"
        />
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Segment align="start">
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>About</Navbar.Item>
        <Navbar.Item>Skills & Services</Navbar.Item>
        <Navbar.Item dropdown>
          <Navbar.Link>Projects</Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item>Our Work</Navbar.Item>
            <Navbar.Divider />
            <Navbar.Item>Cloakroom</Navbar.Item>
            <Navbar.Item>Chan</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar.Segment>

      <Navbar.Segment align="end">
        <Navbar.Item>
          <Button.Group>
            <Button color="success">
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
export default Header;
