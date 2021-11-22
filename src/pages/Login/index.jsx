import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { Form } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  // continuar deixando os formulários validos para iniciar antes de logar

  useEffect(() => {
    if (username !== '' && password !== '') {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [username, password]);

  return (
    <Container>
      <Form action="https://jctturismo.herokuapp.com/login">
        <h1>Login em JCTturismo</h1>
        <Input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Usuário"
          name="username"
        />
        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Senha"
          type="password"
          name="password"
        />
        <Button
          type="submit"
          disable={!isFormValid && true}
        >
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {

};
