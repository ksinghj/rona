import React from "react";
import Global from "./Global";
import SelectCountry from "./SelectCountry";
import "../styles/styles.css";
import Logo from "../img/logo.png";

class App extends React.Component {
  render() {
    return (
      <div className="container fonted">
        <div className="nav">
          <h1 className="covid-header">COVID-19 Case Tracker</h1>
          <img src={Logo} alt="biohazaard symbol" />
        </div>
        <div className="info text-align-left">
          Coronavirus disease 2019 (COVID-19) is an infectious disease caused by
          severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The
          disease was first identified in December 2019 in Wuhan, the capital of
          China's Hubei province, and has since spread globally, resulting in
          the ongoing 2019–20 coronavirus pandemic.
        </div>
        <Global />
        <div className="info text-align-left">
          Above is the number of cases worldwide, for national cases select a
          country from the dropdown below.
        </div>
        <SelectCountry />
      </div>
    );
  }
}

export default App;
