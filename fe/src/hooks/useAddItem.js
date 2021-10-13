import { useDispatch } from 'react-redux';

import { addNewDestiny } from '../store/actions/actions';

export const useAddItem = () => {
  const dispatch = useDispatch();

  function addNewItem({
    imgLink, title, price, id, amount, categoria,
  }) {
    dispatch(addNewDestiny({
      id,
      imgLink,
      title,
      price,
      amount,
      categoria,
    }));
  }

  return { addNewItem };
};
