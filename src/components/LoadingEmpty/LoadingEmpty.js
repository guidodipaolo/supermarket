import React, { Component } from "react";
import "./LoadingEmpty.css";

import spinner from '../../assets/spinner.svg';

class LoadingEmpty extends Component {

  render() {
    const { count, isFetching } = this.props;
    return (
      <div className="loading-empty-container">
        {
          count === 0 && !isFetching &&
          <div className="empty-list">
            Your supermarket list is empty.
          </div>
        }
        {
          isFetching &&
          <img src={spinner} className="spinner" alt="Loading..." />
        }
      </div>
    );
  }
}

export default LoadingEmpty;
