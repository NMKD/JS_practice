var clone = require("structured-clone")
const itemsInCart = [
    { product: 'Носки', quantity: 3 },
    { product: 'Штаны', quantity: 1 },
    { product: 'Кепка', quantity: 1 },
  ]

  const deep = clone(itemsInCart)
  const cloneArr = [...itemsInCart]
  console.log(deep[0] === itemsInCart[0])
  console.log(cloneArr[0] === itemsInCart[0])
  console.log(deep)