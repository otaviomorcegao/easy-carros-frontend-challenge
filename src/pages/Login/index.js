import React, { useState, useEffect } from 'react';

import { auth } from '../../services/auth';

import Input from '../../components/auth/Input';
import SubmitButton from '../../components/auth/SubmitButton';

import { setToken, getToken, isAuthenticated } from '../../auth';

import logo from '../../assets/logo.png';

import {
  Container,
  LoginContainer,
  LogoContainer,
  FormContainer,
} from './styles';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const { history } = props;
    isAuthenticated() && history.push('/');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { history } = props;

    console.log(email, password);

    const res = await auth({
      email,
      password,
    });

    if (res.data) {
      const { token } = res.data.data;
      setToken(token);

      history.push('/');
    }
  };

  return (
    <Container>
      <LoginContainer>
        <LogoContainer>
          <img src={logo} />
        </LogoContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton value="ENTRAR" />
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
