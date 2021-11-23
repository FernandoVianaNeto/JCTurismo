import React, { useState, useEffect } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import {
  Container, ClientesCard, ClientesContainer, ButtonContainer,
} from './styles';

import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';
import Loader from '../../../components/Loader';

export const ClientesAdminPage = () => {
  const [clientes, setClientes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jctturismo.herokuapp.com/clientes')
      .then(async (response) => {
        const clientesData = await response.json();
        setClientes(clientesData);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {isLoading && <Loader isLoading={isLoading} />}
      <BackOfficeTemplate>
        <ClientesContainer>
          <h1>Clientes Cadastrados</h1>
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
                        <button type="button" aria-label="editar"><FiEdit2 /></button>
                        <button type="button" aria-label="deletar"><AiOutlineDelete /></button>
                      </ButtonContainer>
                    </td>
                  </tr>
                </tbody>
              </ClientesCard>
            ))
          }
        </ClientesContainer>

      </BackOfficeTemplate>
    </Container>
  );
};
