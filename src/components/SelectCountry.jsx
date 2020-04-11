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
          className="select-country__select-box text-blue"
          onChange={this.handleCountrySelect}
          id="country-select">
          <option>Select a country here</option>
          {countries}
        </select>
      </div>
    );
  };

  handleCountrySelect = e => {
    this.setState({ value: e.target.value }, this.handleSubmit);
  };

  handleSubmit = () => {
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
