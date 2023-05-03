import { playerFactory } from '../playerFactory.js'

describe('playerFactory initialization', () => {
  test('initializing a player creates a name variable, empty ships array and initializes a gameboard for them', () => {
    let humanBob = playerFactory('Bob')
    expect(humanBob).toEqual(
      expect.objectContaining({
        playerName: 'Bob',
        gameboard: expect.objectContaining({
          placedShipsArray: []
        })
      })
    )
  })
})
describe('playerFactory functions', () => {
    //need to initialize player variables outside of beforeEach to use in tests
    let human
    let aI
    beforeEach(()=>{
        human = playerFactory('James')
        aI = playerFactory('AI')
        human.gameboard.placeShip('A3','A4')
        aI.gameboard.placeShip('B5','C5','D5')
    })
    test("human shoots at H3 and misses",()=>{
        expect(human.shoot('H3',aI.gameboard)).toBe('not a hit')
    })
    test("AI shoots at A4 and hits",()=>{
        expect(aI.shoot('A4',human.gameboard)).toBe('hit')
    })
    test("player can generate a valid random ship of consecutive coords on their board ", ()=>{
      human.genRandomFleet()
      expect(human.gameboard.placedShipsArray).toEqual(expect.arrayContaining([
        expect.objectContaining({shipCoordsArray:['C2','C3','C4','C5','C6']}),
        expect.objectContaining({shipCoordsArray:['E2','E3','E4','E5']}),
        expect.objectContaining({shipCoordsArray:['A1','B1','C1']}),
        expect.objectContaining({shipCoordsArray:['G2','G3','G4']}),
        expect.objectContaining({shipCoordsArray:['I2','I3']})
      ]))
    })
  })

