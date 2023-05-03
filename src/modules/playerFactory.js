import { gameboardFactory } from './gameboardFactory.js'
const playerFactory = name => {
  let playerName = name
  let ships = []
  let gameboard = gameboardFactory()
  gameboard.init()
  const shoot = (coord, oppGameboard) => {
    return oppGameboard.receiveAttack(coord)
  }
  return {
    playerName,
    ships,
    gameboard,
    shoot
  }
}

export { playerFactory }
