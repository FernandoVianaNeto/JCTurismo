import * as Styled from './styles';

import { useDestination } from '../../hooks/useDestination';

export const PackagePageCard = ({ id, title, subtitle, categoria1, categoria2, categoria3, price1, price2, price3, imgLink, description, invert }) => {
  const { handleSendPackage } = useDestination();

  return (
    <Styled.Container>
      <div className="content">
        <img src={imgLink} alt="imgAlt" />
        <div className="details">
          <div className="header">
            <p className="title">{title}</p>
            <p>{categoria1}</p>
          </div>
          <p> {description}</p>
          <div className="footer" onClick={() => handleSendPackage({ title, subtitle, categoria1, categoria2, categoria3, price1, price2, price3, imgLink, description, id })}>
            <button>Comprar esse passeio</button>
            <p>A partir de <span>R$ {price1},00</span></p>
          </div>
        </div>
      </div>

    </Styled.Container>
  );
};

