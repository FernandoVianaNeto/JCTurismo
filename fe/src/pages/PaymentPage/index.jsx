import * as Styled from './styles';

import { Base } from '../../templates/Base';

import { useSelector } from 'react-redux';

export const PaymentPage = () => {
  const { shoppingItems } = useSelector(state => state);

  const subtotal = shoppingItems.subtotal;

  return (
    <Styled.Container>
      <Base />
    </Styled.Container>
  );
};
