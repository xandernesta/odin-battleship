import {renderGameboard} from './game_helpers/renderGameboard.js'
import {playerFactory} from './playerFactory.js'
function addGameboardsToDom () {
  let leftContainer = document.createElement('div')
  leftContainer.classList.add('container-left')
  let leftContainerH3 = document.createElement('h3')
  leftContainerH3.textContent = "Your Board"
  leftContainer.appendChild(leftContainerH3)
  let leftGameboard = document.createElement('div')
  leftGameboard.classList.add('board')
  leftGameboard.setAttribute('id', 'gameboard-left')

  let rightContainer = document.createElement('div')
  rightContainer.classList.add('container-right')
  let rightContainerH3 = document.createElement('h3')
  rightContainerH3.textContent = "Enemy's Board"
  rightContainer.appendChild(rightContainerH3)
  let rightGameboard = document.createElement('div')
  rightGameboard.classList.add('board')
  rightGameboard.setAttribute('id', 'gameboard-right')

  //create players' gameboard divs and appends to the domElement provided as second input 
  renderGameboard('player', leftGameboard)
  renderGameboard('enemy', rightGameboard)
  //End of player2's gameboard
  //appends to existing elements
  leftContainer.appendChild(leftGameboard)
  rightContainer.appendChild(rightGameboard)
  document.getElementById('content').appendChild(leftContainer)
  document.getElementById('content').appendChild(rightContainer)
}
function addPlayerShipsToDom(){
/*
* start with randomFleet generation for player AI fleet should get handled in gameController
* get coordinates of ships
* add classes to divs that have ships
* only change background of divs for player ships
*
*/
let player1 = playerFactory()
let aiPlayer = playerFactory()
player1.genRandomFleet()
let playerShipsCoords = []
//makes an Array of Array with each ship object's shipCoordsArray as an element
for(let i = 0;i<player1.gameboard.placedShipsArray.length;i++){
  playerShipsCoords.push(player1.gameboard.placedShipsArray[i].shipCoordsArray)
}
//because playShipsCoords is an Array of arrays, we can flatten the nested arrays into a single array to loop through to make grabbing the cells and adding to them a bit easier and not need a nested loop
let flatCoords = playerShipsCoords.flat(2)
for(let i = 0;i<flatCoords.length;i++){
  let shipCell = document.getElementById(`${flatCoords[i]}`)
  shipCell.classList.add('hasShip')
}

}

export { addGameboardsToDom, addPlayerShipsToDom }
