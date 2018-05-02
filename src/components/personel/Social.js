import React from "react";
import "../css/social.css";

const colors = {
  dark: "#121215",
  dark_80: "#12121580",
  red: "#E71D36",
  platinum: "#E5E7E6",
  blue: "#0094C6",
  isabelline: "#FEFEFE",
  blackOlive: "#3D3D3F"
};
export default () => {
  return (
    <div>
      <p style={{ fontWeight: 700, color: colors.blackOlive }}>Social</p>
      <SocialButton color={colors.red} content="g" />
      <SocialButton color={colors.blue} content="t" />
      <SocialButton color={colors.dark} content="f" />
      <SocialButton color={colors.dark_80} content="..." />
    </div>
  );
};

const SocialButton = ({ color, content }) => {
  return (
    <div
      style={{
        display: "inline-block",
        float: "left",
        marginLeft: 10
      }}
    >
      <div
        className="social-button"
        style={{
          backgroundColor: color
        }}
      >
        <a
          href="#"
          style={{
            display: "table-cell",
            width: 36,
            height: 36,
            borderRadius: 36,
            color: colors.platinum,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 16,
            verticalAlign: "middle"
          }}
        >
          {content}
        </a>
      </div>
    </div>
  );
};
