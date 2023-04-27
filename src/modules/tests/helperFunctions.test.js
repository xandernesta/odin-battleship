import {translateCoordToIndex} from '../helperFunctions.js'

test('translateCoordToIndex accepts only 2 or 3 character coordinates',()=>{
    expect(translateCoordToIndex('A1')).toEqual(0)
    expect(translateCoordToIndex('J10')).toEqual(99)
    expect(translateCoordToIndex('1')).toBe('Invalid Coordinates')
    expect(translateCoordToIndex('1234')).toBe('Invalid Coordinates')
})
test('translateCoordToIndex translates only valid coordinates',()=>{
    expect(translateCoordToIndex('J10')).toEqual(99)
    expect(translateCoordToIndex('J11')).toBe('Invalid Coordinates')
    expect(translateCoordToIndex('AB')).toBe('Invalid Coordinates')
    expect(translateCoordToIndex('K1')).toBe('Invalid Coordinates')
    expect(translateCoordToIndex('A1K')).toBe('Invalid Coordinates')
    expect(translateCoordToIndex('A11')).toBe('Invalid Coordinates')
    expect(translateCoordToIndex('A10')).toEqual(9)
})