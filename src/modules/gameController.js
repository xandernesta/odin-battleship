import {Player} from './playerFactory.js'
const gameController = () => {

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
}
export {gameController}