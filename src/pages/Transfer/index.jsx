import P from 'prop-types';
import * as Styled from './styles';

export const Transfer = (children) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Transfer.propTypes = {
  children: P.node.isRequired,
}
