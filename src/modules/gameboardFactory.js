import { shipFactory } from './shipFactory.js'
import { translateCoordToIndex } from './helperFunctions.js'

const gameboardFactory = () => {
  let gameboard = []
  let placedShipsArray = []
  const init = () => {
    //initialize gameboard to array of length 100 with the 2 props both set to false
    for (let i = 0; i < 100; i++) {
      gameboard.push({ hasShip: false, isHit: false })
    }
  }
  const placeShip = (...coords) => {
    let gameboardIndexes = []
    coords.forEach(coord => {
      let index = translateCoordToIndex(coord)
      gameboardIndexes.push(index)
    })
    if (isValidPlacement(...gameboardIndexes)===true) {
      //create ship
      const ship = shipFactory(...coords)
      //add ship to Gameboard's placedShipsArray
      placedShipsArray.push(ship)
      //pass each coordinate to the translate function to find its Index in the gameboard in order to update hasShip to true
      for(let i =0; i<gameboardIndexes.length;i++){
        let gIndex = gameboardIndexes[i]
        gameboard[gIndex].hasShip = true
      }
    } else return 'Invalid Placement'
  }
  const isValidPlacement = (...indexes) => {
    let isValidArray = []
    let isValid = true
    indexes.forEach(index => {
      if (index < 0 || index >= gameboard.length) isValidArray.push(false)
      else if (gameboard[index].hasShip === true) isValidArray.push(false)
      else isValidArray.push(true)
    })
    if (isValidArray.includes(false)){isValid = false}
    return isValid
  }
  return {
    gameboard,
    init,
    placeShip,
    placedShipsArray,
    isValidPlacement
  }
}

export { gameboardFactory }
