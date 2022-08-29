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

function jsonToCharacterInfo(marvelCharacterJson) {
    console.log(marvelCharacterJson);
    return {
        status: marvelCharacterJson.status,
        code: marvelCharacterJson.code,
        id: marvelCharacterJson.data.results[0].id,
        description: marvelCharacterJson.data.results[0].description,
        name: marvelCharacterJson.data.results[0].name,
        thumbnail: marvelCharacterJson.data.results[0].thumbnail,
        urls: marvelCharacterJson.data.results[0].urls,
        resourceURI: marvelCharacterJson.data.results[0].resourceURI,
    };
}

function transformCharInfoToSuperhero(charInfo) {
    return new Superhero(
        charInfo.id,
        charInfo.name,
        charInfo.description,
        charInfo.thumbnail.path,
        charInfo.thumbnail.extension,
        charInfo.urls,
        charInfo.resourceURI
    );
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

export { jsonToSuperHeroArray, jsonToCharacterInfo, transformCharInfoToSuperhero };
