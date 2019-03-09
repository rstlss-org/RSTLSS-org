// pages/index.js
console.debug("index.js v0.1 loaded");
import Layout from "../components/Layout";
import {
  Icon,
  Hero,
  Container,
  Title,
  Section,
  Card,
  Box,
  Column,
  Image,
  Block,
  Generic
} from "rbx";

import { map } from "rambda";
import {
  faFistRaised,
  faPencilRuler,
  faChartLine,
  faHandsHelping,
  faMagic,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Top() {
  return (
    <Hero gradient color="info" size="medium">
      <Hero.Body>
        <Container fluid>
          <Title>We are RSTLSS</Title>
          <Title as="h4" subtitle>
            Big man tings since 2k19 zoop zoop
          </Title>
          <p>
            We use our proactive ballpark figures to dynamically manage our
            vertical expectations. Our emerging market development lifecycle
            enables holistic, mission critical milestones.
          </p>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

function About() {
  return (
    <Section backgroundColor="black" size="large">
      <Column.Group>
        <Column textAlign="centered" size={4} offset={4}>
          <Card style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <Card.Content>
              <Title>Hello!</Title>
              <Generic as="p" textSize={6}>
                We are{" "}
                <img
                  src="/static/img/logo/v3/full-default.svg"
                  alt="RSTLSS"
                  style={{ height: "1.5em", position: "relative", top: "7px" }}
                />{" "}
                - an <strong>alliance</strong> of{" "}
                <strong>passionate creatives</strong>, based out of{" "}
                <strong>London</strong>.
              </Generic>
              <Block />
              <Generic as="p" textSize={6}>
                We <strong>work together</strong> to forge{" "}
                <strong>engaging media</strong>, <strong>bold brands</strong>{" "}
                and <strong>magical user experiences</strong>.
              </Generic>
              <Block />
              <Generic as="p" textSize={6}>
                We use <strong>collaboration</strong>,{" "}
                <strong>creativity</strong>, and{" "}
                <strong>the latest and greatest in digital innovation.</strong>
              </Generic>
            </Card.Content>
          </Card>
        </Column>
      </Column.Group>
    </Section>
  );
}

function Philosophy() {
  const values = [
    {
      title: "Attention to Detail",
      description: [
        "The differences between ‘ordinary’ and ‘delightful’ experiences lie in the details most people would not even bother to think about.",
        "We don't cut corners, make careless mistakes or deliver sloppy work. We squeeze everything we have into every second and every pixel."
      ],
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faPencilRuler,
      iconColor: "warning"
    },
    {
      title: "Local Talent",
      description: [
        "Our clients trust us because we work exclusively with local talent from the United Kingdom.",
        "We will never outsource our clients' work to cheap, unreliable third parties halfway across the world.",
        "It just isn't worth it."
      ],
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faFistRaised,
      iconColor: "danger"
    },
    {
      title: "Impact-Focused",
      description: [
        "We focus on meeting every client's individual needs and specific priorities in order to maximise the benefit our work has on their growth.",
        "No frills or gimmicks, just results."
      ],
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faChartLine,
      iconColor: "success"
    },
    {
      title: "We Listen to Your Audience",
      description: [
        "From the moment we start a project we engage directly with the target audience, going the extra mile to make sure we understand their needs and expectations, and we continually iterate until they are all satisfied.",
        "After all, perfection takes a few iterations - nobody gets it completely right on the first try. "
      ],
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faUsers,
      iconColor: "primary"
    },
    {
      title: "'Magic'",
      description: [
        "We aren't afraid to use the latest and greatest in cutting-edge technologies in everything we do.",
        "We are also big believers in minimalism and 'keeping it simple'",
        "This magic combination allows us to deliver high quality user experiences on par with the biggest names in your industry."
      ],
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faMagic,
      iconColor: "info"
    },
    {
      title: "Long Term Support",
      description: [
        "Unlike many agencies and consultancies, we won't disappear once you've paid the bill.",
        "We are proud of our work, and happy to provide long-term assistance to all our clients."
      ],
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faHandsHelping,
      iconColor: "danger"
    }
  ];

  return (
    <div>
      <Section backgroundColor="white-bis" size="large" textAlign="centered">
        <Column.Group>
          <Column size={8} offset={2}>
            <Title>Philosophy & Values</Title>

            <Block />
            <p>
              At <strong>RSTLSS</strong> we have a{" "}
              <strong>strong commitment</strong> to our{" "}
              <strong>philosophy and values</strong>, which influence everything
              we do.
            </p>
            <Block />
            <p>
              With <strong>over a decade and a half</strong>
              's experience in the creative industry, we have{" "}
              <strong>learned a lot</strong> about what it takes{" "}
              <strong> to be successful in today's digital age:</strong>
            </p>
          </Column>
        </Column.Group>
        <Column.Group>
          <Column size={6} offset={3}>
            <PhilosophyCards values={values} />
          </Column>
        </Column.Group>
        <p>
          Find out more about the services we offer{" "}
          <Link href="/services">
            <a>here</a>
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}

function PhilosophyCards(props) {
  const { values } = props;
  const descriptionStyle = {
    marginBottom: "10px",
    paddingBottom: "20px"
  };
  return values.map((value, index) => (
    <Section key={index.toString()}>
      <Card>
        <Card.Content>
          <Icon
            textColor={value.iconColor}
            size="large"
            style={{ marginTop: "30px", marginBottom: "15px" }}
          >
            <FontAwesomeIcon textAlign="centered" size="5x" icon={value.icon} />
          </Icon>
          <Title size={4} style={{ marginTop: "20px" }}>
            {value.title}
          </Title>
          {value.description.map((description, descIndex) => (
            <p key={`desc${descIndex}`} style={descriptionStyle}>
              {description}
            </p>
          ))}
        </Card.Content>
      </Card>
    </Section>
  ));
}

function Quote(props) {
  const {
    backgroundColor = "white",
    textColor = "dark",
    size = "large",
    quote = ""
  } = props;
  return (
    <Section
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
    >
      <Column.Group>
        <Column size={4} offset={4}>
          <div className="speech-bubble">
            <Title subtitle size={6} textAlign="centered" textColor={textColor}>
              "{quote}"
            </Title>
          </div>
        </Column>
      </Column.Group>
    </Section>
  );
}

export const Home = {
  Top,
  About,
  Philosophy,
  Quote
};

/*
<Home.Top />
<Home.Quote
  quote="We're seriously impressed. You delivered everything we asked for and more."
  size="small"
  backgroundColor="black"
  textColor="light"
/>
*/

export default () => (
  <Layout expandOnClick>
    <Home.About />
    <Home.Quote
      quote="It has been an absolute pleasure working with you guys. Smashing work."
      size="medium"
      backgroundColor="light"
      textColor="grey"
    />
    <Home.Philosophy />
    <Home.Quote
      quote="Wow! We love it, and I think [our customers] will love it even more."
      size="medium"
      backgroundColor="light"
      textColor="grey"
    />
  </Layout>
);
