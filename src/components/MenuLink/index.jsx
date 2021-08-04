import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ link, children  }) => {
  return (
    <Styled.Container>
      <div className="container">
        <a href={link}>
          {children}
        </a>
      </div>
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  text: P.string.isRequired,
}
