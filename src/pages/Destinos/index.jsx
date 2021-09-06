import * as Styled from './styles';

import { Destinations } from '../../subpages/Destinations';
import { Base } from '../../templates/Base';

export const Destino = () => {
  return (
    <Styled.Container>
      <Base />
      <Destinations />
    </Styled.Container>
  );
};
