const initialState = []

export function shoppingCart(state = initialState, action) {
  switch(action.type) {
    case 'ADD_NEW_DESTINY':
      return [
        ...state,
        action.destiny
      ]
  }

  return state;
}
