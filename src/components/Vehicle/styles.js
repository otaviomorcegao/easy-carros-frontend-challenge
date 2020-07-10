import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 15px 20px;

  :last-child {
    border-bottom: 1px solid #ccc;
  }
`;

export const Plate = styled.div``;

export const DeleteButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #f00;
  border: 2px solid #f00;
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;
