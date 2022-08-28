import Superhero from "./Superhero.js";

export default class SuperheroList {
    constructor() {
        this.list = new Array();
    }

    addHero(superheroToAdd) {
        // Skip if already there:
        if (this.findIndexInList(superheroToAdd.id) !== -1) return false;

        // Add if isn't added yet:
        const newSuperHero = new Superhero(
            superheroToAdd.id,
            superheroToAdd.name,
            superheroToAdd.description,
            superheroToAdd.imageSrcPath,
            superheroToAdd.imageSrcExtension,
            superheroToAdd.urlLinks,
            superheroToAdd.resourceURI
        );
        this.list.push(newSuperHero);
        return true;
    }

    removeHero(id) {
        const foundIndex = this.findIndexInList(id);
        // Skip if not already there:
        if (foundIndex === -1) return false;

        // Remove if exists:
        this.list.splice(foundIndex, 1);
        return true;
    }

    findIndexInList(idToFind) {
        return this.list.findIndex((hero) => hero.id == idToFind);
    }

    isFavorite(idToCheckFavorite) {
        const heroIndexFound = this.list.findIndex((hero) => hero.id == idToCheckFavorite);
        if (heroIndexFound == -1) return false;
        else return true;
    }
}
