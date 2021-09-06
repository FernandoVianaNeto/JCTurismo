import P from 'prop-types';
import * as Styled from './styles';

import { useHistory } from 'react-router';
import { useDestination } from '../../hooks/useDestination';

export const PacoteCard = ({ price1, price2, price3, categoria1, categoria2, categoria3, title, subtitle, imgLink, id, link, description }) => {
  const history = useHistory();
  const { handleSendPackage } = useDestination();

  function callHandleSendData() {
    handleSendPackage({ imgLink, price1, price2, price3, title, subtitle, link, description, id, categoria1, categoria2, categoria3 })
  }

  return (
    <Styled.Container>
      <img src={imgLink} alt='imagem do passeio' />
      <div className="description">
          <p className="title">{title}</p>
          <p className="categoria">{categoria1}</p>
          <p className="subtitle">{subtitle}</p>
          <p className="price">R$ <span>{price1},00</span></p>
          <button className="see-more" onClick={() => callHandleSendData({ imgLink, price1, price2, price3, title, subtitle, link, description, id, categoria1, categoria2, categoria3 })}>
            Ver Mais
          </button>
        </div>
    </Styled.Container>
  );
};

// onClick={() => callHandleSendData({ imgLink, imgAlt, price, title, subtitle, bestSeller, link, description, id, categoria })}

PacoteCard.propTypes = {
  price: P.number,
  price2: P.number,
  price3: P.number,
  categoria1: P.string,
  categoria2: P.string,
  categoria3: P.string,
  title: P.string,
  subtitle: P.string,
  imgLink: P.string,
  id: P.number,
  description: P.string
}
