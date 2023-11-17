const searchButton = document.getElementById('search');
let searchQuery = "";

function getSearch(e){
    const parent = e.target.closest("label");
    const input = parent.querySelector("input");
    const inputValue = input.value;
    if(inputValue !== ""){
        searchQuery = inputValue;
    }
    document.getElementById('searched').innerHTML = `<strong>${searchQuery}</strong>`;
}

searchButton.addEventListener("click", getSearch);