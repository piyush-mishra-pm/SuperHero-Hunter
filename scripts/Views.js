/**
    All View related functions, for the Search, Favorites and SuperHero page.
    Uses transformed data from Transformer.js, or list of superheroes, to populate
    template list items into ul list results.
 */

// Search Page:
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

// Superhero info page.
const IMG_TYPE_CHAR_INFO_PAGE = "standard_fantastic";
function generateSuperheroCharacterInfoPage(charInfo, comicInfo, seriesInfo) {
    generateCharInfoSection(charInfo);
    generateComicInfoSection(comicInfo);
    generateSeriesInfoSection(seriesInfo);
}

function generateCharInfoSection(charInfo) {
    document.getElementById(
        "info-message"
    ).innerText = `[Response status: ${charInfo.status} ; code: ${charInfo.code}]`;
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

function generateComicInfoSection(comicsInfo) {
    const ulComics = document.getElementById("ul--comics-info");
    const templateComics = document.getElementById("template--li-comics-series");
    const IMG_TYPE_IN_COMICS = "standard_fantastic";
    comicsOrSeriesCommonMarkUpCode(comicsInfo, ulComics, templateComics, IMG_TYPE_IN_COMICS);
}

function generateSeriesInfoSection(seriesInfo) {
    const ulSeries = document.getElementById("ul--series-info");
    const templateSeries = document.getElementById("template--li-comics-series");
    const IMG_TYPE_IN_SERIES = "standard_fantastic";
    comicsOrSeriesCommonMarkUpCode(seriesInfo, ulSeries, templateSeries, IMG_TYPE_IN_SERIES);
}

function comicsOrSeriesCommonMarkUpCode(sectionInfo, ul, templateComic, IMG_TYPE) {
    if (!sectionInfo.items.length) {
        ul.parentNode.querySelector(".message").innerText = "No items found.";
    } else {
        sectionInfo.items.forEach((comic) => {
            const cloned = templateComic.content.cloneNode(true);
            cloned.querySelector(".name").innerText = comic.name;
            cloned.querySelector(".description").innerText = comic.description;
            cloned.querySelector(".picture").src = `${comic.thumbnail.path}/${IMG_TYPE}.${comic.thumbnail.extension}`;
            ul.appendChild(cloned);
        });
    }
}

export { init, generateSearchResultView, generateFavoritesView, generateSuperheroCharacterInfoPage };
