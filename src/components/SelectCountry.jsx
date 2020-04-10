import React from "react";
import { countryList } from "../api/countries";

class SelectCountry extends React.Component {
  renderCountry = (selectCountry) => {
    const countries = countryList.map((country) => {
      console.log(country);
      return <option key={country}>{country}</option>;
    });
    if (selectCountry) {
      // return <div>{countrySelected}:{countryStatistics}</div>; // TODO: <
      return null;
    }
    return (
      <div>
        <p>Select a country to view national statistics:</p>
        <select id="country-select">
          <option>Select a country here</option>
          {countries}
        </select>
      </div>
    );
  };

  render() {
    return <div>{this.renderCountry()}</div>;
  }
}

export default SelectCountry;

// TODO: Add select input and logic to determine wether country has been selected or not
