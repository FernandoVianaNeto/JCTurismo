import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';
import { ProductCard } from '../../components/ProductCard';

import { useSelector } from 'react-redux';

export const ShoppingCart = () => {
  const dataStore = useSelector(state => state);
  console.log(dataStore);


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
            <div className="title-container">
              <h1 className="product">Produto</h1>
              <h1>Preço</h1>
              <h1>Quantidade</h1>
              <h1>Total</h1>
            </div>

            <div className="products">
              <ProductCard />
            </div>
          </div>
        </main>
      </div>
    </Styled.Container>
  );
};

ShoppingCart.propTypes = {

}
