const url = "https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json";
const urlImages = "https://rafaelescalfoni.github.io/desenv_web/restaurante/";
const $main = document.querySelector("main");

fetch(url)
    .then(anwser => anwser.json())
    .then(data => {
        init(data);
        return;
    })
    .catch((error) => {
        console.log(error);
        return;
    })

const createImagesPath = plate => `${urlImages}${plate.photo}`;

const create$Main = listOfPlates => {
    $main.innerHTML = `
    <div>
    <img src="${createImagesPath(listOfPlates[1])}" alt="First Plate">
    <img src="${createImagesPath(listOfPlates[2])}" alt="Secound Plate">
    <img src="${createImagesPath(listOfPlates[3])}" alt="Third Plate">
    </div>
    <div>
    <h1>Welcome to the Vitu's Restaurant!</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, magni aliquid repellat vel odio dolore repudiandae temporibus asperiores cupiditate laudantium velit ad in corrupti commodi amet voluptatem! Voluptatem, non et.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, magni aliquid repellat vel odio dolore repudiandae temporibus asperiores cupiditate laudantium velit ad in corrupti commodi amet voluptatem! Voluptatem, non et.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, magni aliquid repellat vel odio dolore repudiandae temporibus asperiores cupiditate laudantium velit ad in corrupti commodi amet voluptatem! Voluptatem, non et.</p>
    <h2>Experimente agora os nossos pratos!</h2>
    <a href="./html/menu.html">Menu</a>
    </div>  `;
}

const init = list => {
    create$Main(list);
}