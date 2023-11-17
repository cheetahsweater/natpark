const searchButton = document.getElementById('search')
const searchQuery = ""

function getSearch(e){
    const parent = e.target.closest("label")
    const input = parent.querySelector("input")
    const inputValue = input.value
    if(inputValue !== ""){
        searchQuery.push(inputValue)
    }
    document.getElementById('searched').innerHTML = searchQuery
}

searchButton.addEventListener("click", getSearch)