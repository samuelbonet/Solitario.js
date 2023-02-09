// --- VARIABLES --- //

// --- FIN VARIABLES --- //

// --- UTILIDADES --- //
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// --- CONTADOR --- //
// Crear un contador de tiempo que muestre en pantalla el tiempo transcurrido desde que se inició la página.
// El contador debe actualizarse cada segundo.
// El contador debe mostrar el tiempo en formato hh:mm:ss.

var contador = document.getElementById("tiempo");
var start = new Date();
var intervalo = setInterval(function () {
    var now = new Date();
    var diff = now - start;
    var hh = Math.floor(diff / 1000 / 60 / 60);
    var mm = Math.floor(diff / 1000 / 60) % 60;
    var ss = Math.floor(diff / 1000) % 60;
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    contador.innerHTML = hh + ":" + mm + ":" + ss;
}, 1000);

// --- FIN CONTADOR --- //

// --- MOVIMIENTOS --- //
// Crear un contador de movimientos que muestre en pantalla el número de movimientos realizados por el usuario.
// El contador debe actualizarse cada vez que el usuario mueve una carta.
let contadorMovimientos = 0;

function actualizarMovimientos() {
    var movimientos = document.getElementById("movimientos");
    movimientos.innerHTML = contadorMovimientos;
}
// Cuando se mueve una carta, se ejecuta la función "movimiento" que incrementa el contador de movimientos en 1.
function movimiento() {
    contadorMovimientos++;
    actualizarMovimientos();
}


// Array de cartas
const cartas = [
    {
        nombre: "1-cir",
        imagen: "img/1-cir.png"
    },
    {
        nombre: "2-cir",
        imagen: "img/2-cir.png"
    },
    {
        nombre: "3-cir",
        imagen: "img/3-cir.png"
    },
    {
        nombre: "4-cir",
        imagen: "img/4-cir.png"
    },
    {
        nombre: "5-cir",
        imagen: "img/5-cir.png"
    },
    {
        nombre: "6-cir",
        imagen: "img/6-cir.png"
    },
    {
        nombre: "7-cir",
        imagen: "img/7-cir.png"
    },
    {
        nombre: "8-cir",
        imagen: "img/8-cir.png"
    },
    {
        nombre: "9-cir",
        imagen: "img/9-cir.png"
    },
    {
        nombre: "10-cir",
        imagen: "img/10-cir.png"
    },
    {
        nombre: "11-cir",
        imagen: "img/11-cir.png"
    },
    {
        nombre: "12-cir",
        imagen: "img/12-cir.png"
    },
    {
        nombre: "1-cua",
        imagen: "img/1-cua.png"
    },
    {
        nombre: "2-cua",
        imagen: "img/2-cua.png"
    },
    {
        nombre: "3-cua",
        imagen: "img/3-cua.png"
    },
    {
        nombre: "4-cua",
        imagen: "img/4-cua.png"
    },
    {
        nombre: "5-cua",
        imagen: "img/5-cua.png"
    },
    {
        nombre: "6-cua",
        imagen: "img/6-cua.png"
    },
    {
        nombre: "7-cua",

        imagen: "img/7-cua.png"
    },
    {
        nombre: "8-cua",
        imagen: "img/8-cua.png"
    },
    {
        nombre: "9-cua",
        imagen: "img/9-cua.png"
    },
    {
        nombre: "10-cua",
        imagen: "img/10-cua.png"
    },
    {
        nombre: "11-cua",
        imagen: "img/11-cua.png"
    },
    {
        nombre: "12-cua",
        imagen: "img/12-cua.png"
    },
    {
        nombre: "1-hex",
        imagen: "img/1-hex.png"
    },
    {
        nombre: "2-hex",
        imagen: "img/2-hex.png"
    },
    {
        nombre: "3-hex",
        imagen: "img/3-hex.png"
    },
    {
        nombre: "4-hex",
        imagen: "img/4-hex.png"
    },
    {
        nombre: "5-hex",
        imagen: "img/5-hex.png"
    },
    {
        nombre: "6-hex",
        imagen: "img/6-hex.png"
    },
    {
        nombre: "7-hex",
        imagen: "img/7-hex.png"
    },
    {
        nombre: "8-hex",
        imagen: "img/8-hex.png"
    },
    {
        nombre: "9-hex",
        imagen: "img/9-hex.png"
    },
    {
        nombre: "10-hex",
        imagen: "img/10-hex.png"
    },
    {
        nombre: "11-hex",
        imagen: "img/11-hex.png"
    },
    {
        nombre: "12-hex",
        imagen: "img/12-hex.png"
    },
    {
        nombre: "1-ova",
        imagen: "img/1-ova.png"
    },
    {
        nombre: "2-ova",
        imagen: "img/2-ova.png"
    },
    {
        nombre: "3-ova",
        imagen: "img/3-ova.png"
    },
    {
        nombre: "4-ova",
        imagen: "img/4-ova.png"
    },
    {
        nombre: "5-ova",
        imagen: "img/5-ova.png"
    },
    {
        nombre: "6-ova",
        imagen: "img/6-ova.png"
    },
    {
        nombre: "7-ova",
        imagen: "img/7-ova.png"
    },
    {
        nombre: "8-ova",
        imagen: "img/8-ova.png"
    },
    {
        nombre: "9-ova",
        imagen: "img/9-ova.png"
    },
    {
        nombre: "10-ova",
        imagen: "img/10-ova.png"
    },
    {
        nombre: "11-ova",
        imagen: "img/11-ova.png"

    },
    {
        nombre: "12-ova",
        imagen: "img/12-ova.png"
    }];

//Desordenar el array
cartas.sort(function () {
    return 0.5 - Math.random();
}
);





/// CODIGO Por probar
const cards = document.querySelectorAll('.card');
const decks = document.querySelectorAll('.deck');

cards.forEach(card => {
    card.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', this.id);
    });
});

decks.forEach(deck => {
    deck.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    deck.addEventListener('drop', function (e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const card = document.getElementById(id);
        this.appendChild(card);
    });
});
