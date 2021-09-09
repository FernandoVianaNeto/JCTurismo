import P from 'prop-types';
import * as Styled from './styles';

import { useState } from 'react';

import { Base } from '../../templates/Base';

import { Button } from '../../components/Button';

import { useSelector } from 'react-redux';

import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

export const Pacote = ({  }) => {
  const [pacote, setPacote] = useState('')
  const [counter, setCounter] = useState(0);

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

            <div className="pacote-container">
              <p>Quantidade de pessoas:</p>
              <select name="" id="">
                <option value="1">{packageData.categoria1}</option>
                <option value="2">{packageData.categoria2}</option>
                <option value="3">{packageData.categoria3}</option>
              </select>

              {/* <div>
                <button onClick={}>{packageData.categoria1}</button>
                <button>{packageData.categoria2}</button>
                <button>{packageData.categoria3}</button>
              </div> */}
            </div>
            <div className="acrescer">
              <p>Quantas pessoas a mais?</p>
              <div>
                <button><AiOutlineMinus /></button>
                <p>{counter}</p>
                <button><AiOutlinePlus /></button>
              </div>

            </div>
          </aside>
        </div>
        <Button>Adicionar esse passeio ao carrinho</Button>
      </div>
    </Styled.Container>
  );
};

Pacote.propTypes = {

}
