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
    //testing new function for receiving attacks on the board
    describe('receiveAttack function', ()=>{
        beforeEach(() => {
            if(testGameboard.placedShipsArray.filter(e => e.shipCoordsArray.includes('A2') || e.shipCoordsArray.includes('A3')).length ===0)
            testGameboard.placeShip('A2','A3')
        })
        afterEach(()=>{
            testGameboard = gameboardFactory()
            testGameboard.init()
        })
        test('calling receiveAttack on an unoccupied space returns a miss by changing gamboard.isHit to true',()=>{
            expect(testGameboard.gameboard[59].isHit).toBe(false)
            expect(testGameboard.gameboard[59].hasShip).toBe(false)
            testGameboard.receiveAttack('F10')
            expect(testGameboard.gameboard[59].isHit).toBe(true)
            expect(testGameboard.gameboard[59].hasShip).toBe(false)
        })
        test('calling receiveAttack on a ship-occupied space returns a hit by changing gamboard.isHit to true and gameboard.hasShip should be true',()=>{
            expect(testGameboard.gameboard[1].isHit).toBe(false)
            expect(testGameboard.gameboard[1].hasShip).toBe(true)
            testGameboard.receiveAttack('A2')
            expect(testGameboard.gameboard[1].isHit).toBe(true)
            expect(testGameboard.gameboard[1].hasShip).toBe(true)
            let hitShip = testGameboard.getShipByCoord('A2')
            expect(hitShip.shipCoordsArray).toEqual(['hit','A3'])
        })
        test('getShipByCoord returns a ship in gameboard.placedShipsArray that matches the coord parameter',()=>{
            expect(testGameboard.getShipByCoord('A3')).toEqual(expect.objectContaining({
                shipCoordsArray: [ 'A2', 'A3' ],
            }))
        })
    })
    

})