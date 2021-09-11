import P from 'prop-types';
import * as Styled from './styles';

export const PaymentPage = (children) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

PaymentPage.propTypes = {
  children: P.node.isRequired,
}
