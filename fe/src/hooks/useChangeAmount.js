import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setNewAmount } from "../store/actions/actions";

export const useChangeAmount = () => {
  const dispatch = useDispatch();
  const dataStore = useSelector(state => state);

  const items = dataStore.shoppingItems.items;
  console.log(dataStore)

  function addAmount({ id, amount }) {
    items.map((obj) => {
      if (obj.id === id) {
        obj.amount = amount+1
      }

      return items;
    })

    dispatch(setNewAmount(items))
  }

  function removeAmount({ id, amount }) {
    items.map((obj) => {
      if (obj.id === id) {
        obj.amount = amount-1
        console.log(obj)
      }

      return items;
    })

    dispatch(setNewAmount(items))
  }

  return { addAmount, removeAmount }
}
