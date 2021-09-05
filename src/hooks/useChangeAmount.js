import { useState } from "react"

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const useChangeAmount = () => {
  const [counter, setCounter] = useState(1);

  function addAmount({ counter, imgLink, price, id }) {
    console.log(counter, imgLink, price, id)
  }

  function removeAmount({ counter, imgLink, price, id }) {
    console.log(counter, imgLink, price, id)
  }

  return { addAmount, removeAmount }
}
