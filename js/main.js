import {database} from './database.js'

window.onload = inicializar

let act=0

function inicializar(){
    let titulo = document.getElementById("titulo")
    let autor = document.getElementById("autor")
    let isbn = document.getElementById("isbn")
    let fecha = document.getElementById("fecha")
    let imagen  = document.getElementById("portada")
    
    let atras = document.getElementById("Atras")
    let siguiente = document.querySelector("#Adelante")

    atras.addEventListener('click', irAtras)
    siguiente.addEventListener('click', irSiguiente)

    actualizar()
}

function irAtras(){
    if(act>0){
        act--
        actualizar()
    }
}


function irSiguiente(){
    if(act<database.length-1){
        act++
        actualizar()
    }
}

function actualizar(){
    titulo.value = database[act].titulo
    autor.value = database[act].autor
    isbn.value = database[act].isbn
    fecha.value = database[act].fecha
    imagen.src = "https://covers.openlibrary.org/b/id/" + database[act].filename
}