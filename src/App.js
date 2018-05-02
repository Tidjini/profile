import React, { Component } from "react";
import "./App.css";

import { Header } from "./components";
import Container from "./components/personel/Container";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }
}

export default App;
