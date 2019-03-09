import React from "react";
import { Hero, Container, Title, Column } from "rbx";
import Layout from "../components/Layout";
import ArtHero from "../components/ArtHero";

export default () => (
  <Layout fixed collapsed title="Join Us">
    <ArtHero
      background="/static/img/vector-art/SVG/hero7.svg"
      color="warning"
      size="large"
    >
      <Hero.Body>
        <Container>
          <Title>
            Join{" "}
            <img
              className="hero-title-logo"
              src="/static/img/logo/v3/full-default.svg"
              alt="RSTLSS"
              style={{ height: "45px", position: "relative", top: "10px" }}
            />
          </Title>
          <Title as="h2" subtitle>
            This page is under construction.
          </Title>
        </Container>
      </Hero.Body>
    </ArtHero>
    <Column.Group>
      <Column size={10} offset={1}>
        <p>Coming Soon.</p>
      </Column>
    </Column.Group>
  </Layout>
);
