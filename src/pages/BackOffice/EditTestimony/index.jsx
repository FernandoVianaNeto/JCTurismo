/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import {
  Container, Content, Group, FormContainer,
} from './styles';

import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';
import { Form } from '../../../components/Form';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';

import isEmailValid from '../../../utils/isEmailValid';

export const EditTestimony = () => {
  const [email, setEmail] = useState('');
  const [testimony, setTestimony] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [formIsValid, setFormIsValid] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jctturismo.herokuapp.com/depoimento/${id}`)
      .then(async (response) => {
        const depoimento = await response.json();
        setEmail(depoimento.email);
        setTestimony(depoimento.testimony);
        setDate(depoimento.date);
        setName(depoimento.name);
        setTitle(depoimento.title);
      });
  }, []);

  useEffect(() => {
    if (isEmailValid(email) && testimony.trim() !== '' && name.trim() !== '' && title.trim() !== '' && date.trim() !== '') {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [email, testimony, date, name, title]);

  return (
    <Container>
      <BackOfficeTemplate depoimentos>
        <Content>
          <h3>Editar depoimento: {title}</h3>

          <FormContainer>
            <Form action={`https://jctturismo.herokuapp.com/editardepoimento/${id}`} method="POST">
              <Input
                type="text"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Título"
              />
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Nome"
              />
              <Group>
                <Input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="E-mail cadastral"
                />
                {
                  !isEmailValid(email) && <small>Digite um e-mail válido</small>
                }
              </Group>
              <TextArea
                type="text"
                name="testimony"
                value={testimony}
                onChange={(event) => setTestimony(event.target.value)}
                placeholder="Depoimento"
              />
              <Input
                type="date"
                name="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
              <Button type="submit" disabled={!formIsValid}>Cadastrar</Button>
            </Form>
          </FormContainer>
        </Content>
      </BackOfficeTemplate>

    </Container>
  );
};
