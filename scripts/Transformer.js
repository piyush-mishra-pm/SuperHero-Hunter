import Superhero from "./Superhero.js";

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

function jsonToCharacterInfo(charInfoJson) {
    return {
        status: charInfoJson.status,
        code: charInfoJson.code,
        id: charInfoJson.data.results[0].id,
        description: charInfoJson.data.results[0].description,
        name: charInfoJson.data.results[0].name,
        thumbnail: charInfoJson.data.results[0].thumbnail,
        urls: charInfoJson.data.results[0].urls,
        resourceURI: charInfoJson.data.results[0].resourceURI,
    };
}

// Can also be used for series (not just comics):
function jsonToComicsOrSeriesInfo(comicInfoJson) {
    const comicsInfo = { status: comicInfoJson.status, code: comicInfoJson.code, items: [] };
    comicInfoJson.data.results.forEach((comic) =>
        comicsInfo.items.push({ name: comic.title, description: comic.description, thumbnail: comic.thumbnail })
    );
    return comicsInfo;
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

export { jsonToSuperHeroArray, jsonToCharacterInfo, transformCharInfoToSuperhero, jsonToComicsOrSeriesInfo };
