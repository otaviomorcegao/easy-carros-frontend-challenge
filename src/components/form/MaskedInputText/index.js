import React from 'react';
import InputMask from 'react-input-mask';

import { Container, Input, ErrorMessage } from './styles';

const MaskedInputText = ({ field, form, chidlren, ...props }) => {
  console.log(form);
  return (
    <Container>
      <InputMask {...props} {...field} maskChar=" ">
        {(inputProps) => {
          return (
            <Input
              {...inputProps}
              className={
                form.errors[field.name] && form.touched[field.name]
                  ? 'error'
                  : null
              }
            />
          );
        }}
      </InputMask>
      <ErrorMessage>
        {form.errors[field.name] && form.touched[field.name]
          ? form.errors[field.name]
          : null}
      </ErrorMessage>
    </Container>
  );
};

export default MaskedInputText;
