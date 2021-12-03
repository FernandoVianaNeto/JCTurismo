import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, FormContainer } from './styles';

import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';

import { Form } from '../../../components/Form';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Loader from '../../../components/Loader';
import { Select } from '../../../components/Select';

export const EditClient = () => {
  const [cliente, setCliente] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const { token } = useParams();

  useEffect(() => {
    fetch(`https://jctturismo.herokuapp.com/cliente/${id}`)
      .then(async (response) => {
        const clienteData = await response.json();
        setCliente(clienteData);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {isLoading && <Loader isLoading={isLoading} />}
      <BackOfficeTemplate clientes token={token}>
        <FormContainer>
          <Form
            action={`https://jctturismo.herokuapp.com/updateclient/${cliente.id}/${token}`}
            method="POST"
          >
            <h1>Editar: <span>{cliente.name}</span></h1>
            <Input
              defaultValue={cliente.name}
              name="name"
            />
            <Input
              defaultValue={cliente.email}
              name="email"
            />
            <Input
              defaultValue={cliente.phone}
              name="phone"
            />
            <Select
              defaultValue={cliente.know}
              name="know"
            >
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="indicação">Indicação</option>
              <option value="outros">Outros</option>
            </Select>
            <Button
              type="submit"
            >
              Enviar
            </Button>
          </Form>
        </FormContainer>
      </BackOfficeTemplate>
    </Container>
  );
};
