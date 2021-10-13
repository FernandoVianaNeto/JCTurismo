export const sendDestinyData = ({
  imgLink, price, title, subtitle, link, description, id, categoria,
}) => ({
  type: 'SEND_DESTINY_DATA',
  payload: {
    id,
    imgLink,
    title,
    price,
    subtitle,
    link,
    description,
    categoria,
  },
});

export const addNewDestiny = ({
  imgLink, price, title, id, amount, categoria,
}) => ({
  type: 'ADD_NEW_ITEM',
  payload: {
    id,
    imgLink,
    title,
    price,
    amount,
    categoria,
  },
});

export const removeDestiny = (destinys) => ({
  type: 'REMOVE_ITEM',
  destinys,
});

export const setNewSubtotal = ({ subtotal }) => ({
  type: 'SET_NEW_SUBTOTAL',
  payload: {
    subtotal,
  },
});

export const setNewAmount = (amount) => ({
  type: 'SET_NEW_AMOUNT',
  payload: {
    amount,
  },
});

export const setPackageData = ({
  title, imgLink, description, id, categorias,
}) => ({
  type: 'SEND_PACKAGE_DATA',
  payload: {
    id,
    categorias,
    title,
    description,
    imgLink,
  },
});
