const replaceItem = (index, item, array) => {
  let newArray = [
    ...array.slice(0, index),
    item,
    ...array.slice(index+1, (array.length))
  ]
  return newArray
}

export default replaceItem;
