export const useAddItem = () => {

  function addNewItem({ imgLink, title, price }) {
    console.log(title, price, imgLink)
  }

  return { addNewItem }
}
