import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {

  constructor(props){
    super(props);
    this.state={
      txtValue: ''
    }
  }

  onPress = (e) => {
    this.setState({txtValue: e.target.value});
  }

  _handleAddItem = () => {
    let value = this.state.txtValue;
    this.setState({txtValue: ''});
    this.props.add(value);
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this._handleAddItem();
    }
  }

  render() {
    const { txtValue } = this.state;
    const { cancel, show } = this.props;
    const showHideClassName = show ? "modal-display-block" : "modal-display-none";
    return (
      <div className={showHideClassName}>
        <div className="modal-overlay"></div>
        <div className="modal-box">
          <h3>Add Item</h3>
          <div className="">
            <input
              id="ref-input"
              type="text"
              focus="true"
              value={txtValue}
              onChange={this.onPress}
              onKeyPress={this._handleKeyPress} />
          </div>
          <div className="action-box">
            <button className="outline" onClick={()=>cancel()}>Cancel</button>
            <button className={`fill ${txtValue === '' ? 'disabled' : ''}`} disabled={txtValue === ''} onClick={this._handleAddItem}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
