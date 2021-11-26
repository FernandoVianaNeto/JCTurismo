import React, { useState, useEffect } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete, AiFillBook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  Container, DepoimentoContainer, Footer, TestimonysContainer, ButtonContainer, Content, ButtonContainerHeader, FormContainer, Group,
} from './styles';

import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';
// import Loader from '../../../components/Loader';
import { Form } from '../../../components/Form';
import Input from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';
import Button from '../../../components/Button';

import isEmailValid from '../../../utils/isEmailValid';

export const TestimonyAdminPage = () => {
  const [depoimentos, setDepoimentos] = useState([]);
  const [registerTestimonyActive, setRegisterTestimonyActive] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [email, setEmail] = useState('');
  const [testimony, setTestimony] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch('https://jctturismo.herokuapp.com/depoimentos')
      .then(async (response) => {
        const depoimentosData = await response.json();
        setDepoimentos(depoimentosData);
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
          {
            registerTestimonyActive ? (
              <>
                <ButtonContainerHeader>
                  <h1>Cadastrar um novo depoimento</h1>
                  <button type="button" onClick={() => setRegisterTestimonyActive(false)}>Voltar</button>
                </ButtonContainerHeader>
                <FormContainer>
                  <Form action="https://jctturismo.herokuapp.com/criardepoimento" method="POST">
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
              </>

            ) : (
              <>
                <ButtonContainerHeader>
                  <h1>Depoimentos</h1>
                  <button type="button" onClick={() => setRegisterTestimonyActive(true)}>Adicionar um novo depoimento <AiFillBook /></button>
                </ButtonContainerHeader>
                <TestimonysContainer>
                  {
                    depoimentos.map((depoimento) => (
                      <DepoimentoContainer key={depoimento.key}>
                        <h3>{depoimento.title}</h3>
                        <i>{depoimento.testimony}</i>
                        <Footer>
                          <small className="name">{depoimento.name}</small>
                          <small>{depoimento.date}</small>
                          <ButtonContainer>
                            <Link to={`admin/editardepoimento/${depoimento.id}`}><FiEdit2 /></Link>
                            <form action={`https://jctturismo.herokuapp.com/deletardepoimento/${depoimento.id}`} method="POST">
                              <button type="submit" aria-label="deletar depoimento"><AiOutlineDelete /></button>
                            </form>
                          </ButtonContainer>
                        </Footer>
                      </DepoimentoContainer>
                    ))
                  }
                </TestimonysContainer>
              </>
            )
          }

        </Content>
      </BackOfficeTemplate>
    </Container>
  );
};
