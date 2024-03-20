const formElement = document.getElementById("form");
const listElement = document.getElementById("product-list");
const clearAllBtn = document.getElementById("clear");
const clearOneBtn = document.getElementById("clear-one");
//console.log(clearOneBtn);

const products = [];

const clearList = function(){
    while(listElement.hasChildNodes()){
        listElement.firstChild.remove();
    }
}
const clearOne = function(){
    if(listElement.hasChildNodes()){
        listElement.firstChild.remove();
    }
}

function clearInputs (event){
    event.target.product.value ="";
}

function changeStatus(event){
    if(event.target.style.textDecoration === "line-through"){
        event.target.style.textDecoration = "none";
    }else{
        event.target.style.textDecoration = "line-through";
    }
}

clearAllBtn.addEventListener("click", clearList);
clearOneBtn.addEventListener("click", clearOne);
listElement.addEventListener("click", changeStatus);

formElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    const element = {
        name: event.target.product.value
    };
    products.push(element);

    const liElement = document.createElement("li");
    liElement.textContent = `${element.name}`
    listElement.append(liElement);
    clearInputs(event);
    
});

