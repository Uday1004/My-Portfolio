import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Micro-Frontend Designer",
          "Product-Focused Developer",
          "WordPress/Ecommerce Designer",
          "Tech Maniac",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
