import React, { useState, useEffect } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete, AiOutlineUserAdd } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import {
  Container, ClientesCard, ClientesContainer, ButtonContainer, Header, FormContainer,
} from './styles';

import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';
import Loader from '../../../components/Loader';
import { Form } from '../../../components/Form';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Select } from '../../../components/Select';

import isEmailValid from '../../../utils/isEmailValid';
import formatPhone from '../../../utils/formatPhone';

export const ClientesAdminPage = () => {
  const [clientes, setClientes] = useState([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [registerClientActive, setRegisterClientActive] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jctturismo.herokuapp.com/clientes')
      .then(async (response) => {
        const clientesData = await response.json();
        setClientes(clientesData);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isEmailValid(email)) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [email]);

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
      {isLoading && <Loader isLoading={isLoading} />}
      <BackOfficeTemplate clientes>
        <ClientesContainer>
          {
            registerClientActive
              ? (
                <>
                  <Header>
                    <h1>Cadastrar cliente</h1>
                    <button type="button" onClick={() => setRegisterClientActive(false)}>Voltar</button>
                  </Header>
                  <FormContainer>
                    <Form action="https://jctturismo.herokuapp.com/createclient" method="POST">
                      <Input
                        name="name"
                        placeholder="Nome"
                      />
                      <div>
                        <Input
                          name="email"
                          value={email}
                          placeholder="E-mail*"
                          onChange={handleEmailValidation}
                        />
                        {
                          emailError && <small>Email não é válido</small>
                        }
                      </div>
                      <Input
                        value={phone}
                        onChange={(event) => setPhone(formatPhone(event.target.value))}
                        name="phone"
                        placeholder="Telefone"
                      />
                      <Select
                        name="know"
                        placeholder="Como conheceu a JCTurismo"
                      >
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="google">Google</option>
                        <option value="indicação">Indicação</option>
                        <option value="outros">Outros</option>
                      </Select>
                      <Button type="submit" disabled={!formIsValid}>
                        Enviar
                      </Button>
                    </Form>
                  </FormContainer>

                </>
              )
              : (
                <>
                  <Header>
                    <h1>Clientes Cadastrados</h1>
                    <button type="button" onClick={() => setRegisterClientActive(true)}>Cadastrar novo cliente <AiOutlineUserAdd /></button>
                  </Header>
                  {
                    clientes.map((cliente) => (
                      <ClientesCard key={cliente.id}>
                        <tbody>
                          <tr>
                            <th className="name">Nome</th>
                            <th className="email">E-mail</th>
                            <th className="phone">Telefone</th>
                            <th className="know">Como conheceu</th>
                            <th className="op">Opções</th>
                          </tr>
                          <tr>
                            <td className="name">{cliente.name}</td>
                            <td className="email">{cliente.email}</td>
                            <td className="phone">{cliente.phone}</td>
                            <td className="know">{cliente.know}</td>
                            <td>
                              <ButtonContainer>
                                <Link to={`/admin/clientes/editarcliente/${cliente.id}`} aria-label="editar"><FiEdit2 /></Link>

                                <form action={`https://jctturismo.herokuapp.com/deleteclient/${cliente.id}`} method="POST">
                                  <button type="submit" aria-label="deletar"><AiOutlineDelete /></button>
                                </form>

                              </ButtonContainer>
                            </td>
                          </tr>
                        </tbody>
                      </ClientesCard>
                    ))
                  }
                </>
              )
          }

        </ClientesContainer>

      </BackOfficeTemplate>
    </Container>
  );
};
