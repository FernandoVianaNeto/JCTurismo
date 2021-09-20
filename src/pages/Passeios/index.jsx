//import P from 'prop-types';
import * as Styled from './styles';

import { Base } from '../../templates/Base';

import { PackagePageCard } from '../../components/PackagePageCard';

import { data } from '../../data/data';

export const Passeios = () => {

  const { destinos } = data;

  return (
    <Styled.Container>
      <Base />
      <div className="destinos" >
        { destinos.map((destino) => {
          return (
            <div className="destino" key={destino.id}>
              <PackagePageCard
                title={destino.title}
                description={destino.descriptions}
                imgLink={destino.imgLink}
              />
            </div>
          )
        }) }
      </div>
    </Styled.Container>
  );
};

Passeios.propTypes = {

}
