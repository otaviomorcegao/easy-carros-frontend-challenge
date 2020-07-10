import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const TopNavSection = styled.div`
  text-align: right;
  padding: 10px 30px 0;
`;

export const LogoutButton = styled.button`
  border: none;
  cursor: pointer;
  color: #f00;
`;

export const FormSection = styled.div`
  border-bottom: 1px solid #666;
`;

export const Title = styled.div`
  font-weight: bold;
  padding: 0 30px 15px;
`;

export const InlineForm = styled.div`
  display: grid;
  grid-template-columns: auto 25%;
  column-gap: 20px;
  padding: 10px 30px;
`;

export const Input = styled.div``;

export const VehiclesSection = styled.div`
  flex: 1;
  padding: 20px 0;
  overflow: hidden;
`;

export const VehiclesContainer = styled.div`
  height: 100%;
  padding: 0 10px 30px;
  overflow: auto;
`;
