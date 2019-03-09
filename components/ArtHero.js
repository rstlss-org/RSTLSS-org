import React from "react";
import { Hero } from "rbx";
import "./ArtHero.scss";

function ArtHero(props) {
  const { background } = props;
  return (
    <>
      <Hero
        {...props}
        className="art-hero"
        style={{
          backgroundImage: `url("${background}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      />
    </>
  );
}

export default ArtHero;
