import { useDispatch } from 'react-redux';

import { sendDestinyData } from '../store/actions/actions';
import { setPackageData } from '../store/actions/actions';

import { useHistory } from 'react-router-dom';

export const useDestination = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  function handleSendPackage({ id, title, imgLink, description, categorias }) {
    dispatch(setPackageData({
      categorias: categorias,
      title: title,
      imgLink: imgLink,
      description: description,
      id: id
    }))

    history.push('/destino');
  }

  return { handleSendInformation, handleSendPackage };
}
