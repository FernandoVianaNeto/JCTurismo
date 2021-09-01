import { useState } from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { sendDestinyData } from '../store/actions/actions';

export const useDestination = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state);
  console.log(data);

  function handleSendInformation({ imgLink, price, title, subtitle, bestSeller, link, description }) {
    dispatch(sendDestinyData({
      imgLink: imgLink,
      title: title,
      price: price,
      subtitle: subtitle,
      bestSeller: bestSeller,
      link: link,
      description: description,
    }))
  }

  return { handleSendInformation }
}
