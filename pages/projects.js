import React from "react";
import { Hero, Container, Title, Column } from "rbx";

import Layout from "../components/Layout";
import ArtHero from "../components/ArtHero";

export default () => (
  <Layout fixed collapsed title="Projects">
    <ArtHero
      background="/static/img/vector-art/SVG/hero1.svg"
      color="black"
      size="large"
    >
      <Hero.Body>
        <Container>
          <Title>Projects</Title>
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
