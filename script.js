
//script
console.log("hello World")

const mainContainer = document.querySelector("#main-container")
const newDiv = document.createElement("div")
/* newDiv.innerText = "Check This"
mainContainer.append(newDiv) */

gridContainer = document.querySelector("#main-grid-container")
/* newGrid = document.createElement("div")
newGrid.textContent = "test new Grid" */


function createGrids(gridNumber){
    for(let i = 1; i <= gridNumber; i++){
        const createGrid = document.createElement("div")
        createGrid.classList.add("grid-items")
        gridContainer.append(createGrid)
        
    }
}
// createGrids(256)

const gridItems = document.querySelectorAll(".grid-items");

// console.log(gridItems) 


const btnGenerateGrid = document.querySelector("#btn-generate-grid")
btnGenerateGrid.addEventListener(
    "click", () => {
        // step 1: select grid container
        const gridContainer = document.querySelector("#main-grid-container")

        // step 2: initialize container (clear old divs) 
        gridContainer.replaceChildren("")
        

        // step 3: execute createGrids function with user configuration and add general class to new created divs
        createGrids2(prompt("How many grid per line?", Number(16)))

        // Step 4: indexing new divs by class created above 
        const gridItems = document.querySelectorAll(".grid-items")
        
        // step 5: add event lister to each grid item using for each loop
        gridItems.forEach(
    i => i.addEventListener(
    "mouseenter", () => {
        i.style.backgroundColor = "yellow"
    }
) ) 
/* gridContainer.style.border = "1px solid rgba(255, 195, 45, 1)" */

} 
);


function createGrids2(userInput){
    let gridNumber = userInput * userInput
    if (userInput > 100){ return createGrids2(prompt("Please enter a number below or equal to 100", Number(16))) }
    else {
    // let gridContainer = document.querySelector("#main-grid-container")
    for(let i = 1; i <= gridNumber; i++){
        const createGrid = document.createElement("div")
        createGrid.classList.add("grid-items")
        gridContainer.append(createGrid)
        gridContainer.style.cssText = `width: 400px; height: 400px;`
       // gridContainer.style.border = "1px solid rgba(255, 195, 45, 1)"
       const gridItems = document.querySelectorAll(".grid-items");
    gridItems.forEach(
    i => i.style.cssText = ` width: ${100 / userInput}%; height: ${100 / userInput}%`
)
         
    } }
}
  
// createGrids2(16)  

/* gridItems2.forEach(
    i => i.addEventListener(
    "mouseenter", () => {
        i.style.backgroundColor = "rgb(45, 196, 255)"
        i.style.cssText = " width: ; height: ;"
    }
) ) */