import { removeDestiny } from "../store/actions/actions";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useRemoveItem = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const items = data.shoppingItems.items;

  function handleRemoveItem({ id }) {
    if(window.confirm('Gostaria mesmo de remover esse item?')) {
      dispatch(removeDestiny(items.filter((card) => card.id !== id)));
    }
  }

  return { handleRemoveItem };
}
