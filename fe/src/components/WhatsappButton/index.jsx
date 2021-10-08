import * as Styled from './styles';

import { AiOutlineWhatsApp } from 'react-icons/ai';

export const WhatsappButton = () => {
  return (
    <Styled.Container>
      <a href="https://api.whatsapp.com/send?phone=5571991848580">
        <AiOutlineWhatsApp size="5rem"/>
      </a>
    </Styled.Container>
  );
};
