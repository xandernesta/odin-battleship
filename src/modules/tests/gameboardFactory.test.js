import { gameboardFactory } from '../gameboardFactory.js'

describe('Gameboard unit functions', () => {
    //assigning variables outside beforeEach to avoid scope issues
    let testGameboard
    
    beforeEach(() => {
        testGameboard = gameboardFactory()
        testGameboard.init()
    })
    test('Gameboard initializes to an array of length 100', ()=>{
        const testArr = []
        for (let i =0; i <100; i++){
            testArr.push({hasShip:false, isHit:false})
        }
        expect(testGameboard.gameboard).toMatchObject(testArr)
    })
    test('Gameboard can place a ship by calling shipFactory',()=>{
        testGameboard.placeShip('A2', 'A3')
        //ship found in testGameboard's placedShipsArray at expected index (0) aka first ship added to this array
        expect(testGameboard.placedShipsArray[0].shipCoordsArray).toEqual(['A2','A3'])
    })
    test('Gameboard placeShip() function correctly calls translateCoords method to find index of coord in gameboard',()=>{
        //no ship placed - object at expect index (1 - coordinate of A2 translates to box 2 on gameboard)
        expect(testGameboard.gameboard[1].hasShip).toBeFalsy()
        //place ship
        testGameboard.placeShip('A2', 'A3')
        //ship found in testGameboard's placedShipsArray at expected index (0) aka first ship added to this array
        expect(testGameboard.placedShipsArray[0].shipCoordsArray).toEqual(['A2','A3'])
        //testGamboard's gameboard has the object's hasShip property at expected index (1 - coordinate of A2 translates to box 2 on gameboard ) now set to true
        expect(testGameboard.gameboard[1].hasShip).toBeTruthy()
    })
    test('Gameboard isValidPlacement() returns true if coord is already occupied', ()=>{
        testGameboard.placeShip('A2', 'A3')
        expect(testGameboard.placeShip('A3', 'B3')).toBe('Invalid Placement')
    })
    test('Gameboard isValidPlacement() returns true if coord is not in gameboard', ()=>{
        testGameboard.placeShip('A2', 'A3')
        expect(testGameboard.placeShip('A0','A1')).toBe('Invalid Placement')
    })

})