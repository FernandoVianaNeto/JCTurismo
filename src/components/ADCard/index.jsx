import P from 'prop-types';
import * as Styled from './styles';

export const ADCard = ({ children }) => {
  return (
    <Styled.Container>
      <div className="container">
        <div className="p-container">
          <p>
            <span>TRANSFER
              <br />
              HOTEL - AEROPORTO
            </span>
            <br />
          </p>
          <p>Mais segurança e menos preocupação.</p>
        </div>
        <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628278707/WhatsApp_Image_2021-08-06_at_16.38.05_fulolx.jpg" alt="aeroporto de salvador" />
      </div>

    </Styled.Container>
  );
};

ADCard.propTypes = {
  children: P.node.isRequired,
}
