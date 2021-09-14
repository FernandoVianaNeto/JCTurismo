import P from 'prop-types';
import * as Styled from './styles';

import { useHistory } from 'react-router-dom';
import { useDestination } from '../../hooks/useDestination';

export const PresentationCard = ({ smallDescription, title, imgLink, invert }) => {
  //const history = useHistory();

  //const { handleSendInformation } = useDestination()

  // function callHandleSendData({ imgLink, imgAlt, price, title, subtitle, bestSeller, link, description, id, categoria }) {
  //   history.push(`${link}`)
  //   handleSendInformation({ imgLink, imgAlt, price, title, subtitle, bestSeller, link, description, id, categoria });
  // }

  return (
    <Styled.Container>
      { invert ? (
        <div className="content">
          <div className="container">
            <h1>{title}</h1>
            <div className="smallDescription-container">
              <p>{smallDescription}</p>
            </div>
          </div>
          <img src={imgLink} alt="" />
        </div>
      ) : (
        <div className="content">
          <img src={imgLink} alt="" />
          <div className="container">
            <h1>{title}</h1>
            <div className="smallDescription-container">
              <p>{smallDescription}</p>
            </div>
          </div>
        </div>
      )}
    </Styled.Container>
  );
};

PresentationCard.propTypes = {
  title: P.string.isRequired,
  subtitle: P.string.isRequired,
  price: P.number.isRequired,
  imgLink: P.string.isRequired,
  bestSeller: P.bool,
  link: P.string,
  background: P.bool,
}

// imgLink, imgAlt, price, title, subtitle, bestSeller = false, link, background = false, description, id, categoria

{/* <div className="content">
<img src={imgLink} alt={imgAlt} />
<div className="description">
  <p className="title">{title}</p>
  <p className="categoria">{categoria}</p>
  <p className="subtitle">{subtitle}</p>
  <p className="price">R$ <span>{price},00</span></p>
  <button className="see-more" onClick={() => callHandleSendData({ imgLink, imgAlt, price, title, subtitle, bestSeller, link, description, id, categoria })}>
    Ver mais
  </button>
</div>
</div> */}
