import * as APIhelper from "./APIhelper.js";
import * as Transformer from "./Transformer.js";
import * as Views from "./Views.js";
import * as PersistenceManager from "./PersistenceManager.js";

let favSuperheroList;
function init(favList) {
    favSuperheroList = favList;
}
export { init };

// --------- Search Handlers: ---------------
const btnSearch = document.getElementById("btn-search");
const inputTextSearch = document.getElementById("txt-search");
const searchStatusMessage = document.getElementById("search-message");

let searchedHeroResults;

// Possible that on webpages other than index.html, there is no search bar.
if (btnSearch) btnSearch.addEventListener("click", onSearchHeroClicked);
if (inputTextSearch) inputTextSearch.addEventListener("keyup", onInputTextSearchEnterKeyUp);

// When enter key pressed, then can initiate search.
async function onInputTextSearchEnterKeyUp(e) {
    if (e.key !== "Enter") return;
    await onSearchHeroClicked(e);
}

// When Earch btn pressed, then can initiate search.
async function onSearchHeroClicked(e) {
    const searchSuperheroText = inputTextSearch.value;
    // If there was any text entered in search bar?
    if (!searchSuperheroText) {
        searchStatusMessage.innerText = "Type a marvel superhero name to search";
        return;
    }
    btnSearch.disabled = true;
    searchStatusMessage.innerText = "Finding...";

    // Fetching API entered in search bar, transforming json response, and refreshing the view to show response.
    const jsonResponse = await APIhelper.searchCharacter(searchSuperheroText);
    searchedHeroResults = Transformer.jsonToSuperHeroArray(jsonResponse);
    if (searchedHeroResults.length == 0)
        searchStatusMessage.innerText = `No results found! [Response Code:${jsonResponse.code} ; Status:${jsonResponse.status}]`;
    else
        searchStatusMessage.innerText = `Number of results: ${searchedHeroResults.length} . [Response Code:${jsonResponse.code} ; Status:${jsonResponse.status}]`;

    Views.generateSearchResultView(searchedHeroResults);
    btnSearch.disabled = false;
}

// --------- Favorites Event Handler: ---------------
// (Only one element (ul) has the listener)
// On fav btn clicked, if already a fav, make unfav. If unfav, then make fav.
// Then Save the changes and refresh view.
const favoritesListener = document.querySelector(".favorites-listener");
favoritesListener.addEventListener("click", onFavoritesButtonPressed);

function onFavoritesButtonPressed(e) {
    if (e.target.matches(".li--btn-favorites")) {
        e.stopPropagation();
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

// --------- Open Superhero Info page: ---------------
// (Only one element (ul) has the listener).
// Save heroID clicked, then go to superHero page, which wil use that saved heroId
// to populate hero Data.
const heroInfoListeners = document.querySelector(".open-hero-info-listener");
heroInfoListeners.addEventListener("click", onHeroInfoListenerClicked);

function onHeroInfoListenerClicked(e) {
    e.preventDefault();
    if (e.target.closest(".li--search-result") && !e.target.matches(".li--btn-favorites")) {
        e.stopPropagation();
        const heroIdToOpen = e.target.closest(".li--search-result").dataset.id;
        PersistenceManager.setKeySuperHeroIdToOpen(heroIdToOpen, favSuperheroList);
        window.location.href = "../superHero.html";
    }
}
