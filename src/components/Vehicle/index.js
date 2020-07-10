import React from 'react';
import { MdClose } from 'react-icons/md';

import { Container, Plate, DeleteButton } from './styles';

const Vehicle = ({ id, plate, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <Container key={id}>
      <Plate>{plate}</Plate>
      <DeleteButton onClick={handleDelete}>
        <MdClose />
      </DeleteButton>
    </Container>
  );
};

export default Vehicle;
