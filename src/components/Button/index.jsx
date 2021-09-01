import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ children, onClick }) => {
  return (
    <Styled.Container >
      <button onClick={onClick}>{children}</button>
    </Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
}
