function renderGameboards () {
  let leftContainer = document.createElement('div')
  leftContainer.classList.add('container-left')
  let leftContainerH3 = document.createElement('h3')
  leftContainerH3.textContent = "Your Board"
  leftContainer.appendChild(leftContainerH3)
  let leftGameboard = document.createElement('div')
  leftGameboard.classList.add('board')
  leftGameboard.setAttribute('id', 'gameboard-left')

  let rightContainer = document.createElement('div')
  rightContainer.classList.add('container-right')
  let rightContainerH3 = document.createElement('h3')
  rightContainerH3.textContent = "Enemy's Board"
  rightContainer.appendChild(rightContainerH3)
  let rightGameboard = document.createElement('div')
  rightGameboard.classList.add('board')
  rightGameboard.setAttribute('id', 'gameboard-right')

  //create player1's gameboard divs
  let rowLetters = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  for (let i = 0; i < rowLetters.length; i++) {
    let rowP1 = document.createElement('div')
    rowP1.classList.add('row-p1', 'tr')
    rowP1.setAttribute('id', `p1-row${rowLetters[i]}`)
    //create cells within each row
    for (let j = 0; j < 11; j++) {
      let cellP1 = document.createElement('div')
      cellP1.classList.add('cell', 'td')
      cellP1.setAttribute('id', `${rowLetters[i]}${j}`)
      //while setting first row, add table col headers and add scope
      if(rowLetters[i] === '0'){
        if(j === 0) {
          cellP1.textContent = ' ';
          cellP1.classList.add('header')
        }
        else {
          cellP1.textContent = `${j}`
          cellP1.setAttribute('scope','col')
          cellP1.classList.add('header')
        }
      }
      //while setting first column, add table row headers and add scope
      if(j === 0 && isNaN(rowLetters[i])){
        cellP1.textContent = `${rowLetters[i]}`
        cellP1.setAttribute('scope','row')
        cellP1.classList.add('header')
      } 
      rowP1.appendChild(cellP1)
    } 
    leftGameboard.appendChild(rowP1)
  }
  //End of player1's gameboard

    //create player2's gameboard divs
    for (let i = 0; i < rowLetters.length; i++) {
      let rowP2 = document.createElement('div')
      rowP2.classList.add('row-p2', 'tr')
      rowP2.setAttribute('id', `p2-row${rowLetters[i]}`)
      //create cells within each row
      for (let j = 0; j < 11; j++) {
        let cellP2 = document.createElement('div')
        cellP2.classList.add('cell', 'td')
        cellP2.setAttribute('id', `${rowLetters[i]}${j}`)
        //while setting first row, add table col headers and add scope
        if(rowLetters[i] === '0'){
          if(j === 0) {
            cellP2.textContent = ' ';
            cellP2.classList.add('header')
          }
          else {
            cellP2.textContent = `${j}`
            cellP2.setAttribute('scope','col')
            cellP2.classList.add('header')
          }
        }
        //while setting first column, add table row headers and add scope
        if(j === 0 && isNaN(rowLetters[i])){
          cellP2.textContent = `${rowLetters[i]}`
          cellP2.setAttribute('scope','row')
          cellP2.classList.add('header')
        } 
        rowP2.appendChild(cellP2)
      } 
      rightGameboard.appendChild(rowP2)
    }
    //End of player2's gameboard
  //appends to existing elements
  leftContainer.appendChild(leftGameboard)
  rightContainer.appendChild(rightGameboard)
  document.getElementById('content').appendChild(leftContainer)
  document.getElementById('content').appendChild(rightContainer)
}

export { renderGameboards }
