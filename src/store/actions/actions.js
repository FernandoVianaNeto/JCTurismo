export const sendDestinyData = ({ imgLink, price, title, subtitle, link, description, id, categoria }) => ({
  type: 'SEND_DESTINY_DATA',
  payload: {
    id: id,
    imgLink: imgLink,
    title: title,
    price: price,
    subtitle: subtitle,
    link: link,
    description: description,
    categoria: categoria
  },
})

export const addNewDestiny = ({ imgLink, price, title, id, amount, categoria }) => ({
  type: 'ADD_NEW_ITEM',
  payload: {
    id: id,
    imgLink: imgLink,
    title: title,
    price: price,
    amount: amount,
    categoria: categoria
  }
})

export const removeDestiny = (destinys) => ({
  type: 'REMOVE_ITEM',
  destinys
})

export const setNewSubtotal = (subtotal) => ({
  type: 'SET_NEW_SUBTOTAL',
  payload: {
    subtotal: subtotal
  }
})

export const setNewAmount = (amount) => ({
  type: 'SET_NEW_AMOUNT',
  payload: {
    amount: amount
  }
})

export const setPackageData = ({ title, subtitle, categoria1, categoria2, categoria3, price1, price2, price3, imgLink, description, id }) => ({
  type: 'SEND_PACKAGE_DATA',
  payload: {
    id: id,
    categoria1: categoria1,
    categoria2: categoria2,
    categoria3: categoria3,
    price1: price1,
    price2: price2,
    price3: price3,
    title: title,
    subtitle: subtitle,
    description: description,
    imgLink: imgLink
  }
})
