import Link from "next/link";
import { Navbar, Button, Icon } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

const linkStyle = {
  marginRight: 15
};

// const Header = ({ fixed, collapsed }) => (
//   <Navbar fixed={fixed ? "top" : false} color="black">

function Header({ fixed, collapsed }) {
  return (
    <nav
      className={`navbar is-black is-transparent ${
        fixed && collapsed ? "is-fixed-top" : ""
      }`}
      role="navigation"
    >
      <Navbar.Brand>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start" />
        <Navbar.Segment align="end">
          <Navbar.Item as="div" dropdown>
            <Navbar.Link>
              <Link href="/">
                <a>Services</a>
              </Link>
            </Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item as="div">
                <Link href="/">
                  <a>Media</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/">
                  <a>Branding</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/">
                  <a>Web</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/">
                  <a>App</a>
                </Link>
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item as="div" dropdown>
            <Navbar.Link>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item as="div">
                <Link href="/projects">
                  <a>Our Work</a>
                </Link>
              </Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item as="div">
                <Link href="/showcases/cloakroom">
                  <a>Cloakroom</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/showcases/chan">
                  <a>Chan</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/showcases/JRNL">
                  <a>Jour</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/showcases/">
                  <a>RAIGASM</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/showcases/tekkers">
                  <a>Tekkers</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/showcases/">
                  <a>Hypegen</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/showcases/">
                  <a>RSTLSS BEATS</a>
                </Link>
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item as="div" dropdown>
            <Navbar.Link>
              <Link href="/join">
                <a>Join RSTLSS</a>
              </Link>
            </Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item as="div">
                <Link href="/join">
                  <a>Work with Us</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/join">
                  <a>Hipsters</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/join">
                  <a>Hackers</a>
                </Link>
              </Navbar.Item>
              <Navbar.Item as="div">
                <Link href="/join">
                  <a>Hustlers</a>
                </Link>
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item as="div">
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
    </nav>
  );
}

export default Header;
