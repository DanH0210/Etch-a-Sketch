function main() {
    const container = document.querySelector(".container");
    const squareForm = document.querySelector(".square-form");
    const cusForm = document.querySelector(".custom-form");
    const squareSel = document.querySelector("#square-shape");
    const customSel = document.querySelector("#custom-shape");
    const sideInput = document.querySelector("#one-side");
    const rowInput = document.querySelector("#row-side");
    const colInput = document.querySelector("#col-side");
    const submitBtn = document.querySelector(".submit");
    const restartBtn = document.querySelector(".restart");

    let numberOfRow = 16;
    let numberOfCol = 16;

    //Create default grid
    squareGeneration(container, numberOfRow, numberOfCol);


    //Set event listener to display the expected form
    squareSel.addEventListener("click", e => {
        squareForm.style.display = "block";
        cusForm.style.display = "none";
        sideInput.value = rowInput.value < colInput.value ? colInput.value : rowInput.value;
    });
    customSel.addEventListener("click", e => {
        squareForm.style.display = "none";
        cusForm.style.display = "block";
        rowInput.value = sideInput.value;
        colInput.value = sideInput.value;
    });
    
    //Set event listener to create a new grid with chosen size
    submitBtn.addEventListener("click", e => {

        if (squareSel.checked) {
            numberOfRow = sideInput.value;
            numberOfCol = numberOfRow;
        }
        else {
            numberOfRow = rowInput.value;
            numberOfCol = colInput.value;
        }

        if (numberOfRow > 100 || numberOfCol > 100) {
            window.alert("Please make the size of it <= 100 each sides");
            return;
        }

        squareGeneration(container, numberOfRow, numberOfCol)
    });

    //Resart the grid with current size
    restartBtn.addEventListener("click", e => {
        squareGeneration(container, numberOfRow, numberOfCol)
    });
}

//Create grid inside container element
function squareGeneration(container, numberOfRow, numberOfCol) {
    container.replaceChildren();
    const sideLength = container.clientWidth / numberOfCol;
    for (let row = 0; row < numberOfRow; ++row) {
        const rowContainer = document.createElement("div");
        rowContainer.style.cssText = `
            display: flex;
        `;
        for (let col = 0; col < numberOfCol; ++col) {
            const squareDiv = document.createElement("div");
            squareDiv.style.cssText = `
                flex: 1;
                border: 1px solid black;
                min-width: ${sideLength}px;
                min-height: ${sideLength}px;
            `;
            squareDiv.addEventListener("mouseover", e => squareDiv.style.background = "black");
                
            rowContainer.append(squareDiv);
        }
        container.append(rowContainer);
    }
}



main();