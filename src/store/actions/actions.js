export const sendDestinyData = ({ imgLink, price, title, subtitle, bestSeller, link, description }) => ({
  type: 'SEND_DESTINY_DATA',
  payload: {
    imgLink: imgLink,
    title: title,
    price: price,
    subtitle: subtitle,
    bestSeller: bestSeller,
    link: link,
    description: description,
  },
})

export const addNewDestiny = (destiny) => ({
  type: 'ADD_NEW_ITEM',
  item: destiny,
})
