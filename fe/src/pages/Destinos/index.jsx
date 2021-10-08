import * as Styled from './styles';

import { Base } from '../../templates/Base';
import { data } from '../../data/data';
import { DestinosPageCard } from '../../components/DestinosPageCard';

export const Destinos = () => {
  const { destinos } = data;

  return (
    <Styled.Container>
      <Base />
      <div className="content">
        <h1>Os melhores pacotes com os melhores preços</h1>
        <div className="package-map">
          {
            destinos.map((card) => {
              return (
                <DestinosPageCard
                  key={card.id}
                  imgLink={card.imgLink}
                  title={card.title}
                  categorias={card.categorias}
                  description={card.description}
                  id={card.id}
                />
              )
            })
          }
        </div>
      </div>
    </Styled.Container>
  );
};
