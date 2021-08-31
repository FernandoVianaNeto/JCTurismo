import P from 'prop-types';
import * as Styled from './styles';

export const Destinations = () => {
  return (
    <Styled.Container>
      <div className="content">
        <header>
          <h1 className="title">Litoral Norte</h1>
        </header>
        <main>
          <div className="column1">
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628197030/ignacio-aguilar-S7KooAJPyxk-unsplash_i9kn1v.jpg" alt="litoral norte" />
          </div>
          <div className="column2">
            <h1>Como será o passeio</h1>
          </div>
        </main>
        <footer>

        </footer>
      </div>
    </Styled.Container>
  );
};

Destinations.propTypes = {
  children: P.node.isRequired,
}
