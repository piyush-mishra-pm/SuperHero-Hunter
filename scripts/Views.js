const ulSearchResults = document.getElementById("ul--search-results");
const templateSearchResults = document.getElementById("template-li--search-result");
const IMG_TYPE_IN_SEARCH_RESULTS = "standard_fantastic";

function generateSearchResultView(searchResults) {
    ulSearchResults.innerHTML = "";
    searchResults.forEach((hero) => {
        const cloned = templateSearchResults.content.cloneNode(true);

        cloned.querySelector(".li--search-result").dataset.uuid = hero.id;
        cloned.querySelector(".li--name").innerText = hero.name;
        cloned.querySelector(".li--id").innerText = hero.id;
        cloned.querySelector(".li--description").innerText = hero.description;
        cloned.querySelector(".li--img").src = hero.getImageSrcForImageType(IMG_TYPE_IN_SEARCH_RESULTS);

        ulSearchResults.appendChild(cloned);
    });
}
export { generateSearchResultView };
