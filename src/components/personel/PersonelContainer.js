import React, { Component } from "react";
import windowSize from "react-window-size";

import Informations from "./Informations";
import Social from "./Social";

import "../css/container.css";
const cover = require("../../assets/images/cover.jpg");
const user = require("../../assets/images/user.png");
const colors = {
  dark: "#121215",
  dark_CC: "#121215CC",
  dark_80: "#12121580",

  red: "#E71D36",
  platinum: "#E5E7E6",
  blue: "#0094C6",
  isabelline: "#FEFEFE",
  blackOlive: "#3D3D3F"
};
class PersonelContainer extends Component {
  render() {
    const { children } = this.props;

    const width = this.props.windowWidth / 4.45;
    const height = this.props.windowHeight;
    return (
      <div
        style={{
          width,
          height: height - 40,
          position: "relative",
          float: "left"
        }}
        className="container"
      >
        <img
          style={{ backgroundColor: "#ccc", height: 280, width }}
          src={cover}
        />
        <div
          className="grad"
          style={{
            position: "absolute",
            top: 100,
            width,
            height: 180
          }}
        />
        <div
          style={{
            width: width - 20,
            margin: "auto"
          }}
        >
          <Informations
            userImage={user}
            userName="Tidjini Messaoudi"
            mail="tidjini.messaoudi@gmail.com"
            projectNumber="05"
          />
          <p
            style={{ fontSize: 14, color: colors.dark_CC, fontStyle: "italic" }}
          >
            "Everybody wants to be famous but no body want to do the work,
            #initidj"
          </p>
          <p style={{ fontSize: 12, color: colors.dark_80 }}>
            Oran, 3100 / DZ{" "}
          </p>
          <p style={{ fontSize: 12, color: colors.dark_80 }}>
            <span
              style={{
                fontSize: 12,
                color: colors.dark_CC,
                fontWeight: "bold",
                fontStyle: "italic"
              }}
            >
              Messaoudi Tidjini{" "}
            </span>
            Many thanks, it works. One addition is that you should set style
            ProTip! Updating your profile with your name, location, and a
            profile picture helps other GitHub users get to know you. Many
            thanks, it works. One addition is that you should set style Many
            Seeing something unexpected? Take a look at the GitHub profile
            guide.
          </p>

          <Social />
        </div>
      </div>
    );
  }
}

export default windowSize(PersonelContainer);
