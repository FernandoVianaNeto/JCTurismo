const initialState = {
  imgLink: null,
  title: null,
  price: null,
  subtitle: null,
  bestSeller: null,
  link: null,
  description: null,
}

export function sendDestinyData(state = initialState, action) {
  switch(action.type) {
    case 'SEND_DESTINY_DATA':
      return {
        imgLink: action.payload.imgLink,
        title: action.payload.title,
        price: action.payload.price,
        subtitle: action.payload.subtitle,
        bestSeller: action.payload.bestSeller,
        link: action.payload.link,
        description: action.payload.description,
      }
  }

  return state;
}
