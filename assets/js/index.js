let allPlaces = [
    {
        "name": "Greggs",
        "description": "Cheap tastey food, but you'll be hungry again in an hour",
        "priceRange": "£",
        "offers": {
            "monday": "more sausage rolls",
            "tuesday": "spicy sausage rolls",
            "wednesday": "cheesy sausage rolls",
            "thursday": "more sausage rolls than you can shake a stick at"
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
const elements = {
    placesList: document.querySelector(".js-places"),
    buttonAll: document.querySelector(".js-buttonAll"),
    buttonRandom: document.querySelector(".js-buttonRandom"),
}

// event listeners
elements.buttonAll.addEventListener("click", showAll, false);
elements.buttonRandom.addEventListener("click", showRandom, false);


/** 
 * Show all the places
 */
function showAll() {
    renderPlaces(allPlaces);
}

/** 
 * Show a random place out of all the places
 */
function showRandom() {
    let place = [];
    let randomPlace = allPlaces[Math.floor(Math.random() * allPlaces.length)];
    
    place.push(randomPlace);
    
    renderPlaces(place);
}

/**
 * Clear all the places from the list
 */
function clearPlaces() {
    elements.placesList.innerHTML = "";
}

/**
 * Render the given places into the list
 */
function renderPlaces(places) {
    clearPlaces();
    
    // loop over the places
    places.forEach((place) => {
        // get place template
        let placeTemplate = document.querySelector(".templates .place").cloneNode(true);
        
        // get place elements
        let nameElement = placeTemplate.querySelector(".place__name");
        let descriptionElement = placeTemplate.querySelector(".place__description");
        let priceRangeElement = placeTemplate.querySelector(".place__priceRange");
        let offersElement = placeTemplate.querySelector(".place__offers");

        // set basic details
        nameElement.innerHTML = place.name;
        descriptionElement.innerHTML = place.description;
        priceRangeElement.innerHTML = place.priceRange;
        
        // set offers
        if (place.hasOwnProperty("offers")) {
            for (let day in place.offers) {
                offersElement.innerHTML += `<div class="offer"><div class="offer__day">${day}:</div> <div class="offer__text">${place.offers[day]}</div></div>`;
            }
        }
        
        // attach the template
        elements.placesList.appendChild(placeTemplate);
    });
}
