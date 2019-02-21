import React, { Component } from "react";
import "./Item.css";

class Item extends Component {

  render() {
    const { name, deleteItem, index } = this.props;
    return (
      <div className="item-box">
        <span className="title">{name}</span>
        <button onClick={()=>deleteItem(index)}>Delete</button>
      </div>
    );
  }
}

export default Item;
