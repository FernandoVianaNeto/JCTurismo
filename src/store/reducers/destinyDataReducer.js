const initialState = {
  imgLink: null,
  title: null,
  price: null,
  subtitle: null,
  link: null,
  description: null,
  id: null,
  categoria: null
}

export function sendDestinyData(state = initialState, action) {
  switch(action.type) {
    case 'SEND_DESTINY_DATA':
      return {
        id: action.payload.id,
        imgLink: action.payload.imgLink,
        title: action.payload.title,
        price: action.payload.price,
        subtitle: action.payload.subtitle,
        link: action.payload.link,
        description: action.payload.description,
        categoria: action.payload.categoria
      }
  }

  return state;
}
