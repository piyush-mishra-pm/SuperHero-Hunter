import * as MarvelKeys from "../Marvel.keys.js";

async function searchCharacter(searchString) {
    const APIurl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchString}&orderBy=name&apikey=${MarvelKeys.PUBLIC_KEY}&hash=${MarvelKeys.HASH}&ts=${MarvelKeys.TS}`;
    return fetchAndPrepareResponse(APIurl);
}

async function findCharacterInfo(characterId) {
    const APIurl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=${MarvelKeys.PUBLIC_KEY}&hash=${MarvelKeys.HASH}&ts=${MarvelKeys.TS}`;
    return fetchAndPrepareResponse(APIurl);
}

async function fetchAndPrepareResponse(APIurl) {
    const response = await fetch(APIurl);
    const json = response.json();
    return json;
}

export { searchCharacter, findCharacterInfo };
