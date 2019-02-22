import React, { Component } from "react";
import "./Item.css";

import trash from '../../assets/trash.svg';

class Item extends Component {

  render() {
    const { name, deleteItem, index } = this.props;
    return (
      <div className="item-box">
        <span className="title">{name}</span>
        <button onClick={()=>deleteItem(index)}>
          <img src={trash} alt={'Delete' + name} />
        </button>
      </div>
    );
  }
}

export default Item;
