import P from 'prop-types';
import * as Styled from './styles';

export const ADCard = ({ children, title, subtitle, imgLink, imgAlt }) => {
  return (
    <Styled.Container>
      <div className="container">
        <div className="p-container">
          <p className="title">{title} <br /></p>
          <p className="subtitle">{subtitle}</p>
          <p className="children">{children}</p>
        </div>
        <img src={imgLink} alt={imgAlt} />
      </div>

    </Styled.Container>
  );
};

ADCard.propTypes = {
  children: P.node.isRequired,
  title: P.string.isRequired,
  subtitle: P.string.isRequired,
  imgLink: P.string.isRequired,
  imgAlt: P.string.isRequired,
}
