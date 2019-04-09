fetch('data/places.json')
.then((response) => {
    return response.json();
})
.then((myJson) => {
    console.log(JSON.stringify(myJson));
})
.catch((error) => {
    console.error(error);
});
