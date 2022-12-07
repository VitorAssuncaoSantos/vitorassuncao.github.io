const formQuestion1 = document.querySelector("#question1");

formQuestion1.addEventListener("change", (e) => {
    e.preventDefault();
    const height = Number(document.querySelector("#height").value);
    const ray = Number(document.querySelector("#ray").value);
    const valueHeight = document.querySelector("#valueOfHeight");
    const valueRay = document.querySelector("#valueOfRay");
    valueHeight.textContent = height;
    valueRay.textContent = ray;
    const resultQuestion1 = document.querySelector("#resultQuestion1");
    resultQuestion1.textContent = Math.round((Math.PI * (Math.pow(ray, 2) * height)) / 1000);
    console.log(resultQuestion1)
})