import * as Views from "./Views.js";
import * as PersistenceManager from "./PersistenceManager.js";
import * as EventHandlersFavorites from "./EventHandlersFavorites.js";

const savedFavoritesList = PersistenceManager.load();
Views.generateFavoritesView(savedFavoritesList);
EventHandlersFavorites.init(savedFavoritesList);
