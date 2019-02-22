import React, { Component } from "react";
import "./List.css";

import Item from '../../components/Item/Item';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import LoadingEmpty from '../../components/LoadingEmpty/LoadingEmpty';

import { getItems, addItem, deleteItem } from '../../actions/list';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      isModalOpen: false,
      items: [],
    }
  }

  componentDidMount(){
    getItems().then(response => {
      setTimeout(function () {
        this.setState({items: response, isFetching: false});
      }.bind(this), 2000);
    });
  }

  toggleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen}, function(){
      document.getElementById('ref-input').focus();
    });
  }

  addItem = (itemName) => {
    addItem(itemName).then(response => {
      this.setState({items: response});
      this.toggleModal();
    });
  }

  deleteItem = (index) => {
    deleteItem(index).then(response => {
      this.setState({items: response});
    });
  }

  render() {
    const { items, isModalOpen, isFetching } = this.state;
    return (
      <div className="layout">
        <Modal show={isModalOpen} add={this.addItem} cancel={this.toggleModal} />
        <div className="list-container">
          <div className="list-header">
            <h2>Supermarket List</h2>
            <h5>{items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}</h5>
          </div>
          <LoadingEmpty count={items.length} isFetching={isFetching} />
          <div className="items-container">
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
