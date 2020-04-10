import React from "react";
import { connect } from "react-redux";
import { countryList } from "../api/countries";
import { getCountryData } from "../actions";

class SelectCountry extends React.Component {
  state = { value: "" };

  componentDidMount() {
    this.props.getCountryData("japan");
  }

  renderCountry = selectCountry => {
    // TODO: remove selectCountry to state cc
    const countries = countryList.map(country => {
      return <option key={country}>{country}</option>;
    });

    if (selectCountry) {
      return (
        <div>
          <h2>Country Figures:</h2>
          <div className="global-figs-flex">
            <div>Confirmed: {this.props.countryData.confirmed}</div>
            <div>Recovered: {this.props.countryData.recovered}</div>
            <div>Deaths: {this.props.countryData.deaths}</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <p>Select a country to view national statistics:</p>
        <select value={this.state.value} id="country-select">
          <option defaultValue>Select a country here</option>
          {countries}
        </select>
      </div>
    );
  };

  render() {
    return <div>{this.renderCountry()}</div>;
  }
}

const mapStateToProps = state => {
  return { state: state.countryData };
};

export default connect(mapStateToProps, { getCountryData })(SelectCountry);

// TODO: Add select input and logic to determine wether country has been selected or not
