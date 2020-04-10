import React from "react";
import { connect } from "react-redux";
import { getCountryData } from "../actions";

class CountryData extends React.Component {
  render() {
    const { confirmed, recovered, deaths } = this.props.countryData;
    if (!this.props.country) {
      return <div>Select a country</div>;
    }
    return (
      <div>
        <h2>Country Figures:</h2>
        <div className="global-figs-flex">
          <div>Confirmed: {confirmed}</div>
          <div>Recovered: {recovered}</div>
          <div>Deaths: {deaths}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { countryData: state.countryData };
};

export default connect(mapStateToProps, { getCountryData })(CountryData);
