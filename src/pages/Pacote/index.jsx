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
      <h1>{packageData.title}</h1>
      <div className="content">

        <section>

          <img src={packageData.imgLink} alt="imagem" />
          <div className="description">

          </div>

        </section>
        <aside>
          <h1>Detalhes</h1>
        </aside>
      </div>
    </Styled.Container>
  );
};

Pacote.propTypes = {

}
