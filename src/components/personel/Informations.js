import React from "react";
import "../css/informations.css";

const colors = {
  dark: "#121215",
  dark_80: "#12121580",
  red: "#E71D36",
  platinum: "#E5E7E6",
  blue: "#0094C6",
  isabelline: "#FEFEFE",
  blackOlive: "#3D3D3F"
};
export default ({ userImage, userName, valid, mail, projectNumber, span }) => {
  return (
    <div>
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: 36,
          backgroundColor: "#CECECE",
          textAlign: "center",
          display: "inline-block",
          float: "left"
        }}
      >
        <img
          src={userImage}
          style={{
            marginTop: 5,
            width: 64,
            height: 64,
            borderRadius: 32
          }}
        />
      </div>
      <div
        style={{
          marginLeft: 20,
          display: "inline-block"
        }}
      >
        <p
          style={{
            fontSize: 16,
            padding: 0,
            margin: 0
          }}
        >
          {userName}
        </p>
        <p
          style={{
            fontSize: 12,
            color: colors.dark_80,
            padding: 0,
            margin: 0
          }}
        >
          {mail}
        </p>
        <div style={{ marginTop: 10 }}>
          <div style={{ float: "left" }}>
            <p
              style={{
                fontSize: 16,
                padding: 0,
                margin: 0
              }}
            >
              {projectNumber} projects
            </p>
            <p
              style={{
                fontSize: 12,
                color: colors.dark_80,
                padding: 0,
                margin: 0
              }}
            >
              Depuis 2013
            </p>
          </div>
          <a
            href="#"
            className="button"
            style={{
              display: "inline-block",
              fontSize: 10,
              color: colors.red,
              textDecoration: "none",
              textAlign: "center",
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 10,

              paddingRight: 10,
              marginTop: 3,
              marginLeft: 20,
              fontWeight: "bold"
            }}
          >
            SAVOIR PLUS
          </a>
        </div>
      </div>
    </div>
  );
};
