const pagina = window.location.pathname.split("/").pop();
let Imagenes = [];

switch (pagina) {
    case "CinemaRoyale.html":
        Imagenes = [
            {
                url: "../Imagenes/Cinema_Royale.png",
                nombre: "Menú Principal",
                descripcion: "Proyecto realizado en C#. Sistema de taquilla de cine en el que el usuario puede comprar boleto para la función que desee"
            },
            {
                url: "../Imagenes/Cinema_Royale_Reservas.png",
                nombre: "Reservas",
                descripcion: "Apartado de reservas donde se visualiza la info de la pelicula como director, duración , etc. Se ve la imágen de la cartelera y un enlace al trailer. Adicionalmente existen botones para seleccionar fecha y hora de la función a reservar"
            }
        ];
        break;

    case "Compilador.html":
        Imagenes = [
            {
                url: "../Imagenes/Compilador.png",
                nombre: "Editor de código",
                descripcion: "Proyecto de un compilador realizada en Java, contiene desde análisis léxico hasta generación de .exe"
            },
            {
                url: "../Imagenes/Tabla_Tokens.png",
                nombre: "Tabla de Tokens",
                descripcion: "El compilador muestra la tabla de tokens encontrados"
            },
            {
                url: "../Imagenes/Codigo_Maquina.png",
                nombre: "Codigo Maquina",
                descripcion: "El Compilador genera el código máquina para convertirlo a un .exe"
            }
        ];
        break;
}


let Atras = document.getElementById('Atras');
let Adelante = document.getElementById('Adelante');
let Imagen = document.getElementById('Img');
let Puntos = document.getElementById('Puntos');
let Texto = document.getElementById('Texto')
let actual = 0
posicionCarrusel()

Atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = Imagenes.length - 1
    }

    Imagen.innerHTML = ` <img class="Img" src="${Imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    Texto.innerHTML = `
    <h3>${Imagenes[actual].nombre}</h3>
    <p>${Imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
Adelante.addEventListener('click', function(){
    actual +=1

    if (actual == Imagenes.length){
        actual = 0
    }

    Imagen.innerHTML = ` <img class="Img" src="${Imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    Texto.innerHTML = `
    <h3>${Imagenes[actual].nombre}</h3>
    <p>${Imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    Puntos.innerHTML = ""
    for (var i = 0; i <Imagenes.length; i++){
        if(i == actual){
            Puntos.innerHTML += '<p class="Bold">.<p>'
        }
        else{
            Puntos.innerHTML += '<p>.<p>'
        }
    } 
}