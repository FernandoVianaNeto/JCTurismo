import { removeDestiny } from "../store/actions/actions";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useEffect } from "react";

export const useRemoveItem = () => {
  const [filteredDestinys, setFilteredDestinys] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const items = data.shoppingItems.items;
  console.log(data)

  function handleRemoveItem({ id }) {
    if(window.confirm('Gostaria mesmo de remover esse item?')) {
      setFilteredDestinys(items.filter((card) => card.id !== id));
    }
  }

  useEffect(() => {
    console.log(filteredDestinys)
    dispatch(removeDestiny({filteredDestinys}));
    console.log(data)
  }, [filteredDestinys])

  return { handleRemoveItem };
}
