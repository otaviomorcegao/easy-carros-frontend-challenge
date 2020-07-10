import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputSubmit = styled.button.attrs({
  name: 'submit',
  type: 'submit',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-size: 30px;
  color: #fff;
  background-color: #666;
  padding: 0 15px;
  border-radius: 5px;
  border: none;
`;
