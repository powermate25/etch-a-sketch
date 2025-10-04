
//script
console.log("hello World")

const mainContainer = document.querySelector("#main-container")
const newDiv = document.createElement("div")
newDiv.innerText = "Check This"
mainContainer.append(newDiv)

gridContainer = document.querySelector("#main-grid-container")
newGrid = document.createElement("div")
newGrid.textContent = "test new Grid"


function createGrids(gridNumber){
    for(let i = 1; i <= gridNumber; i++){
        const createGrid = document.createElement("div")
        createGrid.classList.add("grid-items")
        gridContainer.append(createGrid)
        
    }
}
createGrids(256)

const gridItem = document.querySelectorAll(".grid-items");

console.log(gridItem) 

gridItem.forEach(
    i => i.addEventListener(
    "mouseenter", () => {
        i.style.backgroundColor = "rgb(45, 196, 255)";
    }
) 
) 