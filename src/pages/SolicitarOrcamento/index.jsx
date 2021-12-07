import React, { useState, useEffect } from 'react';
import { Container, FormContainer, Group } from './styles';

import { Base } from '../../templates/Base';
import { Form } from '../../components/Form';
import Input from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import Button from '../../components/Button';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

export const SolicitarOrcamento = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (name !== '' && isEmailValid(email) && description !== '') {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [name, email, description]);

  useEffect(() => {
    if (!isEmailValid(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email]);

  return (
    <Container>
      <Base />
      <FormContainer>
        <Form action="https://jctturismo.herokuapp.com/solicitarorcamentoform" method="POST">
          <h3>Solicite o seu orçamento junto com  JCTurismo</h3>
          <Input
            placeholder="Seu nome"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Group>
            <Input
              name="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {
              emailError && <small className="emailError">Digite um email válido</small>
            }
          </Group>

          <Input
            name="phone"
            placeholder="Seu telefone"
            value={phone}
            onChange={(event) => setPhone(formatPhone(event.target.value))}
          />
          <TextArea
            placeholder="Descreva qual o passeio que você gostaria de orçar"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <Button
            type="submit"
            disabled={!formIsValid}
          >Enviar solicitação
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};
