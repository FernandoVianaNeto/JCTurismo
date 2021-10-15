/* eslint-disable object-shorthand */
import { useDispatch } from 'react-redux';

import { addNewDestiny } from '../store/actions/actions';

export const useAddItem = () => {
  const dispatch = useDispatch();

  function addNewItem({
    imgLink, title, price, id, amount, categoria,
  }) {
    dispatch(addNewDestiny({
      id: id,
      imgLink: imgLink,
      title: title,
      price: price,
      amount: amount,
      categoria: categoria,
    }));
  }

  return { addNewItem };
};
