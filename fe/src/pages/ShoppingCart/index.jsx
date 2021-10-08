import * as Styled from './styles';

import { Base } from '../../templates/Base';
import { ProductCard } from '../../components/ProductCard';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setNewSubtotal } from '../../store/actions/actions';

import { useHistory } from 'react-router';

export const ShoppingCart = () => {
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();

  const dataStore = useSelector(state => state);
  const items = dataStore.shoppingItems.items;

  useEffect(() => {
    setTotal(0)
  }, [items])

  useEffect(() => {
    dispatch(setNewSubtotal({
      subtotal: total,
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  useEffect(() => {
    let subtotal = [0]
    items.map((card) => {
      subtotal.push(card.price * card.amount)
      return items;
    })

    setTotal(subtotal.reduce((total, element) => total + element))

    return subtotal;
  }, [items])

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
              {items.length === 0 ? (
                <h4>Adicione algum item ao carrinho...</h4>
              ) : (
                items.map((card) => {
                  return (
                    <ProductCard
                      key={card.id}
                      imgLink={card.imgLink}
                      title={card.title}
                      price={card.price}
                      id={card.id}
                      amount={card.amount}
                      categoria={card.categoria}
                    />
                  )
                }
              )
            )}

            </div>
          </div>
        </main>
        <footer>
          <div className="subtotal">
            {items.length > 0 && (
              <>
              <h3>
                Subtotal:
                <span> R$ {total},00</span>
              </h3>
              <button onClick={() => history.push('/pagamento')}>
                Seguir para o pagamento
              </button>
              </>
            )}
          </div>
        </footer>
      </div>
    </Styled.Container>
  );
};
