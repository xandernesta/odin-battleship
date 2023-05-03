import {renderGameboard} from './game_helpers/renderGameboard.js'
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

}

export { addGameboardsToDom, addPlayerShipsToDom }
