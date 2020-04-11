import React from "react";
import { connect } from "react-redux";
import { getCountryData } from "../actions";

class CountryData extends React.Component {
  render() {
    const { confirmed, recovered, deaths } = this.props.countryData;
    if (!this.props.country) {
      return <div className="select-country__choose">Select a country</div>;
    }
    // TODO: Add confirmed, recovered, deaths as a component takes figs as props - with card-like styles
    // TODO: set country figures </h2> to: ${countryName} figures
    return (
      <div>
        <h2>
          <span className="text-blue">Country</span> Figures:
        </h2>
        <div className="global-figs-flex">
          <div>Confirmed: {confirmed}</div>
          <div className="text-green">Recovered: {recovered}</div>
          <div className="text-red">Deaths: {deaths}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { countryData: state.countryData };
};

export default connect(mapStateToProps, { getCountryData })(CountryData);
