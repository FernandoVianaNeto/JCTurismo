import { Button } from '../../components/Button';
import * as Styled from './styles';

import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { useAddItem } from '../../hooks/useAddItem';

export const Destinations = () => {
  const [added, setAdded] = useState(false)

  const { addNewItem } = useAddItem()

  const dataStore = useSelector(state => state);
  const items = dataStore.shoppingItems.items;

  useEffect(() => {
    items.map((obj) => {
      if (obj.id === dataStore.destinyData.id) {
        setAdded(true);
      }

      return items;
    })
  }, [items, dataStore.destinyData.id])

  return (
    <Styled.Container>
      <div className="content">
        <header>
          <h1 className="title">{dataStore.destinyData.title}</h1>
        </header>
        <main>
          <div className="column1">
            <img src={dataStore.destinyData.imgLink} alt="descrição" />
            <p className="image-description">Descrição da imagem</p>
          </div>
          <div className="column2">
            <h1>Como será o nosso passeio?</h1>
            <p className="passeio-description">
            {dataStore.destinyData.description}
            <p className="price">{dataStore.destinyData.subtitle} <span>R$ {dataStore.destinyData.price},00</span></p>
            </p>
          </div>
        </main>
        <div className="btn-container">
          {
            added ? (
              <Button disabled>Você já adicionou esse passeio</Button>
            ) : (
              <Button onClick={() => addNewItem({ imgLink: dataStore.destinyData.imgLink, title: dataStore.destinyData.title, price: dataStore.destinyData.price, id: dataStore.destinyData.id, amount: 1 })}>Adicionar esse passeio ao carrinho</Button>
            )
          }
        </div>
      </div>
    </Styled.Container>
  );
};

Destinations.propTypes = {
}
