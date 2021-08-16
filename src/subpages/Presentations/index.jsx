import P from 'prop-types';
import * as Styled from './styles';

export const Presentations = ({ invert = false, children, title, smallDescription, background = false }) => {
  return (
      <Styled.Container background={background}>
        {invert ? (
          <div className="content" invert={invert} >
            <div className="column2" background={background}>
              {children}
            </div>
            <div className="column1">
              <p>{title}</p>
              <h1>{smallDescription}</h1>
            </div>
          </div>
        ) : (
          <div className="content" invert={invert}>
            <div className="column1">
              <p>{title}</p>
              <h1>{smallDescription}</h1>
            </div>
            <div className="column2">
              {children}
            </div>
          </div>
        )}
      </Styled.Container>
  );
};

Presentations.propTypes = {
  icon: P.node.isRequired,
  invert: P.bool,
  children: P.node.isRequired,
  title: P.string.isRequired,
  smallDescription: P.string.isRequired,
  background: P.bool,
}
