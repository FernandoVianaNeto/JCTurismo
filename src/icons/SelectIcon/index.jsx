import P from 'prop-types';
import * as Styled from './styles';

export const SelectIcon = (children) => {
  return (
    <Styled.Container>
      <div className="outside-circle">
        <p class="inside-circle"> </p>
      </div>
    </Styled.Container>
  );
};

SelectIcon.propTypes = {
  children: P.node.isRequired,
}
