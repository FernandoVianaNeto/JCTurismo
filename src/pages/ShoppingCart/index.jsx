import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';
import { ProductCard } from '../../components/ProductCard';

import { useSelector } from 'react-redux';

export const ShoppingCart = () => {
  const dataStore = useSelector(state => state);
  console.log(dataStore.shoppingItems);
  const shoppingItems = dataStore.shoppingItems;

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
                shoppingItems.map((card) => {
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
            <h1>Subtotal</h1>
          </div>
        </footer>
      </div>
    </Styled.Container>
  );
};

ShoppingCart.propTypes = {

}
