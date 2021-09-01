export const sendDestinyData = ({ imgLink, price, title, subtitle, link, description, id }) => ({
  type: 'SEND_DESTINY_DATA',
  payload: {
    id: id,
    imgLink: imgLink,
    title: title,
    price: price,
    subtitle: subtitle,
    link: link,
    description: description,
  },
})

export const addNewDestiny = ({ imgLink, price, title, id }) => ({
  type: 'ADD_NEW_ITEM',
  payload: {
    id: id,
    imgLink: imgLink,
    title: title,
    price: price
  }
})
