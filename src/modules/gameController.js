import {playerFactory} from './playerFactory.js'
import {addPlayerShipsToDom, addCellListeners} from './domFunctions.js'
const gameController = () => {
    const init = () => {
        let player1 = playerFactory()
        let aiPlayer = playerFactory()
        player1.genRandomFleet()
        aiPlayer.genRandomFleet()
        addPlayerShipsToDom(player1,aiPlayer)
        addCellListeners(player1,aiPlayer.gameboard)
        player1.isTurn=true

    }
    const checkIfWinner = (player1, player2) =>{
        let winner = '';
        if(player1.gameboard.allShipsHaveSunk()){
            winner = 'player2'
        }
        if(player2.gameboard.allShipsHaveSunk()){
            winner = 'player1'
        }
        return winner
    }
    return{
        init,
    }
}
export { gameController }