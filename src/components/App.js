import React from "react";
import { getData } from "../actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return <div>App</div>;
  }
}

export default connect(null, { getData })(App);
