import Superhero from "./Superhero.js";
import SuperheroList from "./SuperheroList.js";

let SuperheroArray;

function jsonToSuperHeroArray(marvelJson) {
    // Status should be OK:
    if (marvelJson.status !== "Ok") return null;

    const results = marvelJson.data.results;
    SuperheroArray = new Array();
    for (const hero in results) {
        transformAndAddHeroToSuperHeroList(results[hero], SuperheroArray);
    }
    return SuperheroArray;
}

function transformAndAddHeroToSuperHeroList(heroJson, array) {
    array.push(
        new Superhero(
            heroJson.id,
            heroJson.name,
            heroJson.description,
            heroJson.thumbnail.path,
            heroJson.thumbnail.extension,
            heroJson.urls,
            heroJson.resourceURI
        )
    );
}

export { jsonToSuperHeroArray };
