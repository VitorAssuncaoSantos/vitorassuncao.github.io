const url = "https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json";
const urlImages = "https://rafaelescalfoni.github.io/desenv_web/restaurante/";
const $div = document.querySelector("div"); //This const references an HTML element present in the main element
const $ul = document.querySelector("#categories"); //This const references an HTML element present in the main element
let listOfPlates;
let state = "A";

fetch(url)
    .then(anwser => anwser.json())
    .then(plates => {
        listOfPlates = plates;
        createMenu(plates[16].code);
        return;
    })
    .catch(error => {
        console.log(error);
        return;
    })


const createImagesPath = plate => `${urlImages}${plate.photo}`;

const cleanMenu = () => { $div.innerHTML = "" };

const createMenu = code => {
    cleanMenu();
    const plates = []; //This array will reseive all the plates with the specific code
    for (const i in listOfPlates) {
        const plate = listOfPlates[i];
        if ((plate.code).substr(0, 1) === code) {
            plates.push(plate);
        } else if ((plate.code).substr(0, 2) === code) plates.push(plate)
    } //This forin will fill the platesCodeA with the plates with the code A

    for (const i in plates) {
        const plate = plates[i];
        const imagePath = createImagesPath(plate);
        let nameOfPlate;
        if (plate.name === undefined) {
            nameOfPlate = plate.title;
        } else nameOfPlate = plate.name;
        $div.innerHTML += `<div>
        <img id = "${plate.code}"src="${imagePath}" alt="Photo of a plate">
        <div id="informations">
                <h3>${nameOfPlate}</h3>
                <p>Details: ${plate.details}</p>
                <p><b>${plate.price}</b></p>
                <button>Order now!<button>
            </div>
        </div>`;
    }
    addEventListinerToAllButtons();
}

const orderPlate = orderedPlate => {
    console.log(orderedPlate);
}

const changeCategoryColor = textContentOfCategory => {
    document.querySelector(`#${state}`).style.backgroundColor = "transparent";
    state = textContentOfCategory;
    document.querySelector(`#${textContentOfCategory}`).style.backgroundColor = "#b1b3f7";
}


$ul.addEventListener("click", e => {
    const idClicked = e.target.id;

    createMenu(idClicked);
    changeCategoryColor(idClicked);
});
//Adding to all buttons a event listiner
const addEventListinerToAllButtons = () => document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", e => {
        const id = e.target.parentElement.parentElement.firstElementChild.id;
        let plate = {

        };
    });
});