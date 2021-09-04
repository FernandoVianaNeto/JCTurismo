import { addNewDestiny } from '../store/actions/actions';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const useAddItem = () => {
  const dispatch = useDispatch();

  const dataStore = useSelector(state => state);
  //const items = dataStore.shoppingItems.items;

  function addNewItem({ imgLink, title, price, id, amount }) {
    console.log(dataStore);
    dispatch(addNewDestiny({
      id: id,
      imgLink: imgLink,
      title: title,
      price: price,
      amount: amount,
    }))
  }

  return { addNewItem }
}
