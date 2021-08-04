import P from 'prop-types';
import * as Styled from './styles';

export const DestinoCard = ({ imgLink, imgAlt, title, children }) => {
  return (
    <Styled.Container>
      <div className="container">
        <img src={imgLink} alt={imgAlt} />
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="description">
            {children}
          </p>
        </div>
      </div>
    </Styled.Container>
  );
};

DestinoCard.propTypes = {
  children: P.node.isRequired,
  imgLink: P.string.isRequired,
  imgAlt: P.string.isRequired,
  title: P.string.isRequired,
}
