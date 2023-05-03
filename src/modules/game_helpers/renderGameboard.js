function renderGameboard(playerStr, domEle){
    let rowLetters = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    let gameBd = domEle
    for (let i = 0; i < rowLetters.length; i++) {
      let row = document.createElement('div')
      row.classList.add(`row-${playerStr}`, 'tr')
      row.setAttribute('id', `${playerStr}-row${rowLetters[i]}`)
      //create cells within each row
      for (let j = 0; j < 11; j++) {
        let cell = document.createElement('div')
        cell.classList.add('cell', 'td')
        cell.setAttribute('id', `${rowLetters[i]}${j}`)
        //while setting first row, add table col headers and add scope
        if(rowLetters[i] === '0'){
          if(j === 0) {
            cell.textContent = ' ';
            cell.classList.add('header')
          }
          else {
            cell.textContent = `${j}`
            cell.setAttribute('scope','col')
            cell.classList.add('header')
          }
        }
        //while setting first column, add table row headers and add scope
        if(j === 0 && isNaN(rowLetters[i])){
          cell.textContent = `${rowLetters[i]}`
          cell.setAttribute('scope','row')
          cell.classList.add('header')
        } 
        row.appendChild(cell)
      }
      gameBd.append(row)
    }
    
}
export {renderGameboard}