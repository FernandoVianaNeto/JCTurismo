import { useDispatch } from 'react-redux';

import { sendDestinyData } from '../store/actions/actions';

export const useDestination = () => {
  const dispatch = useDispatch();

  function handleSendInformation({ imgLink, price, title, subtitle, link, description, id }) {
    console.log(id)
    dispatch(sendDestinyData({
      id: id,
      imgLink: imgLink,
      title: title,
      price: price,
      subtitle: subtitle,
      link: link,
      description: description,
    }))
  }

  return { handleSendInformation };
}
