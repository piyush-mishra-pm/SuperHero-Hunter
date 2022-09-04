import SuperheroList from "./SuperheroList.js";

// Key for favorite list of SuperHeroes.
const KEY_MARVEL_SuperHeroHunterObject = "KEY_MARVEL_SuperHeroHunterObject";

// When a superher is clicked to open superhero info page,
// we store that superhero's ID in memory, and on superhero page,
// we make api calls to fetch fetails of that superhero.
const KEY_ClickedSuperheroIdToOpen = "KEY_ClickedSuperheroIdToOpen";

let VALUE_ClickedSuperheroIdToOpen;

function save(favList) {
    console.log("Saving", favList);
    window.localStorage.setItem(KEY_ClickedSuperheroIdToOpen, JSON.stringify(VALUE_ClickedSuperheroIdToOpen));
    window.localStorage.setItem(KEY_MARVEL_SuperHeroHunterObject, JSON.stringify(favList));
}

let loadedData;
function load() {
    VALUE_ClickedSuperheroIdToOpen = JSON.parse(window.localStorage.getItem(KEY_ClickedSuperheroIdToOpen));
    const saved = JSON.parse(window.localStorage.getItem(KEY_MARVEL_SuperHeroHunterObject));
    if (!saved || saved.list.length == 0) {
        return new SuperheroList();
    } else {
        // Since the browser storage could only store superhero array items info,
        // we would lose the helper functions associated with SuperHeroList.
        // So we create a new SuperHeroList and deepcopy in it the JSON data of
        // superheroes stored in memory. This way we get a full SuperHeroList object,
        // with both functions and data members.
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
