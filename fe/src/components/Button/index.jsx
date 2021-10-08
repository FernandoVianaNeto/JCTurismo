import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ children, onClick, desabilitado }) => {
  return (
    <Styled.Container desabilitado={desabilitado}>
      <button onClick={onClick} className={desabilitado ? 'disabled' : ''}>{children}</button>
    </Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onClick: P.node,
  desabilitado: P.bool,
}
