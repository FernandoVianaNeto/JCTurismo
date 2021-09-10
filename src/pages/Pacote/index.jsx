import * as Styled from './styles';

import { useState, useEffect } from 'react';

import { Base } from '../../templates/Base';

import { Button } from '../../components/Button';

import { useSelector } from 'react-redux';
import { useAddItem } from '../../hooks/useAddItem';

import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

export const Pacote = () => {
  const { addNewItem } = useAddItem()

  const [counter, setCounter] = useState(0);

  const [categ1, setCateg1] = useState(true);
  const [categ2, setCateg2] = useState(false);
  const [categ3, setCateg3] = useState(false);
  const [added, setAdded] = useState(false);

  const dataStore = useSelector(state => state)
  console.log(dataStore)
  const packageData = dataStore.packageData;

  const [subtotal, setSubtotal] = useState(packageData.price1);
  const [categoria, setCategoria] = useState(packageData.categoria1);
  const [price, setPrice] = useState(packageData.price1)

  useEffect(() => {
    dataStore.shoppingItems.items.map((obj) => {
      if (obj.id === packageData.id) {
        setAdded(true);
      }

      return dataStore;
    })
  }, [dataStore])

  function categ1Set() {
    setCateg1(true);
    setCateg2(false);
    setCateg3(false);
    setSubtotal(packageData.price1 + counter*120);

    setCategoria(packageData.categoria1);
    setPrice(packageData.price1)
  }

  function categ2Set() {
    setCateg1(false);
    setCateg2(true);
    setCateg3(false);
    setSubtotal(packageData.price2 + counter*120);

    setCategoria(packageData.categoria2);
    setPrice(packageData.price2)
  }

  function categ3Set() {
    setCateg1(false);
    setCateg2(false);
    setCateg3(true);
    setSubtotal(packageData.price3  + counter*120);

    setCategoria(packageData.categoria3);
    setPrice(packageData.price3)
  }

  function callSetPlus() {
    setCounter(counter + 1)
    setSubtotal(subtotal + 120)
  }

  function callSetMinus() {
    setCounter(counter - 1)
    setSubtotal(subtotal - 120)
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
              <p className="subtotal-description">A partir de <span>R$ {packageData.price1},00</span> </p>
            </div>
          </section>
          <aside>
            <h3>Detalhes do passeio</h3>
            <div className="content-container">
              <div className="pacote-container">
                <p>Quantidade de pessoas:</p>
                <button className={categ1 && 'selected'} onClick={() => categ1Set()}>{packageData.categoria1}</button>
                <button className={categ2 && 'selected'} onClick={() => categ2Set()}>{packageData.categoria2}</button>
                <button className={categ3 && 'selected'} onClick={() => categ3Set()}>{packageData.categoria3}</button>
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
            <p>Subtotal: <span>R$ {subtotal},00</span></p>
          </aside>
        </div>
        { added ? (
          <Button disabled desabilitado>Você já adicionou esse passeio</Button>
        ) : (
          <Button onClick={() => addNewItem({ id: packageData.id, imgLink: packageData.imgLink, categoria, title: packageData.title, price, amount: 1 })}>Adicionar esse passeio ao carrinho</Button>
        ) }
      </div>
    </Styled.Container>
  );
};
