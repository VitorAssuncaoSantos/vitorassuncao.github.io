const url = "https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json";
const urlImages = "https://rafaelescalfoni.github.io/desenv_web/restaurante/";
const listOfPlates = [];

fetch(url)
    .then(anwser => anwser.json())
    .then(data => {
        data.forEach(element => {
            listOfPlates.push(element);
        });
        createDisplayItems();
        return;
    })
    .catch(error => {
        console.log(error);
        return;
    })

const recoverValeusLocalStorage = () => {
    if (localStorage.getItem("orderedPlates") != null)
        return JSON.parse(localStorage.getItem("orderedPlates"));
    return [];
}

const allOrderedPlates = recoverValeusLocalStorage();

const getInformationsOfPlate = (code) => listOfPlates.find(element => element.code == code);

const createImagesPath = plate => `${urlImages}${plate.photo}`;

const createDisplayItems = () => {
    const $displayItems = document.querySelector("#items");
    for (const i in allOrderedPlates) {
        const plate = allOrderedPlates[i];
        const informationsOfPlate = getInformationsOfPlate(plate.code);
        const imagePath = createImagesPath(informationsOfPlate);
        const nameOfPlate = informationsOfPlate.name == undefined ? informationsOfPlate.title : informationsOfPlate.name

        $displayItems.innerHTML += `<img id="${plate.code}"src="${imagePath}" alt="Photo of a plate">
        <div id="informations">
                <h3>${nameOfPlate}</h3>
                <p><b>$${informationsOfPlate.price.substr(1,4)}</b></p>
                <button>Deletar<button>
            </div>
        </div>`;

    }
    addEventListenerToAllButtons();
}

const addEventListenerToAllButtons = () => {

}