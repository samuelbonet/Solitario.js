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

