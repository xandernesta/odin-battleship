import './styles.css';
import {addGameboardsToDom, addPlayerShipsToDom} from './modules/domFunctions.js'
import { gameController } from './modules/gameController.js';

addGameboardsToDom()
//these might need to go into gameController
const game = gameController()
game.init()
//generateAI fleet
