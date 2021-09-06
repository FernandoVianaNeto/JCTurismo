import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';

import { useSelector } from 'react-redux';

export const Pacote = ({  }) => {
  const dataStore = useSelector(state => state)
  const packageData = dataStore.packageData;
  console.log(packageData);
  return (
    <Styled.Container>
      <Base />
      <div className="content">

      </div>
    </Styled.Container>
  );
};

Pacote.propTypes = {

}
