import P from 'prop-types';
import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer/index';

export const SectionBackground = ({ children }) => {
  return (
    <Styled.Container>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
}
