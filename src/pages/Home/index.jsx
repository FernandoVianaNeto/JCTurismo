import P from 'prop-types';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Container>
      <h1>Hello1</h1>
    </Styled.Container>
  );
};

Home.propTypes = {
  children: P.node.isRequired,
}
