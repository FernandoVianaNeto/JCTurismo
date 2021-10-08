import * as Styled from './styles';

import { Base } from '../../templates/Base';

import { data } from '../../data/data';

export const CityTour = () => {
  const data1 = data;
  const cityTour = data1.cityTour;
  console.log(cityTour);

  return (
    <Styled.Container>
      <Base />

    </Styled.Container>
  );
};
