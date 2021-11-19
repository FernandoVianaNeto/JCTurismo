import React from 'react';

import P from 'prop-types';
import ReactDOM from 'react-dom';

import { Overlay, Container, Footer } from './styles';

export default function Modal({ danger, title, children }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Deletar destino</h1>
        <p>
          Deseja mesmo deletar {title}
        </p>

        <Footer>
          {children}
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: P.bool,
  title: P.string.isRequired,
};

Modal.defaultProps = {
  danger: false,
};
