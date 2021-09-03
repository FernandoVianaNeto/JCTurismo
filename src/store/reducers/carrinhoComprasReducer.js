const initialState = {
  subtotal: 0,
  items: []
}

export function shoppingCart(state = initialState, action) {
  switch(action.type) {
    case 'ADD_NEW_ITEM':
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            imgLink: action.payload.imgLink,
            title: action.payload.title,
            price: action.payload.price
          }
        ]
      }

      case 'SET_NEW_SUBTOTAL':
        return {
          ...state,
          subtotal: action.payload
        }
  }

  return state;
}
