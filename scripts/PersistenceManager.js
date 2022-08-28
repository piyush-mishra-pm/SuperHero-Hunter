import SuperheroList from "./SuperheroList.js";

function save() {
    console.log("Saving");
}

function load() {
    console.log("Loading");
    return new SuperheroList();
}

function deserialiseSuperheroList() {}

export { save, load };
