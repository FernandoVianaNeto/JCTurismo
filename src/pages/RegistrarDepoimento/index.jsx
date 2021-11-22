import React, { useState, useEffect } from 'react';

import { Container, FormContainer } from './styles';

import { Base } from '../../templates/Base';
import { Form } from '../../components/Form';
import { TextArea } from '../../components/TextArea';
import Button from '../../components/Button';
import Input from '../../components/Input';

import isEmailValid from '../../utils/isEmailValid';

export const RegistrarDepoimento = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [testimony, setTestimony] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (name.trim() !== '' && date.trim !== '' && title.trim() !== '' && testimony.trim() !== '' && emailIsValid === true) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [emailIsValid, title, date, name, testimony]);

  function handleValidateEmail(event) {
    setEmail(event.target.value);

    if (!isEmailValid(email)) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  }

  return (
    <Container>
      <Base />
      <FormContainer>
        <Form action="https://jctturismo.herokuapp.com/criardepoimento" method="POST">
          <h3>Registre o seu depoimento</h3>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            placeholder="Qual o seu nome?"
            type="text"
          />
          <div>
            <Input
              value={email}
              onChange={handleValidateEmail}
              name="email"
              placeholder="Qual o seu e-mail?"
              type="text"
            />
            {!emailIsValid && <small>Digite um e-mail válido</small>}
          </div>
          <div>
            <small>Quando realizou o seu passeio?</small>
            <Input
              value={date}
              onChange={(event) => setDate(event.target.value)}
              name="date"
              type="date"
            />
          </div>
          <Input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            name="title"
            placeholder="Título do depoimento"
          />
          <TextArea
            value={testimony}
            onChange={(event) => setTestimony(event.target.value)}
            placeholder="O que você achou do seu passeio?"
            name="testimony"
            cols="30"
            rows="10"
          />
          <Button
            type="submit"
            disabled={!formIsValid && true}
          >
            Enviar
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

RegistrarDepoimento.propTypes = {

};
