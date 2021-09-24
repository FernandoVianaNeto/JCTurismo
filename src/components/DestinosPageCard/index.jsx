import * as Styled from './styles';

import { useDestination } from '../../hooks/useDestination';

export const DestinosPageCard = ({ id, title, imgLink, description, categorias }) => {
  const { handleSendPackage } = useDestination();

  console.log(categorias);
  return (
    <Styled.Container>
      <div className="content">
        <img src={imgLink} alt="imgAlt" />
        <div className="details">
          <div className="header">
            <p className="title">{title}</p>
            <p>{categorias.individual.tipo}</p>
          </div>
          <p> {description}</p>
          <div className="footer" onClick={() => handleSendPackage({ title, categorias, imgLink, description, id })}>
            <button>Comprar esse passeio</button>
            <p>A partir de <span>R$ {categorias.individual.price},00</span></p>
          </div>
        </div>
      </div>

    </Styled.Container>
  );
};

