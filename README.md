# SuperHero Hunter

Uses Marvel's super heroes API, and allows users to search for and maintain a favorites list of superheroes.

CSS, HTML, JS.

> Video Walkthrough:
> [![Video Walkthrough](https://img.youtube.com/vi/bUxQb9jQzc0/maxresdefault.jpg)](https://youtu.be/bUxQb9jQzc0)

## Features:

-   3 Webpages offering:
    -   Search functionality for Marvel Superhero.
    -   View collection of favorite Superheroes.
    -   See detailed info of a particular superhero.
-   Can Favorite/Unfavorite Super hero on any of these three pages.
-   Seamless navigation: Can open Superhero detailed page from both the search and favorites page. Can also visit favorites/search page from super hero detailed info page.
-   Persistence in browser's local storage.
-   Minimalistic, yet attractive grid layout and animation effects.

## Tech Features:

-   **HTML**:
    -   Template HTML code of superhero List items, used in the three webpages (showing search results, faorites list, and comics-series lists).
-   **CSS**:
    -   Responsive, mobile first design using Grid Template Areas.
    -   Composition over inheritence. Classes are created for a single responsibility and then their composition is achieved in HTML markup by mentioning/composing those multiple classes there. See `grid-view`, `hidden`, `bg-color-radius-shadow`,`fx-magnify` and `fx-fade-in` in `styles/shared.css`, .
    -   CSS variables to reuse same CSS code, and but still flexible to offer variety of variable values. See usage of CSS variables of `bg-color-radius-shadow` and `fx-fade-in` in multiple items in `styles/shared.css`.
-   **JS**:
    -   Modularized 'Reactish' kind of JS, where code is separated into separate modules. And a common superhero list is used as a context for these different modules to act upon.
    -   JS OOP priciples used for a SuperHero List and a SuperHero object, whose data and helper functions are also encapsulated within them.
    -   Easily extendable for more properties for the superheroes.
    -   Event handlers are only attached to the list containers, and not attached on every alarm item. This EventDelegation to parent list, increases performance since very less event listeners there. Only the `ul` elements are the event listeners (for favorite-button clicked, or opening SuperHero page). Event listeners are not attached to each superhero item.
    -   Asynchronous call for concurrent Fetch calls (see `scripts/EventHandlersSuperHero.js`), which reduces the total time for fetching data from Marvel's API.
