import React from "react";
import Global from "./Global";
import SelectCountry from "./SelectCountry";
import "../styles/styles.css";
class App extends React.Component {
  render() {
    return (
      <div className="container fonted">
        <h1 className="covid-header">COVID-19 Real time statistics</h1>
        <SelectCountry />
        <Global />
      </div>
    );
  }
}

export default App;
