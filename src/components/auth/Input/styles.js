import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputField = styled.input.attrs(({ name, type, placeholder }) => ({
  name,
  type,
  placeholder,
}))`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  ::placeholder {
    color: #ddd;
  }
  :hover {
    border-color: #666;
  }
`;
