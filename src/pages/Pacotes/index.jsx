import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';
import { data } from '../../data/data';

export const Pacotes = () => {
  const data1 = data;


  return (
    <Styled.Container>
      <Base />
      <div className="content">
        <h1>Os melhores pacotes</h1>
      </div>
    </Styled.Container>
  );
};

Pacotes.propTypes = {
  children: P.node.isRequired,
}
