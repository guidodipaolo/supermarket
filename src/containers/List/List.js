import React, { Component } from "react";
import "./List.css";

import Item from '../../components/Item/Item';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

import api from '../../services/api';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      items: [
        {name:'Beer'},
        {name:'Cofee'},
        {name:'More beer'},
      ],
    }
  }

  toggleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }

  addItem = (itemName) => {
    let items = this.state.items;
    let item = {name: itemName};
    items.push(item);
    this.setState({items: items});
    this.toggleModal();
  }

  deleteItem = (index) => {
    let items = this.state.items;
    items.splice(index, 1);
    this.setState({items: items});
  }

  render() {
    const { items, isModalOpen } = this.state;
    return (
      <div>
        <Modal show={isModalOpen} add={this.addItem} cancel={this.toggleModal} />
        <div className="list-container">
          <h2>Supermarket List</h2>
          <h5>{items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}</h5>
          <div className="items-container">
            {
              items.length === 0 &&
              <div className="empty-list">
                Your supermarket list is empty.
              </div>
            }
            {
              items.map((el, i) => (
                <Item key={i} index={i} name={el.name} deleteItem={this.deleteItem}/>
              ))
            }
          </div>
          <Button action={this.toggleModal} />
        </div>
      </div>
    );
  }
}

export default List;
