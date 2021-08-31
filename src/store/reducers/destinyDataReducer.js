const initialState = {}

export function sendDestinyData(state = initialState, action) {
  switch(action.type) {
    case 'SEND_DESTINY_DATA':
      return [
        action.destinyData
      ]
  }

  return state;
}
