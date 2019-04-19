import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";

import { getData } from "../../actions";

class Friends extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        {this.props.friends.map(friend => (
            <div>{friend.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({friends,fetchingData}) => ({
 friends,
 fetchingData
  
});
export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(Friends)
);
