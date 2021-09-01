import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';

export const ShoppingCart = () => {
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
            <h1 className="product">Produto</h1>
            <h1>Preço</h1>
            <h1>Quantidade</h1>
            <h1>Total</h1>
          </div>
        </main>
      </div>
    </Styled.Container>
  );
};

ShoppingCart.propTypes = {

}
