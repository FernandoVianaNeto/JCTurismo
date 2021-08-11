import P from 'prop-types';
import * as Styled from './styles';

export const Destinations = () => {
  return (
    <Styled.Container>
      <h1>Funcionando</h1>
    </Styled.Container>
  );
};

Destinations.propTypes = {
  children: P.node.isRequired,
}
