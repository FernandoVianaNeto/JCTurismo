import React, { useState, useEffect, useMemo } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete, AiOutlineUserAdd } from 'react-icons/ai';

import { Link, useParams } from 'react-router-dom';
import {
  Container, DestinationsContainer, DestinyCard, ButtonContainer, Header, Group, Form, BigGroup, SmallGroup, HeaderGroup, Content,
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
  const [searchTerm, setSearchTerm] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [registerDestinationActive, setRegisterDestinationActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const { token } = useParams();

  const filteredTestimony = useMemo(() => destinations.filter((destino) => (
    destino.title.toLowerCase().includes(searchTerm.toLowerCase())
  )), [destinations, searchTerm]);

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
      <BackOfficeTemplate home token={token}>
        <Content>
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
                <Form action={`https://jctturismo.herokuapp.com/createdestination/${token}`} method="POST">
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
                          name="statusName"
                          value={status}
                          onChange={(event) => setStatus(event.target.value)}
                        >
                          <option value="true">Disponível</option>
                          <option value="false">Indisponível</option>
                        </Select>
                      </div>
                    </Group>

                    <Group>
                      <Group>
                        <h3>Categorias do passeio</h3>
                        <small>Categoria 1</small>
                        <Input
                          placeholder="Tipo de quantidade"
                          name="catTitle1"
                        />
                        <SmallGroup>
                          <Input
                            name="catPrice1"
                            placeholder="Preço"
                            type="number"
                          />
                          <Select
                            name="catType1"
                          >
                            <option value="individual">Individual</option>
                          </Select>
                          <Input type="hidden" name="id1" value={(Math.random() * 10000000).toFixed(0)} />
                        </SmallGroup>
                      </Group>
                      <Group>
                        <small>Categoria 2</small>
                        <Input
                          placeholder="Tipo de quantidade"
                          name="catTitle2"
                        />
                        <SmallGroup>
                          <Input
                            placeholder="Preço"
                            type="number"
                            name="catPrice2"
                          />
                          <Select
                            name="catType2"
                          >
                            <option value="pacote">Pacote</option>
                          </Select>
                          <Input type="hidden" name="id2" value={(Math.random() * 10000000).toFixed(0)} />
                        </SmallGroup>
                      </Group>
                      <Group>
                        <small>Categoria 3</small>
                        <Input
                          placeholder="Tipo de quantidade"
                          name="catTitle3"
                        />
                        <SmallGroup>
                          <Input
                            placeholder="Preço"
                            type="number"
                            name="catPrice3"
                          />
                          <Select
                            name="catType3"
                          >
                            <option value="pacote">Pacote</option>
                          </Select>
                          <Input type="hidden" name="id3" value={(Math.random() * 10000000).toFixed(0)} />
                        </SmallGroup>
                      </Group>
                      <Group>
                        <small>Adicional por pessoa</small>
                        <SmallGroup>
                          <Input
                            placeholder="Preço"
                            type="number"
                            name="adicional"
                          />
                          <Input type="hidden" name="id3" value={(Math.random() * 10000000).toFixed(0)} />
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
                                  name="catType5"
                                />
                                <SmallGroup>
                                  <Input
                                    placeholder="Preço"
                                    type="number"
                                    name="catPrice5"
                                  />
                                  <Select
                                    name="catType5"
                                  >
                                    <option value="pacote">Pacote</option>
                                  </Select>
                                  <Input type="hidden" name="id5" value={(Math.random() * 10000000).toFixed(0)} />
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
                  <HeaderGroup>
                    <input
                      placeholder="Pesquise um destino"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <button type="button" onClick={() => setRegisterDestinationActive(true)}>
                      Cadastrar novo destino <AiOutlineUserAdd />
                    </button>
                  </HeaderGroup>
                </Header>
                {
                  filteredTestimony.map((destination) => (
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
                              <Link aria-label="editar" to={`/editardestino/${destination.id}/auth=${token}`}><FiEdit2 /></Link>
                              <form action={`https://jctturismo.herokuapp.com/deletardestino/${destination.id}/${token}`} method="POST">
                                <button type="submit" aria-label="deletar"><AiOutlineDelete /></button>
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
        </Content>

      </BackOfficeTemplate>
    </Container>
  );
};

AdminPage.propTypes = {

};
