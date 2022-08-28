import * as PersistenceManager from "./PersistenceManager.js";
import * as Views from "./Views.js";
import * as EventHandlers from "./EventHandlers.js";

const savedFavoritesList = PersistenceManager.load();

Views.init(savedFavoritesList);
EventHandlers.init(savedFavoritesList);
