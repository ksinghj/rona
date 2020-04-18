import React from "react";
import Media from "react-media";
import Global from "./Global";
import SelectCountry from "./SelectCountry";
import "../styles/styles.css";
import Logo from "../img/logo.png";

class App extends React.Component {
  render() {
    return (
      <div className="container fonted">
        <Media query={{ maxWidth: 1400 }}>
          {matches =>
            matches ? (
              // mobile and tablet
              <React.Fragment>
                <div className="nav">
                  <h1 className="covid-header">COVID-19 Case Tracker</h1>
                  <img src={Logo} alt="biohazaard symbol" />
                </div>
                <div className="text-type__info text-align-left">
                  Coronavirus disease 2019 (COVID-19) is an infectious disease
                  caused by severe acute respiratory syndrome coronavirus 2
                  (SARS-CoV-2). The disease was first identified in December
                  2019 in Wuhan, the capital of China's Hubei province, and has
                  since spread globally, resulting in the ongoing 2019–20
                  coronavirus pandemic.
                </div>
                <Global />
                <div className="text-type__info text-align-left hide-lg-up">
                  Above is the number of cases worldwide, for national cases
                  select a country from the dropdown below.
                </div>
                <SelectCountry />
              </React.Fragment>
            ) : (
              // lg and up
              <React.Fragment>
                <div className="nav">
                  <h1 className="covid-header">COVID-19 Case Tracker</h1>
                  <img src={Logo} alt="biohazaard symbol" />
                </div>
                <div className="text-type__info text-align-left">
                  Coronavirus disease 2019 (COVID-19) is an infectious disease
                  caused by severe acute respiratory syndrome coronavirus 2
                  (SARS-CoV-2). The disease was first identified in December
                  2019 in Wuhan, the capital of China's Hubei province, and has
                  since spread globally, resulting in the ongoing 2019–20
                  coronavirus pandemic.
                </div>
                <div className="cases-lg-flex">
                  <Global />
                  <SelectCountry />
                </div>
              </React.Fragment>
            )
          }
        </Media>
      </div>
    );
  }
}

export default App;
