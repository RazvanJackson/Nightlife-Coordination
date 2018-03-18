import React from "react";
import { connect } from "react-redux";

import Api from "../Api/Api";

class Search extends React.Component {
  getData() {
    this.props.dispatch({ type: "DATA_LOADING" });

    Api.get("/").then(function(data) {
      console.log(data);
    });

    Api.post("/get_data", { location: this.refs.location.value })
      .then(response => {
        if (response.data.length == 0)
          this.props.dispatch({ type: "DATA_NOT_FOUND" });
        this.props.dispatch({ type: "DATA_DONE", payload: response.data });
      })
      .catch(error => {
        this.props.dispatch({ type: "DATA_NOT_FOUND" });
      });
  }

  render() {
    return (
      <div id="Search">
        <input className="input" type="text" ref="location" />
        <button className="submit-btn" onClick={this.getData.bind(this)}>
          GO
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Search);
