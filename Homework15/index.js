function fetchData(){
    fetch ("https://official-joke-api.appspot.com/random_joke")
    .then((responce) => responce.json())
    .then((obj) => {
        const {setup, punchline} = obj
        const result = document.getElementById("content");
        result.textContent = "";
        const userList = document.createElement("ul");
        const lisItem = document.createElement("li");
        lisItem.textContent = `${setup} ${punchline}`;
        userList.appendChild(lisItem);
        result.appendChild(userList)
    })
    }

document.getElementById("updateButton").addEventListener("click", fetchData);