// -- UTILIDADES -- //
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
// -- VARIABLES -- //
const inicio = new Date();
const contadorTiempo = $("#tiempo");
const mazo = $("#mazoCartas");
const cartasMazo = $$(".cartaMazo");


const listaCartas = [
    {
        nombre: "1-cir",
        imagen: "img/cartas/1-cir.png"
    },
    {
        nombre: "2-cir",
        imagen: "img/cartas/2-cir.png"
    },
    {
        nombre: "3-cir",
        imagen: "img/cartas/3-cir.png"
    },
    {
        nombre: "4-cir",
        imagen: "img/cartas/4-cir.png"
    },
    {
        nombre: "5-cir",
        imagen: "img/cartas/5-cir.png"
    },
    {
        nombre: "6-cir",
        imagen: "img/cartas/6-cir.png"
    },
    {
        nombre: "7-cir",
        imagen: "img/cartas/7-cir.png"
    },
    {
        nombre: "8-cir",
        imagen: "img/cartas/8-cir.png"
    },
    {
        nombre: "9-cir",
        imagen: "img/cartas/9-cir.png"
    },
    {
        nombre: "10-cir",
        imagen: "img/cartas/10-cir.png"
    },
    {
        nombre: "11-cir",
        imagen: "img/cartas/11-cir.png"
    },
    {
        nombre: "12-cir",
        imagen: "img/cartas/12-cir.png"
    },
    {
        nombre: "1-cua",
        imagen: "img/cartas/1-cua.png"
    },
    {
        nombre: "2-cua",
        imagen: "img/cartas/2-cua.png"
    },
    {
        nombre: "3-cua",
        imagen: "img/cartas/3-cua.png"
    },
    {
        nombre: "4-cua",
        imagen: "img/cartas/4-cua.png"
    },
    {
        nombre: "5-cua",
        imagen: "img/cartas/5-cua.png"
    },
    {
        nombre: "6-cua",
        imagen: "img/cartas/6-cua.png"
    },
    {
        nombre: "7-cua",

        imagen: "img/cartas/7-cua.png"
    },
    {
        nombre: "8-cua",
        imagen: "img/cartas/8-cua.png"
    },
    {
        nombre: "9-cua",
        imagen: "img/cartas/9-cua.png"
    },
    {
        nombre: "10-cua",
        imagen: "img/cartas/10-cua.png"
    },
    {
        nombre: "11-cua",
        imagen: "img/cartas/11-cua.png"
    },
    {
        nombre: "12-cua",
        imagen: "img/cartas/12-cua.png"
    },
    {
        nombre: "1-hex",
        imagen: "img/cartas/1-hex.png"
    },
    {
        nombre: "2-hex",
        imagen: "img/cartas/2-hex.png"
    },
    {
        nombre: "3-hex",
        imagen: "img/cartas/3-hex.png"
    },
    {
        nombre: "4-hex",
        imagen: "img/cartas/4-hex.png"
    },
    {
        nombre: "5-hex",
        imagen: "img/cartas/5-hex.png"
    },
    {
        nombre: "6-hex",
        imagen: "img/cartas/6-hex.png"
    },
    {
        nombre: "7-hex",
        imagen: "img/cartas/7-hex.png"
    },
    {
        nombre: "8-hex",
        imagen: "img/cartas/8-hex.png"
    },
    {
        nombre: "9-hex",
        imagen: "img/cartas/9-hex.png"
    },
    {
        nombre: "10-hex",
        imagen: "img/cartas/10-hex.png"
    },
    {
        nombre: "11-hex",
        imagen: "img/cartas/11-hex.png"
    },
    {
        nombre: "12-hex",
        imagen: "img/cartas/12-hex.png"
    },
    {
        nombre: "1-ova",
        imagen: "img/cartas/1-ova.png"
    },
    {
        nombre: "2-ova",
        imagen: "img/cartas/2-ova.png"
    },
    {
        nombre: "3-ova",
        imagen: "img/cartas/3-ova.png"
    },
    {
        nombre: "4-ova",
        imagen: "img/cartas/4-ova.png"
    },
    {
        nombre: "5-ova",
        imagen: "img/cartas/5-ova.png"
    },
    {
        nombre: "6-ova",
        imagen: "img/cartas/6-ova.png"
    },
    {
        nombre: "7-ova",
        imagen: "img/cartas/7-ova.png"
    },
    {
        nombre: "8-ova",
        imagen: "img/cartas/8-ova.png"
    },
    {
        nombre: "9-ova",
        imagen: "img/cartas/9-ova.png"
    },
    {
        nombre: "10-ova",
        imagen: "img/cartas/10-ova.png"
    },
    {
        nombre: "11-ova",
        imagen: "img/cartas/11-ova.png"

    },
    {
        nombre: "12-ova",
        imagen: "img/cartas/12-ova.png"
    }];
const mazo1 = [];
const mazo2 = [];
const mazo3 = [];
const mazo4 = [];
const mazoDescartes = [];
// -- FUNCIONES -- //
tiempo = (inicio) => {
    const fecha = new Date();
    const tiempo = fecha - inicio;
    var hh = Math.floor(tiempo / 1000 / 60 / 60);
    var mm = Math.floor(tiempo / 1000 / 60) % 60;
    var ss = Math.floor(tiempo / 1000) % 60;
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    contadorTiempo.innerHTML = hh + ":" + mm + ":" + ss;
}
imprimirCartas = (mazo) => {
    for (let i = 0; i < listaCartas.length; i++) {
        mazo.innerHTML += "<div class='mazoCartas carta' id='" + listaCartas[i].nombre + "' '><img src='" + listaCartas[i].imagen + "'></div>";
    }
}
desordenarCartas = (cartas) => {
    cartas.sort(function () {
        return Math.random() - 0.5;
    });
    return cartas;
}
hideCartas = (cartasMazo) => {
    for (let i = 0; i < cartasMazo.length; i++) {
        if (i != 0) {
            cartasMazo[i].classList.add("carta-oculta");
        }
    }
}





// -- FUNCIONES DRAG AND DROP -- //
allowDrop = (ev) => {
    ev.preventDefault();
}
dragStart = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}
drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


// -- EVENTOS -- //
setInterval(tiempo, 1000, inicio);
imprimirCartas(mazo);
desordenarCartas(listaCartas);
hideCartas(cartasMazo);

// Para las cartas que tienen las clases carta  


// -- INICIALIZACIÓN -- //

// -- EJECUCIÓN -- //

// -- FIN -- //

