let allPlaces = [
    {
        "name": "Greggs",
        "description": "Cheap tastey food, but you'll be hungry again in an hour",
        "priceRange": "£",
        "offers": {
            "monday": "more sausage rolls"
        }
    },
    {
        "name": "Blackhouse",
        "description": "Steak! Enough said!",
        "priceRange": "£££"
    }
];

fetch('data/places.json')
.then((response) => {
    return response.json();
})
.then((myJson) => {
    allPlaces = myJson;
})
.catch((error) => {
    console.error(error);
});

// elements
let placesElement = document.getElementsByClassName("js-places")[0];
let buttonAllElement = document.getElementsByClassName("js-buttonAll")[0];

// event listeners
buttonAllElement.addEventListener("click", showAll, false);


/** 
 * Show all the places
 */
function showAll() {
    clearPlaces();
    renderPlaces(allPlaces);
}

/**
 * Clear all the places from the list
 */
function clearPlaces() {
    placesElement.innerHTML = "";
}

/**
 * Render the given places into the list
 */
function renderPlaces(places) {
    // loop over the places
    places.forEach((place) => {
        // get place template
        let placeTemplate = document.querySelector(".templates .place").cloneNode(true);
        
        // get place elements
        let nameElement = placeTemplate.querySelector(".place__name");
        let descriptionElement = placeTemplate.querySelector(".place__description");
        let priceRangeElement = placeTemplate.querySelector(".place__priceRange");
        let offersElement = placeTemplate.querySelector(".place__offers");

        // set details
        nameElement.innerHTML = place.name;
        descriptionElement.innerHTML = place.description;
        priceRangeElement.innerHTML = place.priceRange;
        
        // attach the template
        placesElement.appendChild(placeTemplate);
    });
}
