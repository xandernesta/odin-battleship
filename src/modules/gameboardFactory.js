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
    if (isValidPlacement(...gameboardIndexes) === true) {
      //create ship
      const ship = shipFactory(...coords)
      //add ship to Gameboard's placedShipsArray
      placedShipsArray.push(ship)
      //pass each coordinate to the translate function to find its Index in the gameboard in order to update hasShip to true
      for (let i = 0; i < gameboardIndexes.length; i++) {
        let gIndex = gameboardIndexes[i]
        gameboard[gIndex].hasShip = true
      }
    } else throw new Error('Invalid Placement')
  }
  const isValidPlacement = (...indexes) => {
    let isValidArray = []
    let isValid = true
    indexes.forEach(index => {
      if (index < 0 || index >= gameboard.length) isValidArray.push(false)
      else if (gameboard[index].hasShip === true) isValidArray.push(false)
      else isValidArray.push(true)
    })
    if (isValidArray.includes(false)) {
      isValid = false
    }
    return isValid
  }
  const receiveAttack = coord => {
    const gbIndex = translateCoordToIndex(coord)
    gameboard[gbIndex].isHit = true
    let hitOrNot = 'not a hit'
    if (gameboard[gbIndex].hasShip === true) {
      hitOrNot = getShipByCoord(coord).hit(coord)
    }
    return hitOrNot
  }
  const getShipByCoord = coord => {
    let foundShip = placedShipsArray.reduce(ele =>
      ele.shipCoordsArray.includes(coord)
    )
    return foundShip
  }
  const allShipsHaveSunk = () => {
    let allAreSunk = true
    for (let i = 0; i < placedShipsArray.length; i++) {
      if (placedShipsArray[i].isSunk() === false) {
        allAreSunk = false
        break
      }
    }
    return allAreSunk
  }
  return {
    gameboard,
    init,
    placeShip,
    placedShipsArray,
    receiveAttack,
    getShipByCoord,
    allShipsHaveSunk
  }
}

export { gameboardFactory }
