import * as Views from "./Views.js";
import * as PersistenceManager from "./PersistenceManager.js";
import * as Transformer from "./Transformer.js";

let charInfo;
let favSuperheroList;

function init(charInfoContext, favSuperheroListObject) {
    favSuperheroList = favSuperheroListObject;
    charInfo = charInfoContext;
}

export { init };

const favButton = document.querySelector(".info--btn-favorites");
favButton.addEventListener("click", onFavBtnClick);

// On fav btn clicked, if already a fav, make unfav. If unfav, then make fav.
// Then Save the changes and refresh view.
function onFavBtnClick(e) {
    e.preventDefault();
    const id = e.target.closest(".hero-info-div").dataset.id;
    const isFavAlready = favSuperheroList.isFavorite(id);
    if (isFavAlready) {
        favSuperheroList.removeHero(id);
    } else {
        favSuperheroList.addHero(Transformer.transformCharInfoToSuperhero(charInfo));
    }
    PersistenceManager.save(favSuperheroList);
    Views.generateSuperheroCharacterInfoPage(charInfo);
}
