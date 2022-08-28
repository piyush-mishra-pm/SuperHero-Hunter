export default class SuperheroList {
    constructor() {
        this.list = new Array();
    }

    addHero(superheroToAdd) {
        // Skip if already there:
        if (this.findIndexInList(superheroToAdd) === -1) return false;

        // Add if isn't added yet:
        this.list.push(superheroToAdd);
        return true;
    }

    removeHero(superheroToRemove) {
        const foundIndex = this.findIndexInList(superheroToRemove);
        // Skip if not already there:
        if (foundIndex === -1) return false;

        // Remove if exists:
        this.list.splice(foundIndex, 1);
        return true;
    }

    findIndexInList(superheroToFind) {
        return this.list.findIndex((hero) => hero.id === superheroToFind.id);
    }
}
