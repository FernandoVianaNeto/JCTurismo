import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({children}) => {
  return (
    <Styled.Container>
      <button>{children}</button>
    </Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
}
