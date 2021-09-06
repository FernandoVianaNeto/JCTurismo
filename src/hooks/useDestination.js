import { useDispatch } from 'react-redux';

import { sendDestinyData } from '../store/actions/actions';

export const useDestination = () => {
  const dispatch = useDispatch();

  function handleSendInformation({ imgLink, price, title, subtitle, link, description, id, categoria }) {
    dispatch(sendDestinyData({
      id: id,
      imgLink: imgLink,
      title: title,
      price: price,
      subtitle: subtitle,
      link: link,
      description: description,
      categoria: categoria
    }))
  }

  function handleSendPackage() {

  }

  return { handleSendInformation, handleSendPackage };
}
