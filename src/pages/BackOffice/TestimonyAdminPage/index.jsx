import React, { useState, useEffect, useMemo } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete, AiFillBook } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import {
  Container, DepoimentoContainer, Footer, TestimonysContainer, ButtonContainer, Content, ButtonContainerHeader, FormContainer, Group, HeaderGroup,
} from './styles';

import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';
import Loader from '../../../components/Loader';
import { Form } from '../../../components/Form';
import Input from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';
import Button from '../../../components/Button';

import isEmailValid from '../../../utils/isEmailValid';

export const TestimonyAdminPage = () => {
  const [depoimentos, setDepoimentos] = useState([]);
  const [registerTestimonyActive, setRegisterTestimonyActive] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [testimony, setTestimony] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { token } = useParams();

  const filteredTestimony = useMemo(() => depoimentos.filter((depoimento) => (
    depoimento.title.toLowerCase().includes(searchTerm.toLowerCase())
  )), [depoimentos, searchTerm]);

  useEffect(() => {
    fetch('https://jctturismo.herokuapp.com/depoimentos')
      .then(async (response) => {
        const depoimentosData = await response.json();
        setDepoimentos(depoimentosData);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isEmailValid(email) && testimony.trim() !== '' && name.trim() !== '' && title.trim() !== '' && date.trim() !== '') {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [email, testimony, date, name, title]);

  function handleDeleteTestimony({ id, titleTestimony }) {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Tem certeza que você deseja deletar o depoimento '${titleTestimony}'`)) {
      fetch(`https://jctturismo.herokuapp.com/deletardepoimento/${id}/${token}`, { method: 'POST' })
        .then(() => {
          document.location.reload(true);
        });
    }
  }

  return (
    <Container>
      {isLoading && <Loader isLoading={isLoading} />}
      <BackOfficeTemplate depoimentos token={token}>
        <Content>
          {
            registerTestimonyActive ? (
              <>
                <ButtonContainerHeader>
                  <h1>Cadastrar um novo depoimento</h1>
                  <button type="button" onClick={() => setRegisterTestimonyActive(false)}>Voltar</button>
                </ButtonContainerHeader>
                <FormContainer>
                  <Form action={`https://jctturismo.herokuapp.com/criardepoimento/${token}`} method="POST">
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
                  <HeaderGroup>
                    <input
                      placeholder="Pesquise um depoimento"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <button type="button" onClick={() => setRegisterTestimonyActive(true)}>Adicionar um novo depoimento <AiFillBook /></button>
                  </HeaderGroup>
                </ButtonContainerHeader>
                <TestimonysContainer>
                  {
                    filteredTestimony.map((depoimento) => (
                      <DepoimentoContainer key={depoimento.key}>
                        <h3>{depoimento.title}</h3>
                        <i>{depoimento.testimony}</i>
                        <Footer>
                          <small className="name">{depoimento.name}</small>
                          <small>{depoimento.date}</small>
                          <ButtonContainer>
                            <Link to={`/admin/depoimentos/editardepoimento/${depoimento.id}/auth=${token}`}><FiEdit2 /></Link>
                            <button type="button" onClick={() => handleDeleteTestimony({ id: depoimento.id, titleTestimony: depoimento.title })} aria-label="deletar depoimento"><AiOutlineDelete /></button>
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
