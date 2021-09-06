import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { sendDestinyData } from '../store/actions/actions';
import { setPackageData } from '../store/actions/actions';

export const useDestination = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  console.log(data);

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

  function handleSendPackage({ id, title, subtitle, categoria1, categoria2, categoria3, price1, price2, price3, imgLink, description }) {
    dispatch(setPackageData({
      price1: price1,
      price2: price2,
      price3: price3,
      categoria1: categoria1,
      categoria2: categoria2,
      categoria3: categoria3,
      title: title,
      subtitle: subtitle,
      imgLink: imgLink,
      description: description,
      id: id
    }))
  }

  return { handleSendInformation, handleSendPackage };
}
