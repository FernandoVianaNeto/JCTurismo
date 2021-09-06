const initialState = {
  id: null,
  categoria1: null,
  categoria2: null,
  categoria3: null,
  price1: null,
  price2: null,
  price3: null,
  title: null,
  subtitle: null,
  description: null,
}

export function sendPackageData(state = initialState, action) {
  switch(action.type) {
    case 'SEND_PACKAGE_DATA':
      return {
        id: action.payload.id,
        categoria1: action.payload.categoria1,
        categoria2: action.payload.categoria2,
        categoria3: action.payload.categoria3,
        price1: action.payload.price1,
        price2: action.payload.price2,
        price3: action.payload.price3,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        description: action.payload.description,
        imgLink: action.payload.imgLink
      }
  }

  return state;
}
