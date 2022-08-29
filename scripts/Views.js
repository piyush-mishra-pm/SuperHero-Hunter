const ulSearchResults = document.getElementById("ul--search-results");
const templateSearchResults = document.getElementById("template-li--search-result");
const IMG_TYPE_IN_SEARCH_RESULTS = "standard_fantastic";

function generateSearchResultView(searchResults) {
    ulSearchResults.innerHTML = "";
    factoryMarkUp(
        searchResults,
        ulSearchResults,
        templateSearchResults,
        ".li--search-result",
        IMG_TYPE_IN_SEARCH_RESULTS
    );
}

// Favorites Page:
const ulFavorites = document.getElementById("ul--favorites-list");
const templateFavoriteHeroes = document.getElementById("template--favorites-list");
const IMG_TYPE_IN_FAVORITES = "standard_fantastic";

function generateFavoritesView(favListObject) {
    favSuperheroList = favListObject;
    ulFavorites.innerHTML = "";
    factoryMarkUp(
        favSuperheroList.list,
        ulFavorites,
        templateFavoriteHeroes,
        ".li--favorite-result",
        IMG_TYPE_IN_FAVORITES
    );
}

let favSuperheroList;
function init(favList) {
    favSuperheroList = favList;
}

// Common to Search and Favorites Page:
function factoryMarkUp(results, ul, template, liId, IMG_TYPE) {
    results.forEach((hero) => {
        const cloned = template.content.cloneNode(true);
        console.log(liId, cloned);
        cloned.querySelector(liId).dataset.id = hero.id;
        cloned.querySelector(".li--name").innerText = hero.name;
        cloned.querySelector(".li--id").innerText = hero.id;
        cloned.querySelector(".li--description").innerText = hero.description;
        cloned.querySelector(".li--img").src = hero.getImageSrcForImageType(IMG_TYPE);

        // Change Fav button text to remove/add depending upon already fav or not.
        const favBtn = cloned.querySelector(".li--btn-favorites");
        favBtn.innerHTML = favSuperheroList.isFavorite(hero.id) ? "Remove from Favorites" : "Add to Favorites";

        ul.appendChild(cloned);
    });
}
const IMG_TYPE_CHAR_INFO_PAGE = "standard_fantastic";
function generateSuperheroCharacterInfoPage(charInfo) {
    console.log(charInfo);
    document.getElementById(
        "info-message"
    ).innerText = `[Response status: ${charInfo.status} ; code: ${charInfo.code}]`;
    console.log(document.querySelector(".hero-info-div"));
    document.querySelector(".hero-info-div").dataset.id = charInfo.id;

    document.querySelector(".info--name").innerText = charInfo.name;
    document.querySelector(".info--id").innerText = charInfo.id;

    document.querySelector(".info--description").innerText = charInfo.description;
    document.querySelector(
        ".info--img"
    ).src = `${charInfo.thumbnail.path}/${IMG_TYPE_CHAR_INFO_PAGE}.${charInfo.thumbnail.extension}`;

    // Change Fav button text to remove/add depending upon already fav or not.
    const favBtn = document.querySelector(".info--btn-favorites");
    favBtn.innerHTML = favSuperheroList.isFavorite(charInfo.id) ? "Remove from Favorites" : "Add to Favorites";
}

export { init, generateSearchResultView, generateFavoritesView, generateSuperheroCharacterInfoPage };
