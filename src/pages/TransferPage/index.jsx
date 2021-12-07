import React, { useState, useEffect } from 'react';
import {
  Container, FormContainer, Group, BigGroup,
} from './styles';

import { Base } from '../../templates/Base';
import { Form } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

export const TransferPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [departureLocal, setDepartureLocal] = useState('');
  const [arriveLocal, setArriveLocal] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const [passengers, setPassengers] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (name !== '' && isEmailValid(email) && departureLocal !== '' && arriveLocal !== '' && date !== '' && time !== '' && phone !== '' && passengers !== 0) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [name, email, departureLocal, date, time, passengers]);

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
        <Form action="https://jctturismo.herokuapp.com/transferform" method="POST">
          <h3>Solicite o seu transfer aqui na JCTurismo</h3>
          <BigGroup>
            <Group>
              <Input
                type="text"
                placeholder="Seu nome"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Group>
                <Input
                  type="text"
                  placeholder="Seu e-mail"
                  value={email}
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                {
              emailError && <small className="emailError">Digite um e-mail válido</small>
            }
              </Group>
              <Input
                type="text"
                placeholder="Telefone para contato"
                value={phone}
                name="phone"
                onChange={(event) => setPhone(formatPhone(event.target.value))}
              />
              <Input
                type="text"
                placeholder="Local de partida"
                value={departureLocal}
                name="departureLocal"
                onChange={(event) => setDepartureLocal(event.target.value)}
              />
              <Input
                type="text"
                placeholder="Local de destino"
                value={arriveLocal}
                name="arriveLocal"
                onChange={(event) => setArriveLocal(event.target.value)}
              />
            </Group>
            <Group>
              <Group>
                <small>Dia do transfer</small>
                <Input
                  type="date"
                  name="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </Group>
              <Group>
                <small>Hora do transfer</small>
                <Input
                  type="time"
                  name="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />
              </Group>
              <Group>
                <small>Quantidade de passageiros</small>
                <Input
                  type="number"
                  value={passengers}
                  name="passengers"
                  onChange={(event) => setPassengers(event.target.value)}
                />
              </Group>
            </Group>
          </BigGroup>
          <Button
            type="submit"
            disabled={!formIsValid}
          >Enviar informações
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

TransferPage.propTypes = {

};
