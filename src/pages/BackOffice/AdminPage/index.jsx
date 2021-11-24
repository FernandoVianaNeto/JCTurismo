import React, { useState, useEffect } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete, AiOutlineUserAdd } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import {
  Container, DestinationsContainer, DestinyCard, ButtonContainer, Header, Group, Form, BigGroup, SmallGroup,
} from './styles';

import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';
import Loader from '../../../components/Loader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';
import { Select } from '../../../components/Select';

export const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [imglink, setImglink] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [smallDescription, setSmallDescription] = useState('');
  const [paymentDescription, setPaymentDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [destinations, setDestinations] = useState([]);
  const [registerDestinationActive, setRegisterDestinationActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch('https://jctturismo.herokuapp.com/destinations')
      .then(async (response) => {
        const json = await response.json();
        setDestinations(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {isLoading && <Loader isLoading={isLoading} />}
      <BackOfficeTemplate home>
        <DestinationsContainer>
          {
            registerDestinationActive ? (
              <>
                <Header>
                  <h1>Cadastrar novo destino</h1>
                  <button type="button" onClick={() => setRegisterDestinationActive(false)}>
                    Voltar
                  </button>
                </Header>
                <Form action="https://jctturismo.herokuapp.com/createdestination" method="POST">
                  <BigGroup>
                    <Group>
                      <h3>Informações do passeio</h3>
                      <Input
                        placeholder="Título do passeio*"
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                      />
                      <Input
                        placeholder="Link da imagem*"
                        name="imglink"
                        value={imglink}
                        onChange={(event) => setImglink(event.target.value)}
                      />
                      <TextArea
                        placeholder="Descrição do passeio*"
                        name="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                      <TextArea
                        placeholder="Descrição reduzida do passeio*"
                        name="smallDescription"
                        value={smallDescription}
                        onChange={(event) => setSmallDescription(event.target.value)}
                      />
                      <Input
                        placeholder="Descrição de pagamento*"
                        name="paymentDescription"
                        value={paymentDescription}
                        onChange={(event) => setPaymentDescription(event.target.value)}
                      />
                      <div>
                        <small>Disponibilidade do passeio</small>
                        <Select
                          name="status"
                          value={status}
                          onChange={(event) => setStatus(event.target.value)}
                        >
                          <option value="disponível">Disponível</option>
                          <option value="indisponível">Indisponível</option>
                        </Select>
                      </div>
                    </Group>

                    <Group>
                      <Group>
                        <h3>Categorias do passeio</h3>
                        <small>Categoria 1</small>
                        <Input
                          placeholder="Tipo de quantidade"
                        />
                        <SmallGroup>
                          <Input
                            placeholder="Preço"
                            type="number"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                          />
                          <Select>
                            <option value="individual">Individual</option>
                            <option value="pacote">Pacote</option>
                          </Select>
                        </SmallGroup>
                      </Group>
                      <Group>
                        <small>Categoria 2</small>
                        <Input
                          placeholder="Tipo de quantidade"
                        />
                        <SmallGroup>
                          <Input
                            placeholder="Preço"
                            type="number"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                          />
                          <Select>
                            <option value="individual">Individual</option>
                            <option value="pacote">Pacote</option>
                          </Select>
                        </SmallGroup>
                      </Group>
                      <Group>
                        <small>Categoria 3</small>
                        <Input
                          placeholder="Tipo de quantidade"
                        />
                        <SmallGroup>
                          <Input
                            placeholder="Preço"
                            type="number"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                          />
                          <Select>
                            <option value="individual">Individual</option>
                            <option value="pacote">Pacote</option>
                          </Select>
                        </SmallGroup>
                      </Group>
                      <Group>
                        <small>Categoria 4</small>
                        <Input
                          placeholder="Tipo de quantidade"
                        />
                        <SmallGroup>
                          <Input
                            placeholder="Preço"
                            type="number"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                          />
                          <Select>
                            <option value="individual">Individual</option>
                            <option value="pacote">Pacote</option>
                          </Select>
                        </SmallGroup>
                      </Group>

                      {
                        showMore
                          ? (
                            <>
                              <Group>
                                <small>Categoria 5</small>
                                <Input
                                  placeholder="Tipo de quantidade"
                                />
                                <SmallGroup>
                                  <Input
                                    placeholder="Preço"
                                    type="number"
                                    value={price}
                                    onChange={(event) => setPrice(event.target.value)}
                                  />
                                  <Select>
                                    <option value="individual">Individual</option>
                                    <option value="pacote">Pacote</option>
                                  </Select>
                                </SmallGroup>
                              </Group>
                              <Button type="button" onClick={() => setShowMore(false)}>Fechar</Button>
                            </>
                          ) : (
                            <Button type="button" onClick={() => setShowMore(true)}>Cadastrar mais uma categoria</Button>
                          )
                      }
                    </Group>
                  </BigGroup>
                  <Button type="submit">Cadastrar</Button>
                </Form>
              </>

            ) : (
              <>
                <Header>
                  <h1>Destinos disponíveis</h1>
                  <button type="button" onClick={() => setRegisterDestinationActive(true)}>
                    Cadastrar novo destino <AiOutlineUserAdd />
                  </button>
                </Header>
                {
                  destinations.map((destination) => (
                    <DestinyCard key={destination.id}>
                      <tbody>
                        <tr>
                          <th className="imagem">Imagem</th>
                          <th className="title">Título</th>
                          <th className="description">Descrição</th>
                          <th className="op">Opções</th>
                        </tr>
                        <tr>
                          <td className="imagem"><img src={destination.imglink} alt="destino logo" /></td>
                          <td className="title"><span><p>{destination.title}</p></span></td>
                          <td className="description"><p>{destination.smalldescription}</p></td>
                          <td className="op">
                            <ButtonContainer>
                              <Link aria-label="editar" to={`/editardestino/${destination.id}`}><FiEdit2 /></Link>
                              <form action={`https://jctturismo.herokuapp.com/deletardestino/${destination.id}`} method="POST">
                                <button type="button" aria-label="deletar"><AiOutlineDelete /></button>
                              </form>
                            </ButtonContainer>
                          </td>
                        </tr>
                      </tbody>
                    </DestinyCard>
                  ))
                }
              </>
            )
          }

        </DestinationsContainer>
      </BackOfficeTemplate>
    </Container>
  );
};

AdminPage.propTypes = {

};
