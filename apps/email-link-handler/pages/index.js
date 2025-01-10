import React, { useState } from 'react';
import Modal from 'react-modal';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Modal Content</h2>
        <p>This is a modal</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
