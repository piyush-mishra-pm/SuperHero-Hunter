import Superhero from "./Superhero.js";
import SuperheroList from "./SuperheroList.js";

let SuperheroSet;

function jsonToSuperHeroArray(marvelJson) {
    // Status should be OK:
    console.log(marvelJson);
    if (marvelJson.status !== "Ok") return null;

    const results = marvelJson.data.results;
    console.log(results);
    SuperheroSet = new Set();
    for (const hero in results) {
        transformAndAddHeroToSuperHeroList(results[hero]);
    }
    return SuperheroSet;
}

function transformAndAddHeroToSuperHeroList(heroJson) {
    const newHero = new Superhero(
        heroJson.id,
        heroJson.name,
        heroJson.description,
        heroJson.thumbnail.path,
        heroJson.thumbnail.extension,
        heroJson.urls,
        heroJson.resourceURI
    );
    SuperheroSet.add(newHero);
}

export { jsonToSuperHeroArray };
