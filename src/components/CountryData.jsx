import React from "react";
import { connect } from "react-redux";
import { getCountryData } from "../actions";
import Figures from "./Figures";

class CountryData extends React.Component {
  render() {
    const { confirmed, recovered, deaths } = this.props.countryData;
    const { country } = this.props;
    if (!country) {
      return <div className="select-country__choose">Select a country</div>;
    }
    return (
      <div>
        <h2>
          <span className="text-blue">{country}</span> Figures:
        </h2>
        <Figures confirmed={confirmed} recovered={recovered} deaths={deaths} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { countryData: state.countryData };
};

export default connect(mapStateToProps, { getCountryData })(CountryData);

// TODO: make span text go to select a country when clicked
// or disable select option after click
