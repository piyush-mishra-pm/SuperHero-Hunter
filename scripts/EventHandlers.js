import * as APIhelper from "./APIhelper.js";
import * as Transformer from "./Transformer.js";
import * as Views from "./Views.js";
import * as PersistenceManager from "./PersistenceManager.js";

// Search Handler:
const btnSearch = document.getElementById("btn-search");
const inputTextSearch = document.getElementById("txt-search");
const searchStatusMessage = document.getElementById("search-message");

let searchedHeroResults;

// Possible that on webpages other than index.html, there is no search bar.
if (btnSearch) btnSearch.addEventListener("click", onSearchHeroClicked);

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
    searchedHeroResults = Transformer.jsonToSuperHeroArray(jsonResponse);
    if (searchedHeroResults.length == 0)
        searchStatusMessage.innerText = `No results found! [Response Code:${jsonResponse.code} ; Status:${jsonResponse.status}]`;
    else
        searchStatusMessage.innerText = `Number of results: ${searchedHeroResults.length} . [Response Code:${jsonResponse.code} ; Status:${jsonResponse.status}]`;

    Views.generateSearchResultView(searchedHeroResults);
    btnSearch.disabled = false;
}

// Favorites Event Handler: (Only one element (ul) has the listener)
const favoritesListener = document.querySelector(".favorites-listener");
favoritesListener.addEventListener("click", onFavoritesButtonPressed);

function onFavoritesButtonPressed(e) {
    e.preventDefault();
    if (e.target.matches(".li--btn-favorites")) {
        const idToCheckFavorite = e.target.closest(".li--search-result").dataset.id;
        const isAFavorite = favSuperheroList.isFavorite(idToCheckFavorite);
        if (!isAFavorite) {
            // Add to Favorites:
            const findHeroDataInSearchResults = searchedHeroResults.find((hero) => {
                return hero.id == idToCheckFavorite;
            });
            favSuperheroList.addHero(findHeroDataInSearchResults);
        } else {
            // Remove from favorites:
            favSuperheroList.removeHero(idToCheckFavorite);
        }
        PersistenceManager.save(favSuperheroList);
        Views.generateSearchResultView(searchedHeroResults);
    }
}

let favSuperheroList;
function init(favList) {
    favSuperheroList = favList;
}

export { init };
