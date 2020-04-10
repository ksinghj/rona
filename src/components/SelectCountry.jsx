import React from "react";

class SelectCountry extends React.Component {
  renderCountry = (selectCountry) => {
    if (selectCountry) {
      return <div>SelectCountry</div>;
    }
    return <div>Select a country to view national statistics</div>;
  };

  render() {
    return <div>{this.renderCountry()}</div>;
  }
}

export default SelectCountry;

// TODO: Add select input and logic to determine wether country has been selected or not
