function addItem() {
    //last child
    const id = document.querySelectorAll('#inputs-container>input').length - 1;
    const value = document.getElementById(id).value;
    let newValue =  id % 2 === 0 ?  value.toUpperCase() : value.toLowerCase()

    if (value === "555") {
        newValue = "---";
    }

    createNewInput(newValue, id+1)
}

function createNewInput(value, id) {
     const div = document.getElementById("inputs-container");
     const newInput = document.createElement("input");
     newInput.value =  value;
     newInput.id = id;
     div.appendChild(newInput);
}


