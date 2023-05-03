function renderGameboards () {
  let leftContainer = document.createElement("div")
  leftContainer.classList.add("container-left")
  let leftContainerH3 = document.createElement("h3")
  leftContainerH3.textContent = "Enemy's Board"
  leftContainer.appendChild(leftContainerH3)
  let leftGameboard = document.createElement("div")
  leftGameboard.classList.add("board")
  leftGameboard.setAttribute("id", "gameboard-left")
  

  let rightContainer = document.createElement("div")
  rightContainer.classList.add("container-right")
  let rightContainerH3 = document.createElement("h3")
  rightContainerH3.textContent = 'Your Board'
  rightContainer.appendChild(rightContainerH3)
  let rightGameboard = document.createElement("div")
  rightGameboard.classList.add("board")
  rightGameboard.setAttribute("id", "gameboard-right")
  rightContainer.appendChild(rightGameboard)

  //create player1"s gameboard divs
  let rowLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  for (let i = 0; i < rowLetters.length; i++) {
    let row = document.createElement("div")
    row.classList.add("row-p1")
    row.setAttribute("id", `p1-row${rowLetters[i]}`)
    leftGameboard.appendChild(row)
  }
  leftContainer.appendChild(leftGameboard)
  document.getElementById("content").appendChild(leftContainer)
  document.getElementById("content").appendChild(rightContainer)
}

export { renderGameboards }
