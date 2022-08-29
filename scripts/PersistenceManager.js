import SuperheroList from "./SuperheroList.js";

const KEY_MARVEL_SuperHeroHunterObject = "KEY_MARVEL_SuperHeroHunterObject";
const KEY_ClickedSuperheroIdToOpen = "KEY_ClickedSuperheroIdToOpen";
let VALUE_ClickedSuperheroIdToOpen = "12345";

function save(favList) {
    console.log("Saving", favList);
    window.localStorage.setItem(KEY_ClickedSuperheroIdToOpen, JSON.stringify(VALUE_ClickedSuperheroIdToOpen));
    window.localStorage.setItem(KEY_MARVEL_SuperHeroHunterObject, JSON.stringify(favList));
}

let loadedData;
function load() {
    console.log("Loading");
    VALUE_ClickedSuperheroIdToOpen = JSON.parse(window.localStorage.getItem(KEY_ClickedSuperheroIdToOpen));
    const saved = JSON.parse(window.localStorage.getItem(KEY_MARVEL_SuperHeroHunterObject));
    console.log("Loading", saved);
    if (!saved || saved.list.length == 0) {
        return new SuperheroList();
    } else {
        return deserialiseSuperheroList(saved);
    }
}

function deserialiseSuperheroList(savedJSON) {
    const favSuperHeroList = new SuperheroList();
    savedJSON.list.forEach((savedHero) => favSuperHeroList.addHero(savedHero));
    return favSuperHeroList;
}

function setKeySuperHeroIdToOpen(superheroId, favSuperHeroList) {
    VALUE_ClickedSuperheroIdToOpen = superheroId;
    save(favSuperHeroList);
}

function getKeySuperHeroIdToOpen() {
    return VALUE_ClickedSuperheroIdToOpen;
}

export { save, load, getKeySuperHeroIdToOpen, setKeySuperHeroIdToOpen };
