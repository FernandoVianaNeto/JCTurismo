//import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';
import { ProductCard } from '../../components/ProductCard';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const ShoppingCart = () => {
  const [total, setTotal] = useState(0);

  const dataStore = useSelector(state => state);
  const shoppingItems = dataStore.shoppingItems;
  console.log(dataStore)
  const items = dataStore.shoppingItems.items;

  let subtotal = [0]

  useEffect(() => {
    items.map((card) => {
      subtotal.push(card.price)
    })

    let total1 = subtotal.reduce((total, element) => total + element)
    setTotal(total1)
  })

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
                items.map((card) => {
                  return (
                    <ProductCard
                      key={card.id}
                      imgLink={card.imgLink}
                      title={card.title}
                      price={card.price}
                      id={card.id}
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
