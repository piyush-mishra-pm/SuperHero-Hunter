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
    const apiResponse = await APIhelper.findCharacterInfo(clickedHeroID);
    const charInfo = await Transformer.jsonToCharacterInfo(apiResponse);
    console.log(charInfo);

    Views.init(savedFavoritesList);
    Views.generateSuperheroCharacterInfoPage(charInfo);

    EventHandlersSuperHero.init(charInfo, savedFavoritesList);
}
