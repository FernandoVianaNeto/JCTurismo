import P from 'prop-types';
import * as Styled from './styles';

export const ADCard = ({ children }) => {
  return (
    <Styled.Container>
      <div className="p-container">
        <p>
          <span>TRANSFER
            <br />
            HOTEL AEROPORTO
          </span>
          <br />
        </p>
        <p>Mais segurança e menos preocupação.</p>
      </div>
      <div className="img-container">

      </div>
    </Styled.Container>
  );
};

ADCard.propTypes = {
  children: P.node.isRequired,
}
