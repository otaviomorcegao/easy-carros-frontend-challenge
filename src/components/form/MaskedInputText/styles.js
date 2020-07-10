import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;

  :focus {
    border: 1px solid #999;
  }

  ::placeholder {
    color: #ccc;
  }

  &.error {
    border-color: #f00;
  }
`;

export const ErrorMessage = styled.div`
  color: #f00;
`;
