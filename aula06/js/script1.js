console.log(0.1 + 0.2);

console.log(Math.pow(2, 2));

console.trace("alô mundo!");

const btm = document.getElementById('btm');

function togglemenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btm.addEventListener('click', togglemenu);