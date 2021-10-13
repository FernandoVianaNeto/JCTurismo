import React, { useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import * as Styled from './styles';

import { Base } from '../../templates/Base';

export const PaymentPage = () => {
  const { shoppingItems } = useSelector((state) => state);

  const { subtotal } = shoppingItems;

  return (
    <Styled.Container>
      <Base />
    </Styled.Container>
  );
};
