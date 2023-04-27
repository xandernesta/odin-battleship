export const translateCoordToIndex = coord => {
    if (coord.length === 2) {
      const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
      const letterChar = coord[0]
      if (possibleLetters.includes(letterChar) && !isNaN(coord[1])) {
        const box = parseInt(
          possibleLetters.findIndex(ele => ele === letterChar) + coord[1]
        )
        //index is one less than the box on gameboard
        return box - 1
      } else return 'Invalid Coordinates'
    } else if (coord.length === 3) {
      const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
      const letterChar = coord[0]
      if (possibleLetters.includes(letterChar)  && !isNaN(coord[1])  && !isNaN(coord[2]) && (coord[1] + coord[2] < 11)) {
        const box =
          parseInt(possibleLetters.findIndex(ele => ele === letterChar) * 10) + 10
        //index is one less than the box on gameboard
        return box - 1
      } else return 'Invalid Coordinates'
    } else {
      return 'Invalid Coordinates'
    }
  }

