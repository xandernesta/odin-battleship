const shipFactory = (...coords) => {
  const shipCoordsArray = Array()
  coords.map(coord => shipCoordsArray.push(coord))
  const hit = coord => {
    if (shipCoordsArray.includes(coord)) {
      const hitIndex = shipCoordsArray.findIndex(ele => ele === coord)
      shipCoordsArray[hitIndex] = 'hit'
      return 'hit'
    }
  }
  let isSunk = () => {
    if (shipCoordsArray.every(ele => ele === 'hit')) return true
    else return false
  }

  return {
    shipCoordsArray,
    isSunk,
    hit
  }
}

export { shipFactory }
