import React from "react";
import { Hero, Container, Title, Column } from "rbx";
import { SerifTitle } from "../components/title";
import Layout from "../components/Layout";

export default () => (
  <Layout fixed collapsed title="Join Us">
    <Hero color="black" size="large">
      <Hero.Body>
        <Container>
          <SerifTitle>Join Us</SerifTitle>
          <Title as="h2" subtitle>
            This page is under construction.
          </Title>
        </Container>
      </Hero.Body>
    </Hero>
    <Column.Group>
      <Column size={10} offset={1}>
        <p>Coming Soon.</p>
      </Column>
    </Column.Group>
  </Layout>
);
