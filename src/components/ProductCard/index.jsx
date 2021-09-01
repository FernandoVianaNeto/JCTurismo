import P from 'prop-types';
import * as Styled from './styles';

export const ProductCard = ({ imgLink, title, price }) => {
  return (
    <Styled.Container>
      <div className="details">
        <img src={imgLink} alt="productImage" />
        <p>Passeio: <span></span>{title}</p>
      </div>
      <div className="price">
        <p>R$ {price}</p>
      </div>
    </Styled.Container>
  );
};

ProductCard.propTypes = {
  imgLink: P.string.isRequired,
  title: P.string.isRequired,
}
