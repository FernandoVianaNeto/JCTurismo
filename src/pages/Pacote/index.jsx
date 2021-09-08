import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';

import { Button } from '../../components/Button';

import { useSelector } from 'react-redux';

export const Pacote = ({  }) => {
  const dataStore = useSelector(state => state)
  const packageData = dataStore.packageData;
  console.log(packageData);

  return (
    <Styled.Container>
      <Base />
      <div className="container-items">
        <h1>{packageData.title}</h1>
        <div className="content">
          <section>
            <div className="img-container">
              <img src={packageData.imgLink} alt="imagem" />
              <p>img descriptions</p>
            </div>

            <div className="description">
              <h2>Como será o nosso passeio?</h2>
              <p>{packageData.description}</p>
            </div>
          </section>
          <aside>
            <h3>Detalhes do passeio</h3>
          </aside>
        </div>
        <Button>Adicionar esse passeio ao carrinho</Button>
      </div>
    </Styled.Container>
  );
};

Pacote.propTypes = {

}
