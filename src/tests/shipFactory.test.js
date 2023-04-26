import {shipFactory} from '../modules/shipFactory'

describe('ship unit functions', () =>{
    //assigning variables outside beforeEach to avoid scope issues
    let testBattleship
    let testSub
    beforeEach(()=>{
        testBattleship = shipFactory('A3','A4','A5','A6','A7')
        testSub = shipFactory('F2','F3')
    })
    test('shipFactory creates a ship object', () => {
        expect(typeof testBattleship).toBe('object')
    })
    
    test('shipFactory creates a ship object with correct properties', () => {
        expect(testBattleship.shipCoordsArray).toEqual(['A3','A4','A5','A6','A7'])
    })
    test("calling hit() on a coord in battleship's coordArray changes its coord to 'hit' ", ()=>{
        expect(testBattleship.hit('A4')).toBe('hit')
        expect(testBattleship.shipCoordsArray).toEqual(['A3','hit','A5','A6','A7'])
    })
    test("calling hit() on a coord not in battleship's coordArray does not change it an returns 'not a hit' ", ()=>{
        expect(testBattleship.hit('B4')).toBe('not a hit')
        expect(testBattleship.shipCoordsArray).toEqual(['A3','A4','A5','A6','A7'])
    })
    test("calling consecutive hit()s on a coord in sub's coordArray changes its coord elements to 'hit' and isSunk() return true ", ()=>{
        expect(testSub.isSunk()).toBe(false)
        expect(testSub.hit('F2')).toBe('hit')
        expect(testSub.hit('F3')).toBe('hit')
        expect(testSub.shipCoordsArray).toEqual(['hit','hit'])
        expect(testSub.isSunk()).toBe(true)
    })

})
