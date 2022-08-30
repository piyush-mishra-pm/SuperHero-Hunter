import * as Views from "./Views.js";
import * as PersistenceManager from "./PersistenceManager.js";

// Favorites Event Handler: (Only one element (ul) has the listener)
const favoritesListener = document.querySelector(".favorites-listener");
favoritesListener.addEventListener("click", onFavoritesButtonPressed);

function onFavoritesButtonPressed(e) {
    console.log("outFav", e.target);
    if (e.target.matches(".li--btn-favorites")) {
        e.stopPropagation();
        console.log("inFav", e.target);
        const idRemoveFromFavorites = e.target.closest(".li--favorite-result").dataset.id;
        // Only possible to remove from favorites, as favorites page only shows favorite superheroes.
        favSuperheroList.removeHero(idRemoveFromFavorites);
        PersistenceManager.save(favSuperheroList);
        Views.generateFavoritesView(favSuperheroList);
    }
}

// Open Superhero Info page: (Only 1 listener exists).
const heroInfoListeners = document.querySelector(".open-hero-info-listener");
heroInfoListeners.addEventListener("click", onHeroInfoListenerClicked);

function onHeroInfoListenerClicked(e) {
    console.log("outInfo", e.target);
    if (e.target.closest(".li--favorite-result") && !e.target.matches(".li--btn-favorites")) {
        e.stopPropagation();
        console.log("inInfo", e.target);
        const heroIdToOpen = e.target.closest(".li--favorite-result").dataset.id;
        PersistenceManager.setKeySuperHeroIdToOpen(heroIdToOpen, favSuperheroList);
        window.location.href = "../superHero.html";
    }
}

let favSuperheroList;
function init(favList) {
    favSuperheroList = favList;
}

export { init };
