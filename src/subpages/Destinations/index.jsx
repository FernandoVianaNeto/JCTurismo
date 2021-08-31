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
            <p className="image-description">Descrição da imagem</p>
          </div>
          <div className="column2">
            <h1>Como será o nosso passeio</h1>
            <p className="passeio-description">
            Lorem ipsum tortor ad fames magna pellentesque curabitur leo maecenas eros ligula, venenatis consequat fusce arcu bibendum platea eu primis nisi lacinia vitae, ullamcorper proin laoreet pretium erat lectus felis eu malesuada a. vulputate odio in ultrices dolor adipiscing placerat leo ac, phasellus justo porta et est curabitur lobortis ad faucibus, ullamcorper ultrices etiam varius lobortis praesent fames. eu dictum in nibh iaculis facilisis suscipit odio cubilia fusce netus, duis odio cras donec lectus varius aenean lobortis nullam. lectus dapibus pharetra bibendum viverra congue dolor duis, vehicula cubilia faucibus sollicitudin consequat morbi, litora potenti risus sagittis fermentum donec.
            </p>
          </div>
        </main>
      </div>
    </Styled.Container>
  );
};

Destinations.propTypes = {
  children: P.node.isRequired,
}
