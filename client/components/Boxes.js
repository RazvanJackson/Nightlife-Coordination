import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Api from "../Api/Api";

class Boxes extends React.Component {
  Going(name) {
    Api.post("/going", { name: name })
      .then(function(response) {
        console.log(response);
        if (response.data.error == true) {
          window.location.href = "http://localhost:8081/auth/twitter";
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  displayBoxes() {
    if (this.props.data.status == "loading") {
      return <h3>Loading</h3>;
    } else if (
      this.props.data.status == "done" &&
      this.props.data.boxes.length > 0
    ) {
      return this.props.data.boxes.map((value, index) => {
        return (
          <div key={index} className="box">
            <img src={value.image_url} className="image" />
            <h2 className="business-name">{value.name}</h2>
            <button
              className="going-btn"
              onClick={() => this.Going(value.name)}
            >
              {value.going.length} GOING
            </button>
          </div>
        );
      });
    } else if (
      this.props.data.status == "done" &&
      this.props.data.boxes.length == 0
    ) {
      return <div>Didn't find any place</div>;
    }
  }

  render() {
    return <div id="Boxes">{this.displayBoxes()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default withRouter(connect(mapStateToProps)(Boxes));
