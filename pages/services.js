import React from "react";
import Layout from "../components/Layout";
import { Hero, Container, Title, Section, Column, Content } from "rbx";
import { overview, branding, app, media, web } from "./services-content.json";
import { SerifTitle } from "../components/title";

import ArtHero from "../components/ArtHero";
function ServiceSection({ category }) {
  const { title, subtitle, content, id } = category;

  return (
    <Section id={id} size="medium">
      <Title>{title}</Title>
      <Title as="h3" size={5}>
        {subtitle}
      </Title>
      <Content>
        <ul>
          {content.map((service, index) => (
            <>
              <li key={index.toString()}>{service.service}</li>
              {service.detail && (
                <ul>
                  {service.detail.map((detail, detailIndex) => (
                    <li key={detailIndex.toString()}>{detail}</li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </Content>
    </Section>
  );
}

export default () => (
  <Layout fixed collapsed title="Services">
    <ArtHero
      background="/static/img/vector-art/SVG/hero2.svg"
      color="black"
      size="large"
    >
      <Hero.Body>
        <Container>
          <SerifTitle>Services</SerifTitle>
          <Title as="h2" subtitle>
            We can turn your vision into reality.
          </Title>
        </Container>
      </Hero.Body>
    </ArtHero>
    <Column.Group>
      <Column size={10} offset={1}>
        {[web, app, branding, media].map((category, index) => (
          <ServiceSection key={index.toString()} category={category} />
        ))}
      </Column>
    </Column.Group>
  </Layout>
);
