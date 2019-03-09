import React from "react";
import { Hero, Container, Title, Column } from "rbx";
import Layout from "../components/Layout";
import ArtHero from "../components/ArtHero";

export default () => (
  <Layout fixed collapsed title="Hire Us">
    <ArtHero
      background="/static/img/vector-art/SVG/hero8.svg"
      color="black"
      size="large"
    >
      <Hero.Body>
        <Container>
          <Title className="serif">Hire Us</Title>
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
