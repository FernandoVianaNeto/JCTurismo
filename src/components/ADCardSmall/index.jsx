import P from 'prop-types';
import * as Styled from './styles';

export const ADCardSmall = ({ children, title, subtitle, imgLink, imgAlt }) => {
  return (
    <Styled.Container>
      <div className="container">
      <img src={imgLink} alt={imgAlt} />
        <div className="p-container">
          <p className="title">{title} <br /></p>
          <p className="subtitle">{subtitle}</p>
          <p className="children">{children}</p>
        </div>
      </div>
    </Styled.Container>
  );
};

ADCardSmall.propTypes = {
  children: P.node.isRequired,
  title: P.string.isRequired,
  subtitle: P.string.isRequired,
  imgLink: P.string.isRequired,
  imgAlt: P.string.isRequired,
}
