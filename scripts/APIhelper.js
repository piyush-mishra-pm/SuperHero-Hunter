import * as MarvelKeys from "../Marvel.keys.js";

async function searchCharacter(searchString) {
    const APIurl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchString}&orderBy=name&apikey=${MarvelKeys.PUBLIC_KEY}&hash=${MarvelKeys.HASH}&ts=${MarvelKeys.TS}`;
    const response = await fetch(APIurl);
    const json = response.json();
    return json;
}

export { searchCharacter };
