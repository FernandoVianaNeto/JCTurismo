import React, { useState, useEffect } from 'react';

import {
  Container, ModalContainer, SmallGroup, CheckGroup,
} from './styles';

import { Form } from '../../components/Form';
import { Select } from '../../components/Select';
import Input from '../../components/Input';
import Button from '../../components/Button';

import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';
import { Base } from '../../templates/Base';

export const ClienteInfo = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    if (!emailError && phone.trim() !== '' && email.trim() !== '' && checkboxValue && selectValue !== '' && date !== '') {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [email, phone, checkboxValue, emailError]);

  function handleFormatPhone(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleEmailValidation(event) {
    setEmail(event.target.value);

    if (!isEmailValid(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  return (
    <Container>
      <Base />
      <ModalContainer>
        <Form action="http://localhost:3001/saveclientinfo" method="POST">
          <h1>Informações do cliente</h1>
          <SmallGroup>
            <small>Nome: </small>
            <Input
              value={name}
              placeholder="Digite o seu nome"
              onChange={(event) => setName(event.target.value)}
              name="name"
            />
          </SmallGroup>
          <SmallGroup>
            <small>E-mail: </small>
            <Input
              value={email}
              placeholder="Digite o seu e-mail"
              onChange={handleEmailValidation}
              name="email"
            />
            {
              emailError && <small className="emailError">Digite um email válido</small>
            }
          </SmallGroup>
          <SmallGroup>
            <small>Telefone: </small>
            <Input
              value={phone}
              onChange={handleFormatPhone}
              placeholder="(XX) 9XXXX-XXXX"
              name="phone"
            />
          </SmallGroup>
          <SmallGroup>
            <small>Como você conheceu a JCTurismo? </small>
            <Select
              value={selectValue}
              onChange={(event) => setSelectValue(event.target.value)}
              name="howYouMeet"
            >
              <option value="">Selecione uma opção</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Indicação de amigos">Indicação de amigos</option>
            </Select>
          </SmallGroup>
          <SmallGroup>
            <small>Data do passeio: </small>
            <Input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              name="date"
            />
          </SmallGroup>
          <CheckGroup>
            <input
              type="checkbox"
              onChange={() => setCheckboxValue(true)}
            />
            <small>Eu aceito receber comunicações da JCTurismo</small>
          </CheckGroup>
          <Button
            disabled={!formIsValid && true}
            type="submit"
          >
            Enviar informações
          </Button>
        </Form>
      </ModalContainer>
    </Container>
  );
};

ClienteInfo.propTypes = {

};
