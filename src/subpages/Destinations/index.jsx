import P from 'prop-types';
import { Button } from '../../components/Button';
import * as Styled from './styles';

import { useSelector } from 'react-redux';

export const Destinations = () => {

  const dataStore = useSelector(state => state);
  console.log(dataStore.destinyData);

  return (
    <Styled.Container>
      <div className="content">
        <header>
          <h1 className="title">{dataStore.destinyData.title}</h1>
        </header>
        <main>
          <div className="column1">
            <img src={dataStore.destinyData.imgLink} alt="descrição" />
            <p className="image-description">Descrição da imagem</p>
            <Button>Adicionar esse passeio ao carrinho</Button>
          </div>
          <div className="column2">
            <h1>Como será o nosso passeio?</h1>
            <p className="passeio-description">
            {dataStore.destinyData.description}
            <p className="price">{dataStore.destinyData.subtitle} <span>R$ {dataStore.destinyData.price}</span></p>
            </p>
          </div>
        </main>
      </div>
    </Styled.Container>
  );
};

Destinations.propTypes = {
  children: P.node.isRequired,
}
