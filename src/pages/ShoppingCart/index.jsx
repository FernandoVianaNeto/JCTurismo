import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container, Content, Header, Main, Footer,
} from './styles';

import { Base } from '../../templates/Base';
import { ProductCard } from '../../components/ProductCard';

import { setNewSubtotal } from '../../store/actions/actions';

export const ShoppingCart = () => {
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();

  const { shoppingItems } = useSelector((state) => state);
  const { items } = shoppingItems;

  useEffect(() => {
    const subtotal = [0];
    items.map((product) => {
      subtotal.push(product.price * product.amount);
      return items;
    });

    setTotal(subtotal.reduce((tot, product) => tot + product));
  }, [items]);

  useEffect(() => {
    dispatch(setNewSubtotal({
      subtotal: total,
    }));
  }, [total]);

  return (
    <Container>
      <Base />
      <Content>
        <Header>
          <h1>
            Meu carrinho
          </h1>
        </Header>
        <Main>
          <div className="products-container">
            <div className="products">
              {items.length === 0 ? (
                <h4>Adicione algum item ao carrinho...</h4>
              ) : (
                items.map((card) => (
                  <ProductCard
                    key={card.id}
                    imgLink={card.imgLink}
                    title={card.title}
                    price={card.price}
                    id={card.id}
                    amount={card.amount}
                    categoria={card.categoria}
                  />
                ))
              )}

            </div>
          </div>
        </Main>
        <Footer>
          <div className="subtotal">
            {items.length > 0 && (
              <>
                <h3>
                  Total:
                  <span>
                    {' '}
                    R$
                    {' '}
                    {total}
                    ,00
                  </span>
                </h3>
                <button type="button" onClick={() => history.push('/pagamento')}>
                  Seguir para o pagamento
                </button>
              </>
            )}
          </div>
        </Footer>
      </Content>
    </Container>
  );
};
