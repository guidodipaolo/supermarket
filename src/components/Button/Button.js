import React, { Component } from "react";
import "./Button.css";

class Button extends Component {

  render() {
    const { action } = this.props;
    return (
      <div className="button-container">
        <button onClick={()=>action()}>Add item</button>
      </div>
    );
  }
}

export default Button;
