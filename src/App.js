import React, { Component } from "react";
import "./App.css";

import { Header } from "./components";
import PersonelContainer from "./components/personel/PersonelContainer";

const colors = {
  dark: "#121215",
  dark_EE: "#121215EE",
  red: "#E71D36",
  platinum: "#E5E7E6",
  blue: "#0094C6",
  isabelline: "#FEFEFE",
  blackOlive: "#3D3D3F"
};
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <PersonelContainer />
          <div
            style={{
              width: 1000,
              height: 500,
              backgroundColor: colors.dark_EE,
              display: "inline-block"
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
