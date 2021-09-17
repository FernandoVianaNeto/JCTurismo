import P from 'prop-types';
import * as Styled from './styles';

export const Passeios = (children) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Passeios.propTypes = {
  children: P.node.isRequired,
}
