import * as PersistenceManager from "./PersistenceManager.js";
import * as APIhelper from "./APIhelper.js";
import * as Transformer from "./Transformer.js";
import * as EventHandlersSuperHero from "./EventHandlersSuperHero.js";
import * as Views from "./Views.js";

const savedFavoritesList = PersistenceManager.load();
console.log(savedFavoritesList);

const clickedHeroID = PersistenceManager.getKeySuperHeroIdToOpen();
console.log(clickedHeroID, typeof clickedHeroID);
init();

async function init() {
    // Call APIs for results: Asynchronously:
    const charInfoAPIFetchResults = await Promise.all([
        APIhelper.findCharacterInfo(clickedHeroID),
        APIhelper.fetchComicInfoForCharacter(clickedHeroID),
        APIhelper.fetchSeriesInfoForCharacter(clickedHeroID),
    ]);

    const charInfo = Transformer.jsonToCharacterInfo(charInfoAPIFetchResults[0]);
    const comicInfo = Transformer.jsonToComicsOrSeriesInfo(charInfoAPIFetchResults[1]);
    const seriesInfo = Transformer.jsonToComicsOrSeriesInfo(charInfoAPIFetchResults[2]);

    Views.init(savedFavoritesList);
    Views.generateSuperheroCharacterInfoPage(charInfo, comicInfo, seriesInfo);

    EventHandlersSuperHero.init(charInfo, savedFavoritesList);
}
