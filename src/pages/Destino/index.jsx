import * as Styled from './styles';

import { useState, useEffect } from 'react';

import { Base } from '../../templates/Base';

import { Button } from '../../components/Button';

import { useSelector } from 'react-redux';
import { useAddItem } from '../../hooks/useAddItem';

import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

export const Destino = () => {
  const { addNewItem } = useAddItem()

  const [counter, setCounter] = useState(0);

  const [added, setAdded] = useState(false);

  const { packageData, shoppingItems } = useSelector(state => state)

  const [select, setSelect] = useState({
    id: packageData.categorias.individual.id,
    price: packageData.categorias.individual.price,
    categoria: packageData.categorias.individual.tipo,
  });
  const adicional = packageData.categorias.pacote.adicional;

  useEffect(() => {
    shoppingItems.items.map((obj) => {
      if (obj.id === packageData.id) {
        setAdded(true);
      }

      return shoppingItems;
    })

  }, [packageData.id, shoppingItems])

  function handleSetSelect({ id, price, categoria }) {
    setSelect({
      id: id,
      price: price,
      categoria: categoria
    })
  }

  function callSetPlus() {
    setCounter(counter + 1)
    setSelect({
      ...select,
      price: select.price + adicional
    })
  }

  function callSetMinus() {
    setCounter(counter - 1)
    setSelect({
      ...select,
      price: select.price - adicional
    })
  }

  return (
    <Styled.Container>
      <Base />
      <div className="container-items">
        <h1>{packageData.title}</h1>
        <div className="content">
          <section>
            <div className="img-container">
              <img src={packageData.imgLink} alt="imagem" />
              <p>img descriptions</p>
            </div>
            <div className="description">
              <h2>Como será o nosso passeio?</h2>
              <p>{packageData.description}</p>
              <p className="subtotal-description">A partir de <span>R$ {packageData.categorias.individual.price},00</span> </p>
            </div>
          </section>
          <aside>
            <h3>Detalhes do passeio</h3>
            <div className="content-container">
              <div className="pacote-container">
                <p>Quantidade de pessoas:</p>
                <button
                  className={ select.id === packageData.categorias.individual.id ? 'selected' : ''}
                  onClick={() => handleSetSelect({
                    id: packageData.categorias.individual.id,
                    price: packageData.categorias.individual.price,
                    categoria: packageData.categorias.individual.tipo
                  })}
                >
                  {packageData.categorias.individual.tipo}
                </button>

                { packageData.categorias.pacote.tipos.map((pacote) => {
                    return (
                      <button
                        onClick={() => handleSetSelect({ id: pacote.id, price: pacote.price, categoria: pacote.tipo })}
                        className={ pacote.id === select.id ? 'selected' : ''}
                        key={pacote.id}
                      >
                        {pacote.tipo}
                      </button>
                    )
                })}
              </div>
              <div className="acrescer">
                <p>Quantas pessoas a mais?</p>
                <div>
                  {counter > 0 && (
                    <button onClick={() => callSetMinus()}><AiOutlineMinus /></button>
                  )}
                  <p>{counter}</p>
                  <button onClick={() => callSetPlus()}><AiOutlinePlus /></button>
                </div>
              </div>
            </div>
            <p>Subtotal: <span>R$ {select.price},00</span></p>
          </aside>
        </div>
        <div className="footer">
          { added ? (
            <Button disabled desabilitado>Você já adicionou esse passeio</Button>
          ) : (
            <Button onClick={() => addNewItem({ id: packageData.id, imgLink: packageData.imgLink, title: packageData.title, amount: 1, price: select.price, categoria: select.categoria })}>Adicionar esse passeio ao carrinho</Button>
          ) }
        </div>
      </div>
    </Styled.Container>
  );
};
