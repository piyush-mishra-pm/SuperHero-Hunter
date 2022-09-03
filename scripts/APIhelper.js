import * as MarvelKeys from "./Marvel.keys.js";

async function searchCharacter(searchString) {
    const APIurl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchString}&orderBy=name&apikey=${MarvelKeys.PUBLIC_KEY}&hash=${MarvelKeys.HASH}&ts=${MarvelKeys.TS}`;
    return await fetchAndPrepareResponse(APIurl);
}

async function findCharacterInfo(characterId) {
    const APIurl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=${MarvelKeys.PUBLIC_KEY}&hash=${MarvelKeys.HASH}&ts=${MarvelKeys.TS}`;
    return await fetchAndPrepareResponse(APIurl);
}

async function fetchComicInfoForCharacter(characterId) {
    const APIurl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=${MarvelKeys.PUBLIC_KEY}&hash=${MarvelKeys.HASH}&ts=${MarvelKeys.TS}`;
    return await fetchAndPrepareResponse(APIurl);
}

async function fetchEventsInfoForCharacter(characterId) {
    const APIurl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/events?apikey=${MarvelKeys.PUBLIC_KEY}&hash=${MarvelKeys.HASH}&ts=${MarvelKeys.TS}`;
    return await fetchAndPrepareResponse(APIurl);
}

async function fetchSeriesInfoForCharacter(characterId) {
    const APIurl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?apikey=${MarvelKeys.PUBLIC_KEY}&hash=${MarvelKeys.HASH}&ts=${MarvelKeys.TS}`;
    return await fetchAndPrepareResponse(APIurl);
}

async function fetchStoriesInfoForCharacter(characterId) {
    const APIurl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/stories?apikey=${MarvelKeys.PUBLIC_KEY}&hash=${MarvelKeys.HASH}&ts=${MarvelKeys.TS}`;
    return await fetchAndPrepareResponse(APIurl);
}

async function fetchAndPrepareResponse(APIurl) {
    const response = await fetch(APIurl);
    const json = response.json();
    return json;
}

export {
    searchCharacter,
    findCharacterInfo,
    fetchComicInfoForCharacter,
    fetchEventsInfoForCharacter,
    fetchSeriesInfoForCharacter,
    fetchStoriesInfoForCharacter,
};
