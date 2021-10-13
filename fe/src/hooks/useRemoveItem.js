import { useSelector, useDispatch } from 'react-redux';

import { removeDestiny } from '../store/actions/actions';

export const useRemoveItem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const { items } = data.shoppingItems;

  function handleRemoveItem({ id }) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Gostaria mesmo de remover esse item?')) {
      dispatch(removeDestiny(items.filter((card) => card.id !== id)));
    }
  }

  return { handleRemoveItem };
};
