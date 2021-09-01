const initialState = []

export function shoppingCart(state = initialState, action) {
  switch(action.type) {
    case 'ADD_NEW_ITEM':
      return [
        ...state,
        {
          id: action.payload.id,
          imgLink: action.payload.imgLink,
          title: action.payload.title,
          price: action.payload.price
        }
      ]
  }

  return state;
}
