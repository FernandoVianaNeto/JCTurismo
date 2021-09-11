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
            price: action.payload.price,
            amount: action.payload.amount,
            categoria: action.payload.categoria
          }
        ]
      }

    case 'SET_NEW_SUBTOTAL':
      return {
        ...state,
        subtotal: action.subtotals
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: action.destinys
      }

    case 'SET_NEW_AMOUNT':
      return {
        ...state,
        items: action.payload.amount
      }

      default:
        return state;
  }

}
