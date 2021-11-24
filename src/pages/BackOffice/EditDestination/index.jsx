import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, FormContainer } from './styles';

import {
  Form, Group, BigGroup, SmallGroup,
} from '../AdminPage/styles';

import Loader from '../../../components/Loader';
import { Select } from '../../../components/Select';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';
import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';

export const EditDestination = () => {
  const [destination, setDestination] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [imglink, setImglink] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [smalldescription, setSmallDescription] = useState('');
  const [paymentDescription, setPaymentDescription] = useState('');
  const [categories, setCategories] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jctturismo.herokuapp.com/destino/${id}`)
      .then(async (response) => {
        const destinationData = await response.json();
        setDestination(destinationData);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (destination.title !== undefined) {
      setTitle(destination.title);
      setImglink(destination.imglink);
      setDescription(destination.description);
      setSmallDescription(destination.smalldescription);
      setPaymentDescription(destination.paymentdescription);
      setStatus(destination.status);
      setCategories(destination.categories);
    }
  }, [destination]);

  return (
    <Container>
      {isLoading
        ? <Loader isLoading={isLoading} />
        : (
          <BackOfficeTemplate>
            <FormContainer>
              <Form action={`https://jctturismo.herokuapp.com/editardestino/${id}`} method="POST">
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
                      value={smalldescription}
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
                      <small>Categoria</small>
                      <Input
                        placeholder="Tipo de quantidade"
                        name="catTitle1"
                        defaultValue={categories !== {} && categories.individual.type}
                      />
                      <SmallGroup>
                        <Input
                          name="catPrice1"
                          placeholder="Preço"
                          type="number"
                          defaultValue={categories !== {} && categories.individual.price}
                        />
                        <Select
                          name="catType1"
                        >
                          <option value="individual">Individual</option>
                        </Select>
                        <Input type="hidden" name="id1" value={categories !== {} && categories.individual.id} />
                      </SmallGroup>
                    </Group>
                    {
                      categories !== {} && categories.pacote.types.map((type) => (
                        <Group key={type.id}>
                          <small>Categoria</small>
                          <Input
                            placeholder="Tipo de quantidade"
                            name="catTitle1"
                            defaultValue={type.type}
                          />
                          <SmallGroup>
                            <Input
                              name="catPrice1"
                              placeholder="Preço"
                              type="number"
                              defaultValue={type.price}
                            />
                            <Select
                              name="catType1"
                            >
                              <option value="pacote">Pacote</option>
                            </Select>
                            <Input type="hidden" name="id1" value={(Math.random() * 10000000).toFixed(0)} />
                          </SmallGroup>
                        </Group>
                      ))
                    }
                  </Group>
                </BigGroup>
                <Button type="submit">Editar</Button>
              </Form>
            </FormContainer>
          </BackOfficeTemplate>
        )}
    </Container>
  );
};
