import React from "react";
import { Hero } from "rbx";

function ArtHero(props) {
  const { background } = props;
  return (
    <>
      <Hero
        {...props}
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
