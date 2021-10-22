import React from 'react';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import * as Styled from './styles';

export const WhatsappButton = () => (
  <Styled.Container>
    <a href="https://api.whatsapp.com/send?phone=5571991848580">
      <AiOutlineWhatsApp size="5rem" />
    </a>
  </Styled.Container>
);
