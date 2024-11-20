import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';


function OpenModalOption() {

    const options = [
        { value: 0, label: '0' },
        { value: 'X', label: 'X' },
      //   { value: 'option3', label: 'Option 3' },
      ];
      
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOpenModal = () => {
      setModalIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalIsOpen(false);
    };
  
    const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
    };
  
    return (
      <>
        <button onClick={handleOpenModal}>Open Modal</button>
  
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          appElement={document.getElementById('root') || undefined}
          contentLabel="Select Option Modal"
        >
          <h2 style={{color:'black'}}>Select an Option</h2>
          <Select
          style={{color:'black'}}
            value={selectedOption}
            onChange={handleChange}
            options={options}
          />
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
  
        {selectedOption && <p style={{color:'black'}}>Selected Option: {selectedOption.label}</p>}
      </>
    );
  }
  
  export default OpenModalOption;
