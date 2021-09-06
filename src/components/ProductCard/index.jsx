import P from 'prop-types';
import * as Styled from './styles';

import { useState, useEffect } from 'react';

import { useRemoveItem } from '../../hooks/useRemoveItem';
import { useChangeAmount } from '../../hooks/useChangeAmount';

import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export const ProductCard = ({ imgLink, title, price, id, amount, categoria }) => {
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(0);

  const { handleRemoveItem } = useRemoveItem();

  const { removeAmount, addAmount } = useChangeAmount();

  useEffect(() => {
    setTotal(price * amount)
  }, [amount, price])

  function handleAddAmount() {
    setCounter(counter + 1)
    addAmount({ counter, imgLink, price, id, amount, categoria })
  }

  function handleRemoveAmount() {
    setCounter(counter - 1)
    removeAmount({ counter, imgLink, price, id, amount, categoria })
  }

  return (
    <Styled.Container>
      <div className="details">
        <img src={imgLink} alt="productImage" />
        <div className="title-category">
          <p>
            Passeio:
            <br />
            <span>
              {title}
            </span>
          </p>
          <p>
            Categoria: <span>{categoria}</span>
          </p>
        </div>

      </div>
      <div className="price">
        <p>
          Preço: R$ {price+",00"}
        </p>
      </div>
      <div className="amount">
        <div className="header">
          <div className="name">Quantidade:</div>
          <div>
            {amount !== 1 && (<button className="alterate-counter" onClick={() => handleRemoveAmount()}><AiOutlineMinus /> </button>)}
            <p>{amount}</p>
            <button className="alterate-counter" onClick={() => handleAddAmount()}> <AiOutlinePlus /> </button>
          </div>
        </div>

      </div>
      <div className="total">
        <p>Total: R$ {total+",00"}</p>
        <button className="delete-item" onClick={() => handleRemoveItem({ id })}>
          Excluir item
        </button>
      </div>
    </Styled.Container>
  );
};

ProductCard.propTypes = {
  imgLink: P.string.isRequired,
  title: P.string.isRequired,
  price: P.number.isRequired
}
