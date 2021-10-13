import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { sendDestinyData, setPackageData } from '../store/actions/actions';

export const useDestination = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSendInformation({
    imgLink, price, title, subtitle, link, description, id, categoria,
  }) {
    dispatch(sendDestinyData({
      id,
      imgLink,
      title,
      price,
      subtitle,
      link,
      description,
      categoria,
    }));
  }

  function handleSendPackage({
    id, title, imgLink, description, categorias,
  }) {
    dispatch(setPackageData({
      categorias,
      title,
      imgLink,
      description,
      id,
    }));

    history.push('/destino');
  }

  return { handleSendInformation, handleSendPackage };
};
