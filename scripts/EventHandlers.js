import * as APIhelper from "./APIhelper.js";
import * as Transformer from "./Transformer.js";
import * as Views from "./Views.js";

// Search Handler:
const btnSearch = document.getElementById("btn-search");
const inputTextSearch = document.getElementById("txt-search");
const searchStatusMessage = document.getElementById("search-message");

btnSearch.addEventListener("click", onSearchHeroClicked);

async function onSearchHeroClicked(e) {
    e.preventDefault();
    const searchSuperheroText = inputTextSearch.value;

    if (!searchSuperheroText) {
        searchStatusMessage.innerText = "Type a marvel superhero name to search";
        return;
    }
    btnSearch.disabled = true;
    searchStatusMessage.innerText = "Finding...";

    const jsonResponse = await APIhelper.searchCharacter(searchSuperheroText);
    const transformedResults = Transformer.jsonToSuperHeroArray(jsonResponse);
    if (transformedResults.size == 0)
        searchStatusMessage.innerText = `No results found! [Response Code:${jsonResponse.code} ; Status:${jsonResponse.status}]`;
    else
        searchStatusMessage.innerText = `Number of results: ${transformedResults.size} . [Response Code:${jsonResponse.code} ; Status:${jsonResponse.status}]`;

    Views.generateSearchResultView(transformedResults);
    btnSearch.disabled = false;
}

let favSuperheroList;
function init(favList) {
    favSuperheroList = favList;
}

export { init };
