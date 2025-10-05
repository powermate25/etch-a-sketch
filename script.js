
//script
console.log("hello World")

const mainContainer = document.querySelector("#main-container")
const newDiv = document.createElement("div")

gridContainer = document.querySelector("#main-grid-container")

/// First page load default grid settings
createGrids(16)
const gridItems = document.querySelectorAll(".grid-items");
gridItems.forEach(
    i => i.addEventListener(
    "pointerenter", (e) => {
        i.style.backgroundColor = "yellow"
        i.addEventListener("pointerdown", () => i.releasePointerCapture(e.pointerId) )    
    }
))
/// Above are default grid settings for first time visitor with 16 x 16 grid



const btnGenerateGrid = document.querySelector("#btn-generate-grid")
btnGenerateGrid.addEventListener(
    "click", () => {
        // step 1: select grid container
        const gridContainer = document.querySelector("#main-grid-container")

        // step 2: initialize container (clear old divs) 
        gridContainer.replaceChildren("")
        
        // step 3: execute createGrids function with user configuration and add general class to new created divs
        createGrids(prompt("How many squares per line?", Number(16)))

        // Step 4: indexing new divs by class created above 
        const gridItems = document.querySelectorAll(".grid-items")
 
        // step 5: add event lister to each grid item using for each loop
        gridItems.forEach(
    i => i.addEventListener(
    "pointerenter", () => {
        i.style.backgroundColor = "yellow"
        i.addEventListener("pointerdown", (e) => {e.target.releasePointerCapture(e.pointerId)})
    }) ) 
}
);


// random grid color generator

const btnGenerateGridRandomColor = document.querySelector("#btn-generate-grid2")
btnGenerateGridRandomColor.addEventListener(
    "click", () => {
        // step 1: select grid container
        const gridContainer = document.querySelector("#main-grid-container")

        // step 2: initialize container (clear old divs) 
        gridContainer.replaceChildren("")

        // step 3: execute createGrids function with user configuration and add general class to new created divs
        createGrids(prompt("How many squares per line?", Number(16)))

        // Step 4: indexing new divs by class created above 
        const gridItems = document.querySelectorAll(".grid-items")
        
        // step 5: add event lister to each grid item using for each loop
        gridItems.forEach(
    i => i.addEventListener(
    "pointerenter", (e) => {
        i.style.backgroundColor = `rgb( ${Math.floor(Math.random()*200)}, ${Math.floor(Math.random()*200)}, ${Math.floor(Math.random()*200)})`
        i.addEventListener("pointerdown", () => i.releasePointerCapture(e.pointerId) )
     }
    ) ) 
}
);

function createGrids(userInput){
    let gridNumber = userInput * userInput
    if (userInput > 100){ return createGrids2(prompt("Please enter a number below or equal to 100", Number(16))) }
    else {
    
    for(let i = 1; i <= gridNumber; i++){
        const createGrid = document.createElement("div")
        createGrid.classList.add("grid-items")
        gridContainer.append(createGrid)
        gridContainer.style.cssText = `width: 400px; height: 400px;`
       const gridItems = document.querySelectorAll(".grid-items");
    gridItems.forEach(
    i => i.style.cssText = ` width: ${100 / userInput}%; height: ${100 / userInput}%`
)
         
    } }
}

