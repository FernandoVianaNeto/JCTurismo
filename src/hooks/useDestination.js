import { useState } from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useDestination = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state);
  console.log(data);

  function handleSendInformation({ imgLink, imgAlt, price, title, subtitle, bestSeller, link }) {

  }

  return { handleSendInformation }
}
