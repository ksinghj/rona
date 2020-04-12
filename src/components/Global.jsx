import React from "react";
import { getData } from "../actions";
import { connect } from "react-redux";
import Figures from "../components/Figures";
class Global extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { globalData } = this.props;
    return (
      <div className="global-figs__component">
        <div className="global-figs__background text-bold">
          <h2>Global Figures:</h2>
          <Figures
            confirmed={globalData.confirmed}
            recovered={globalData.recovered}
            deaths={globalData.deaths}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { globalData: state.globalData };
};

export default connect(mapStateToProps, { getData })(Global);
