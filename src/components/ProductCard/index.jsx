import P from 'prop-types';
import * as Styled from './styles';

import { useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export const ProductCard = ({ imgLink, title, price }) => {
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(price)

  console.log(total)

  async function plus() {
    setCounter(counter + 1);
    console.log(counter)
    setTotal(price*counter+",00");
  }

  function minus() {
    setCounter(counter - 1);
    setTotal(price*counter+",00")

  }

  return (
    <Styled.Container>
      <div className="details">
        <img src={imgLink} alt="productImage" />
        <p>Passeio:
        <br />
        <span>{title}</span></p>
      </div>
      <div className="price">
        <p>R$ {price}</p>
      </div>
      <div className="amount">
        {counter !== 1 && (<button className="alterate-counter" onClick={() => minus()}><AiOutlineMinus /> </button>)}
        <p>{counter}</p>
        <button className="alterate-counter" onClick={() => plus()}> <AiOutlinePlus /> </button>
      </div>

      <div className="total">
        R$ {total}
      </div>
    </Styled.Container>
  );
};

ProductCard.propTypes = {
  imgLink: P.string.isRequired,
  title: P.string.isRequired,
  price: P.number.isRequired
}
