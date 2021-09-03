import P from 'prop-types';
import * as Styled from './styles';

import { useState, useEffect } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export const ProductCard = ({ imgLink, title, price }) => {
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(price * counter)
  }, [counter, price])

  return (
    <Styled.Container>
      <div className="details">
        <img src={imgLink} alt="productImage" />
        <p>
          Passeio:
          <br />
          <span>
            {title}
          </span>
        </p>
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
            {counter !== 1 && (<button className="alterate-counter" onClick={() => setCounter(counter - 1)}><AiOutlineMinus /> </button>)}
            <p>{counter}</p>
            <button className="alterate-counter" onClick={() => setCounter(counter + 1)}> <AiOutlinePlus /> </button>
          </div>
        </div>

      </div>
      <div className="total">
        <p>Total: R$ {total+",00"}</p>
        <button className="delete-item">
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
