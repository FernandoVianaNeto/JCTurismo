/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {
  Container, ContainerItems, Content, Section, Aside,
} from './styles';
import { Base } from '../../templates/Base';
import Button from '../../components/Button';

import { useAddItem } from '../../hooks/useAddItem';

export const Destino = () => {
  const [counter, setCounter] = useState(0);
  const [added, setAdded] = useState(false);
  const [destinoData, setDestinoData] = useState({
    id: 0,
    imglink: '',
    title: '',
    description: '',
    categories: {
      individual: {},
      pacote: {
        types: [],
      },
      adicional: 0,
    },
  });
  const [select, setSelect] = useState({});

  const { addNewItem } = useAddItem();
  const { id } = useParams();
  const { shoppingItems } = useSelector((state) => state);

  useEffect(() => {
    fetch(`http://localhost:3001/destino/${id}`)
      .then(async (response) => {
        const json = await response.json();
        setDestinoData(json);
      });
  }, []);

  useEffect(() => {
    if (shoppingItems.items.find((item) => item.id === destinoData.id)) {
      setAdded(true);
    }
  }, [destinoData, shoppingItems]);

  function handleSetSelect({ typeId, price, categoria }) {
    setSelect({
      typeId,
      price,
      categoria,
    });
  }

  function callSetPlus() {
    setCounter(counter + 1);
    setSelect({
      ...select,
      price: select.price + Number(destinoData.categories.pacote.adicional),
    });
  }

  function callSetMinus() {
    setCounter(counter - 1);
    setSelect({
      ...select,
      price: select.price - Number(destinoData.categories.pacote.adicional),
    });
  }

  return (
    <Container>
      <Base />
      {
          destinoData.id !== undefined ? (
            <ContainerItems>
              <h1>{destinoData.title}</h1>
              <Content>
                <Section>
                  <div className="img-container">
                    <img src={destinoData.imglink} alt="imagem" />
                    <p>img descriptions</p>
                  </div>
                  <div className="description">
                    <h2>Como será o nosso passeio?</h2>
                    <p>{destinoData.description}</p>
                    <p className="subtotal-description">
                      A partir de
                      {' '}
                      <span>
                        R$
                        {destinoData.categories.individual.price}
                        ,00
                      </span>
                      {' '}
                    </p>
                  </div>
                </Section>
                <Aside>
                  <h3>Detalhes do passeio</h3>
                  <div className="content-container">
                    <div className="pacote-container">
                      <p>Quantidade de pessoas:</p>
                      <button
                        type="button"
                        className={select.typeId === destinoData.categories.individual.id ? 'selected' : ''}
                        onClick={() => handleSetSelect({
                          typeId: destinoData.categories.individual.id,
                          price: destinoData.categories.individual.price,
                          categoria: destinoData.categories.individual.type,
                        })}
                      >
                        {destinoData.categories.individual.type}
                      </button>

                      { destinoData.categories.pacote.types.map((pacote) => (
                        <button
                          type="button"
                          onClick={() => handleSetSelect({ typeId: pacote.id, price: pacote.price, categoria: pacote.type })}
                          className={pacote.id === select.typeId ? 'selected' : ''}
                          key={pacote.id}
                        >
                          {pacote.type}
                        </button>
                      ))}
                    </div>
                    <div className="acrescer">
                      <p>Quantas pessoas a mais?</p>
                      <div>
                        {counter > 0 && (
                        <button
                          type="button"
                          className="amount-button"
                          onClick={() => callSetMinus()}
                        >
                          <AiOutlineMinus />
                        </button>
                        )}
                        <p>{counter}</p>
                        <button
                          type="button"
                          className="amount-button"
                          onClick={() => callSetPlus()}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    Subtotal:
                    {' '}
                    <span>
                      R$
                      {select.price}
                      ,00
                    </span>
                  </p>
                </Aside>
              </Content>
              <div className="footer">
                { added ? (
                  <Button disabled>Você já adicionou esse passeio</Button>
                ) : (
                  select.typeId !== undefined ? (
                    <Button onClick={() => addNewItem({
                      id: destinoData.id, imgLink: destinoData.imglink, title: destinoData.title, amount: 1, price: select.price, categoria: select.categoria,
                    })}
                    >
                      Adicionar esse passeio ao carrinho
                    </Button>
                  ) : (
                    <Button disabled>Selecione uma categoria</Button>
                  )
                ) }
              </div>
            </ContainerItems>
          ) : (
            <h1>Não encontramos nada</h1>
          )
}
    </Container>
  );
};
