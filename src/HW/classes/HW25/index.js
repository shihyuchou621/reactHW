
import React, { Component } from 'react';

import './style.css';

import Modal from './Modal';

const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ut vel, itaque, pariatur porro ad nihil, tempore nostrum enim natus illo aut voluptatibus. Perferendis maxime fuga doloremque magni, quidem error.";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      showIndex: -1,
    };
  }

  handleClick = showIndex => {
    this.setState({ showIndex });
  }

  render() {
    const { showIndex } = this.state;
    return (
      <div className="bg">
        <button
          className="btn btn-primary button"
          onClick={this.handleClick.bind(this, 0)}
        >
          Modal
        </button>
        {showIndex === 0 && <Modal
          name="Modal"
          position="center"
          onClose={this.handleClick.bind(this, -1)}
        >
          {lorem}
        </Modal>}

        <button
          className="btn btn-primary button"
          onClick={this.handleClick.bind(this, 1)}
        >
          top
        </button>
        {showIndex === 1 && <Modal
          name="top"
          position="top"
          onClose={this.handleClick.bind(this, -1)}
        >
          {lorem}
        </Modal>}

        <button
          className="btn btn-primary button"
          onClick={this.handleClick.bind(this, 2)}
        >
          header
        </button>
        {showIndex === 2 && <Modal
          name="header"
          header="Header"
          position="center"
          onClose={this.handleClick.bind(this, -1)}
        >
          {lorem}
        </Modal>}

        <button
          className="btn btn-primary button"
          onClick={this.handleClick.bind(this, 3)}
        >
          top + animation
        </button>
        {showIndex === 3 && <Modal
          name="top + animation"
          isAnimation={true}
          onClose={this.handleClick.bind(this, -1)}
        >
          {lorem}
        </Modal>}
      </div>
    );
  }
}
