const ulSearchResults = document.getElementById("ul--search-results");
const templateSearchResults = document.getElementById("template-li--search-result");
const IMG_TYPE_IN_SEARCH_RESULTS = "standard_fantastic";
let favSuperheroList;

function generateSearchResultView(searchResults) {
    ulSearchResults.innerHTML = "";
    searchResults.forEach((hero) => {
        const cloned = templateSearchResults.content.cloneNode(true);

        cloned.querySelector(".li--search-result").dataset.id = hero.id;
        cloned.querySelector(".li--name").innerText = hero.name;
        cloned.querySelector(".li--id").innerText = hero.id;
        cloned.querySelector(".li--description").innerText = hero.description;
        cloned.querySelector(".li--img").src = hero.getImageSrcForImageType(IMG_TYPE_IN_SEARCH_RESULTS);

        // Change Fav button text to remove/add depending upon already fav or not.
        const favBtn = cloned.querySelector(".li--btn-favorites");
        favBtn.innerHTML = favSuperheroList.isFavorite(hero.id) ? "Remove from Favorites" : "Add to Favorites";

        ulSearchResults.appendChild(cloned);
    });
}

function init(favList) {
    favSuperheroList = favList;
}
export { generateSearchResultView, init };
