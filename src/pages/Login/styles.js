import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: #eee;
  border-radius: 5px;
  margin-bottom: 60px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PasswordContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const PasswordInput = styled.input.attrs({
  name: 'password',
  type: 'password',
  placeholder: 'Senha',
})`
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
