const removeFromArray = (i, a) => {
  return [
    ...a.slice(0, i),
    ...a.slice(i+1, (a.length))
  ]
}

export default removeFromArray
