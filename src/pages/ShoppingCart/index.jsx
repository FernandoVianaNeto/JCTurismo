//import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';
import { ProductCard } from '../../components/ProductCard';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const ShoppingCart = () => {
  const [total, setTotal] = useState(0);

  const dataStore = useSelector(state => state);
  console.log(dataStore.shoppingItems);
  const shoppingItems = dataStore.shoppingItems;

  const items = dataStore.shoppingItems.items;
  console.log(items);

  let subtotal = []

  useEffect(() => {
    items.map((card) => {
      subtotal.push(card.price)
    })

    console.log(subtotal)
    let total1 = subtotal.reduce((total, element) => total + element)
    console.log(total1)
    setTotal(total1)
  })

  console.log(total)

  return (
    <Styled.Container>
      <Base />
      <div className="content">
        <header>
          <h1>
            Meu carrinho
          </h1>
        </header>
        <main>
          <div className="products-container">
            <div className="products">
              {
                shoppingItems.items.map((card) => {
                  return (
                    <ProductCard
                      key={card.id}
                      imgLink={card.imgLink}
                      title={card.title}
                      price={card.price}
                    />
                  )
                }
              )}
            </div>
          </div>
        </main>
        <footer>
          <div className="subtotal">
            <h3>
              Subtotal:
              <span> R$ {total},00</span>
            </h3>
            <button>
              Seguir para o pagamento
            </button>
          </div>
        </footer>
      </div>
    </Styled.Container>
  );
};

ShoppingCart.propTypes = {

}
