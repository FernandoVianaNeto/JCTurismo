export const sendDestinyData = (destinyData) => ({
  type: 'SEND_DESTINY_DATA',
  destinyData: destinyData,
})

export const addNewDestiny = (destiny) => ({
  type: 'ADD_NEW_ITEM',
  item: destiny,
})
