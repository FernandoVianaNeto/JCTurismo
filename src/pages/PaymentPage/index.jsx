import * as Styled from './styles';

import { Base } from '../../templates/Base';

import { useSelector } from 'react-redux';

export const PaymentPage = () => {
  const data = useSelector(state => state);
  console.log(data);
  return (
    <Styled.Container>
      <Base />
    </Styled.Container>
  );
};
