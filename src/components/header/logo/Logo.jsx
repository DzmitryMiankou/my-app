import React from "react";
import styleLogo from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styleLogo.container}>
      <svg id="Слой_1" viewBox="0 0 174.43 174.43">
        <rect
          className={styleLogo.v1}
          x="5.5"
          y="5.5"
          width="163.43"
          height="163.43"
          rx="10.31"
        />
        <rect
          className={styleLogo.v2}
          x="78.82"
          y="60.24"
          width="16.79"
          height="90.65"
        />
        <circle className={styleLogo.v2} cx="87.21" cy="38.53" r="14.99" />
      </svg>
    </div>
  );
};

export default Logo;
