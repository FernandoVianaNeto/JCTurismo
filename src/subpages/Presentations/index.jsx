import P from 'prop-types';
import * as Styled from './styles';

export const Presentations = ({ invert, children, title, smallDescription, background }) => {
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
  icon: P.node,
  invert: P.bool,
  children: P.node.isRequired,
  title: P.string.isRequired,
  smallDescription: P.string.isRequired,
  background: P.bool,
}
