import P from 'prop-types';
import * as Styled from './styles';

import { useHistory } from 'react-router-dom';
import { useDestination } from '../../hooks/useDestination';

export const PresentationCard = ({ imgLink, imgAlt, price, title, subtitle, bestSeller = false, link, background = false }) => {
  const history = useHistory()

  const { handleSendInformation } = useDestination()

  function callHandleSendData({ imgLink, imgAlt, price, title, subtitle, bestSeller, link }) {
    history.push(`${link}`)
    handleSendInformation({ imgLink, imgAlt, price, title, subtitle, bestSeller, link });
  }

  return (
    <Styled.Container bestSeller={bestSeller} background={background}>
      <div className="content">
        {bestSeller && (
          <>
            <p className="best-seller">Mais Vendido!</p>
          </>
        )}
        <img src={imgLink} alt={imgAlt} />
        <div className="description">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
          <p className="price">R$ <span>{price}</span></p>
          <button className="see-more" onClick={() => callHandleSendData({ imgLink, imgAlt, price, title, subtitle, bestSeller, link })}>
            Ver Mais
          </button>
        </div>
      </div>
    </Styled.Container>
  );
};

PresentationCard.propTypes = {
  title: P.string.isRequired,
  subtitle: P.string.isRequired,
  price: P.string.isRequired,
  imgLink: P.string.isRequired,
  bestSeller: P.bool,
  link: P.string,
  background: P.bool,
}
