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
  <Navbar color="black">
    <Navbar.Brand>
      <Navbar.Item href="#">
        <img
          src="./static/img/logo/white.png"
          alt="RSTLSS"
          role="presentation"
        />
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Segment align="start" />

      <Navbar.Segment align="end">
        <Navbar.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link href="/services">
            <a>Skills & Services</a>
          </Link>
        </Navbar.Item>
        <Navbar.Item dropdown>
          <Navbar.Link>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item>
              <Link href="/projects">
                <a>Our Work</a>
              </Link>
            </Navbar.Item>
            <Navbar.Divider />
            <Navbar.Item>
              <Link href="/showcases/cloakroom">
                <a>Cloakroom</a>
              </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link href="/showcases/chan">
                <a>Chan</a>
              </Link>
            </Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
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
