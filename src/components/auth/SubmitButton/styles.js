import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputSubmit = styled.input.attrs(({ value }) => ({
  name: 'submit',
  type: 'submit',
  value,
}))`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #666;
  padding: 20px 15px;
  border-radius: 5px;
  border: none;
`;
