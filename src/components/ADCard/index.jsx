import P from 'prop-types';
import * as Styled from './styles';

export const ADCard = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

ADCard.propTypes = {
  children: P.node.isRequired,
}
