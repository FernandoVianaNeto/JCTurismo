import P from 'prop-types';
import * as Styled from './styles';

export const Presentations = ({ children, background }) => {
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
  children: P.node.isRequired,
  background: P.bool.isRequired
}
