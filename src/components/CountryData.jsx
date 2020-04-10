import React from "react";
import { connect } from "react-redux";
import { getCountryData } from "../actions";

class CountryData extends React.Component {
  render() {
    if (this.props) {
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
    return <div>Select a country</div>;
  }
}

const mapStateToProps = state => {
  return { countryData: state.countryData };
};

export default connect(mapStateToProps, { getCountryData })(CountryData);
