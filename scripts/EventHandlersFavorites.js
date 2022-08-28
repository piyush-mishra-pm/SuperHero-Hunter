import * as Views from "./Views.js";
import * as PersistenceManager from "./PersistenceManager.js";

// Favorites Event Handler: (Only one element (ul) has the listener)
const favoritesListener = document.querySelector(".favorites-listener");
favoritesListener.addEventListener("click", onFavoritesButtonPressed);

function onFavoritesButtonPressed(e) {
    e.preventDefault();
    if (e.target.matches(".li--btn-favorites")) {
        const idRemoveFromFavorites = e.target.closest(".li--favorite-result").dataset.id;
        // Only possible to remove from favorites, as favorites page only shows favorite superheroes.
        favSuperheroList.removeHero(idRemoveFromFavorites);
        PersistenceManager.save(favSuperheroList);
        Views.generateFavoritesView(favSuperheroList);
    }
}

let favSuperheroList;
function init(favList) {
    favSuperheroList = favList;
}

export { init };
