import P from 'prop-types';
import * as Styled from './styles';

export const CityTour = (children) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

CityTour.propTypes = {
  children: P.node.isRequired,
}
