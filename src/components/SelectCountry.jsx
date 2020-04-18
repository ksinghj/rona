import React from "react";
import { connect } from "react-redux";
import CountryData from "./CountryData";
import { countryList } from "../api/countries";
import { getCountryData } from "../actions";

class SelectCountry extends React.Component {
  state = { value: null };

  renderCountry = () => {
    const countries = countryList.map(country => {
      return (
        <option value={country} key={country}>
          {country}
        </option>
      );
    });

    return (
      <div>
        <p>Select a country to view national statistics:</p>
        <select
          className="select-country__select-box"
          onChange={this.handleCountrySelect}
          id="country-select">
          <option className="text-font__wide">Select a country</option>
          {countries}
        </select>
      </div>
    );
  };

  handleCountrySelect = e => {
    this.setState({ value: e.target.value }, this.handleCountrySelectSubmit);
  };

  handleCountrySelectSubmit = () => {
    this.props.getCountryData(this.state.value);
  };

  render() {
    return (
      <div className="select-country__component">
        {this.renderCountry()}
        <CountryData country={this.state.value} />
      </div>
    );
  }
}

export default connect(null, { getCountryData })(SelectCountry);
