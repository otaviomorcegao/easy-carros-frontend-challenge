import React from 'react';

import { Container, InputField } from './styles';

const Input = (props) => {
  return (
    <Container>
      <InputField {...props} />
    </Container>
  );
};

export default Input;
