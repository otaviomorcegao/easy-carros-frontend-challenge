import React from 'react';

import { Container, InputSubmit } from './styles';

const SubmitButton = (props) => {
  return (
    <Container>
      <InputSubmit {...props} />
    </Container>
  );
};

export default SubmitButton;
