import P from 'prop-types';
import * as Styled from './styles';

export const Presentations = ({ invert, children, title, smallDescription, background }) => {
  return (
      <Styled.Container background={background}>
        {children}
        <div className="button">
          <button>
            <strong>
              Quero conhecer mais
            </strong>
          </button>
        </div>
      </Styled.Container>
  );
};

Presentations.propTypes = {
  icon: P.node,
  invert: P.bool,
  children: P.node.isRequired,
  title: P.string.isRequired,
  smallDescription: P.string.isRequired,
  background: P.bool,
}
