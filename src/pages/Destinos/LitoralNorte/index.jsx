import P from 'prop-types';
import * as Styled from './styles';

import {  } from 'react-icons'
import { Destinations } from '../../../subpages/Destinations';
import { Base } from '../../../templates/Base';

export const LitoralNorte = () => {
  return (
    <Styled.Container>
      <Base />
      <Destinations />
    </Styled.Container>
  );
};

LitoralNorte.propTypes = {
  children: P.node.isRequired,
}
