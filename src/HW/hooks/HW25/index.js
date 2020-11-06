import React, { useState } from 'react';

import './style.css';

import Modal from './Modal';

const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ut vel, itaque, pariatur porro ad nihil, tempore nostrum enim natus illo aut voluptatibus. Perferendis maxime fuga doloremque magni, quidem error.";

export default function Index() {
  const [showIndex, setShowIndex] = useState(-1);

  // const handleClick = showIndex => {
  //   setShowIndex(showIndex);
  // };
  console.log(this);

  return (
    <div className="bg">
      <button
        className="btn btn-primary button"
        onClick={setShowIndex.bind(this, 0)}
      >
          Modal
      </button>
      {showIndex === 0 && <Modal
        name="Modal"
        position="center"
        onClose={setShowIndex.bind(this, -1)}
      >
        {lorem}
      </Modal>}

      <button
        className="btn btn-primary button"
        onClick={setShowIndex.bind(this, 1)}
      >
          top
      </button>
      {showIndex === 1 && <Modal
        name="top"
        position="top"
        onClose={setShowIndex.bind(this, -1)}
      >
        {lorem}
      </Modal>}

      <button
        className="btn btn-primary button"
        onClick={setShowIndex.bind(this, 2)}
      >
          header
      </button>
      {showIndex === 2 && <Modal
        name="header"
        header="Header"
        position="center"
        onClose={setShowIndex.bind(this, -1)}
      >
        {lorem}
      </Modal>}

      <button
        className="btn btn-primary button"
        onClick={setShowIndex.bind(this, 3)}
      >
          top + animation
      </button>
      {showIndex === 3 && <Modal
        name="top + animation"
        isAnimation={true}
        onClose={setShowIndex.bind(this, -1)}
      >
        {lorem}
      </Modal>}
    </div>
  );
}
