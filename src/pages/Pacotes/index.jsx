import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';
import { data } from '../../data/data';
import { PackagePageCard } from '../../components/PackagePageCard';

export const Pacotes = () => {
  const data1 = data;
  console.log(data1);

  return (
    <Styled.Container>
      <Base />
      <div className="content">
        <h1>Os melhores pacotes com os melhores preços</h1>

        <div className="package-map">
          {
            data1.pacotes.map((card) => {
              return (
                <PackagePageCard
                  imgLink={card.imgLink}
                  title={card.title}
                  categoria1={card.categoria1}
                  description={card.description}
                  price1={card.price1}
                />
              )
            })
          }
        </div>

      </div>
    </Styled.Container>
  );
};

Pacotes.propTypes = {
  children: P.node.isRequired,
}
