import React from "react";
import styleLogo from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styleLogo.container}>
      <svg
        id="Слой_1"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Слой 1"
        viewBox="0 0 174.43 174.43"
      >
        <rect
          style={{
            fill: "#fbfbfb",
          }}
          x="78.82"
          y="60.24"
          width="16.79"
          height="90.65"
        />
        <circle
          style={{
            fill: "#fbfbfb",
          }}
          cx="87.21"
          cy="38.53"
          r="14.99"
        />
      </svg>
    </div>
  );
};

export default Logo;
