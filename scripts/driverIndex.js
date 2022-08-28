import * as PersistenceManager from "./PersistenceManager.js";
import * as Views from "./Views.js";
import * as EventHandlersIndex from "./EventHandlersIndex.js";

const savedFavoritesList = PersistenceManager.load();

Views.init(savedFavoritesList);
EventHandlersIndex.init(savedFavoritesList);
