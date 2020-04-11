import React from "react";
import { getData } from "../actions";
import { connect } from "react-redux";

class Global extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="global-figs__component">
        <div className="global-figs__background text-bold">
          <h2>Global Figures:</h2>
          <div className="global-figs-flex">
            <div>Confirmed: {this.props.globalData.confirmed}</div>
            <div className="text-green">
              Recovered: {this.props.globalData.recovered}
            </div>
            <div className="text-red">
              Deaths: {this.props.globalData.deaths}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { globalData: state.globalData };
};

export default connect(mapStateToProps, { getData })(Global);
