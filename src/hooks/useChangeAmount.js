export const useChangeAmount = () => {
  function addAmount({ counter }) {
    console.log(counter)
  }

  function removeAmount({ counter }) {
    console.log(counter)
  }

  return { addAmount, removeAmount }
}
