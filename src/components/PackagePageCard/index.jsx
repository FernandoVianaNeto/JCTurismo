import P from 'prop-types';
import * as Styled from './styles';

import { useDestination } from '../../hooks/useDestination';

export const PackagePageCard = ({ title, subtitle, categoria1, categoria2, categoria3, price1, price2, price3, imgLink, description }) => {
  const { handleSendPackage } = useDestination();

  return (
    <Styled.Container>
      <div className="content">
        <img src={imgLink} alt="imgAlt" />
        <div className="details">
          <div className="header">
            <p>Passeio: <span>{title}</span></p>
            <p>Pacote: <span>{categoria1}</span></p>
            <p>A partir de <span>R$ {price1},00</span></p>
          </div>
          <p><span>Descrição:</span> {description}</p>
        </div>
      </div>
      <div className="footer" onClick={() => handleSendPackage({ title, subtitle, categoria1, categoria2, categoria3, price1, price2, price3, imgLink, description })}>
        <button>Comprar esse passeio</button>
      </div>

    </Styled.Container>
  );
};

PackagePageCard.propTypes = {

}
