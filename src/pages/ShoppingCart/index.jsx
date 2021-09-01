import P from 'prop-types';
import * as Styled from './styles';

export const ShoppingCart = (children) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

ShoppingCart.propTypes = {
  children: P.node.isRequired,
}
