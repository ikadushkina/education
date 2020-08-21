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
//    var items=1;
// function AddItem() {
// div=document.getElementById("items");
// button=document.getElementById("add");
// items++;
// newItem="<strong>Поле " + items + ": </strong>";
// newItem+="<input=\"text\" name=\"item" + items;
// newItem+="\" size=\"45\"><br>";
// newNode=document.createElement("span");
// newNode.innerHTML=newItem;
// div.insertBefore(newNode,button);
// }