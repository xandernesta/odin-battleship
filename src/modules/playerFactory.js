import { gameboardFactory } from './gameboardFactory.js'
const playerFactory = name => {
  let playerName = name
  let isTurn = false
  //let ships = []
  let gameboard = gameboardFactory()
  gameboard.init()
  const shoot = (coord, oppGameboard) => {
    return oppGameboard.receiveAttack(coord)
  }
  const takeTurn = (coordToShoot, opponentsGameboard) => {
    //set turn tracker var to true
    isTurn = true
    //make attack
    shoot(coordToShoot, opponentsGameboard)

  }
/* started this random ship generator but think I will explore manual player selection first   
const genRandomShip = (length) => {
    let axis = ['x','y']
    let direction = axis[Math.floor(Math.random()* axis.length)]
    let coordLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    let startLetter = coordLetters[Math.floor(Math.random() * coordLetters.length)] 
    let startNum = Math.floor(Math.random() * 10) + 1
    if (direction === 'x') {
      let coords = []
      for(let i=0;i<length;i++){
        if(i===0){
          coords.push(`${startLetter}+${startNum}`)
        }
        else{
          coords.push(`${startLetter}+${startNum + i}`)
        }
      }
      gameboard.placeShip(coords)
    }
    if (direction === 'y') {}
    let coords = []
      for(let i=0;i<length;i++){
        if(i===0){
          coords.push(`${startLetter}+${startNum}`)
        }
        else {
          let arrayIndex = coordLetters.indexOf(startLetter)
          coords.push(`${coordLetters[arrayIndex+i]}+${startNum}`)
        }
      }
      gameboard.placeShip(coords)
  } */
  const genRandomFleet = () => {
    // for now I will hardcode my own boards to use until ship placement is implemented
    // 1x 5-coord ship, 1x 4-coord ship, 2x 3 coord ship, 1x 2 coord ship, 5 ships in total
    gameboard.placeShip('C2','C3','C4','C5','C6')
    gameboard.placeShip('E2','E3','E4','E5')
    gameboard.placeShip('A1','B1','C1')
    gameboard.placeShip('G2','G3','G4')
    gameboard.placeShip('I2','I3')

  }
  return {
    playerName,
    //ships,
    gameboard,
    shoot,
    isTurn,
    takeTurn,
    //genRandomShip,
    genRandomFleet
  }
}

export { playerFactory }
