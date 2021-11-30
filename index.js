
const  firebase = require("firebase")
require("firebase/firestore")

firebase.initializeApp({
    apiKey: "AIzaSyC5XdRd2oNbNcOstqHiJXKSZvffViIqyE0",
  authDomain: "manga-rock-bd.firebaseapp.com",
  databaseURL: "https://manga-rock-bd-default-rtdb.firebaseio.com",
  projectId: "manga-rock-bd",
  storageBucket: "manga-rock-bd.appspot.com",
  messagingSenderId: "631016846235",
  appId: "1:631016846235:web:3d7e461ab1c3fb7633273e",
  measurementId: "G-07X93C3YM5"
})

var db = firebase.firestore()


/*
const json = require('./manga_data.json')
var manga = json;

manga.forEach(function(obj) {
    db.collection("Manga").add({
        id: obj.id,
        titulo: obj.titulo,
        autor: obj.autor,
        valoracion: obj.valoracion, 
        precio: obj.precio,
        genero: obj.genero,
        idioma: obj.idioma,
        paginas: obj.paginas,
        tamaño: obj.tamaño,
        resumen: obj.resumen,
        url: obj.url,
        idColeccion: obj.idColeccion
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
*/




/*
const json_novedades = require('./novedades.json')
var novedades = json_novedades

novedades.forEach(function(obj_nov) {
    db.collection("Novedades").add({
        id: obj_nov.idManga,
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});*/


/*
const json_top_list = require('./top_list.json')
var toplist = json_top_list

toplist.forEach(function(obj_top) {
    db.collection("Top List").add({
        top: obj_top.top,
        categoria: obj_top.categoria,
        idManga: obj_top.id
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
*/


/*
const json_autores = require('./autores.json')
var autores = json_autores

autores.forEach(function(obj_autores) {
    db.collection("Autor").add({
        nombre: obj_autores.nombre,
        followers: obj_autores.followers,
        url: obj_autores.url
    }).then(function(docRef) {
        console.log("ID autores: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});*/


/*const json_comentarios = require('./comentarios.json')
var comentarios = json_comentarios

comentarios.forEach(function(obj_comentarios) {
    db.collection("Comentario").add({
        IdComentario: obj_comentarios.IdComentario,
        username: obj_comentarios.username,
        IdManga: obj_comentarios.IdManga,
        Valoracion: obj_comentarios.Valoracion,
        Comentario: obj_comentarios.Comentario,
        Likes: obj_comentarios.Likes,
        Dislikes: obj_comentarios.Dislikes
    }).then(function(docRef) {
        console.log("ID comentarios: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
*/

/*const json = require('./wishlist.json')
var wishlist = json;

wishlist.forEach(function(obj_wishlist) {
    db.collection("Wishlist").add({
        username: obj_wishlist.username,
        id: obj_wishlist.id,
        titulo: obj_wishlist.titulo,
        autor: obj_wishlist.autor,
        valoracion: obj_wishlist.valoracion, 
        precio: obj_wishlist.precio,
        genero: obj_wishlist.genero,
        idioma: obj_wishlist.idioma,
        paginas: obj_wishlist.paginas,
        tamaño: obj_wishlist.tamaño,
        resumen: obj_wishlist.resumen,
        url: obj_wishlist.url,
        idColeccion: obj_wishlist.idColeccion
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});*/

/*
const json = require('./colecciones.json')
var colecciones = json;

colecciones.forEach(function(obj_colecciones){
    db.collection("Colecciones").add({
        id: obj_colecciones.id,
        nombre: obj_colecciones.nombre,
        autor: obj_colecciones.autor,
        url: obj_colecciones.url
    }).then(function(docRef) {
        console.log("Document written with ID colecciones: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});*/

/*const json = require('./biblioteca.json')
var biblioteca = json

biblioteca.forEach(function(obj_biblioteca){
    db.collection("Biblioteca").add({
        username: obj_biblioteca.username,
        titulo: obj_biblioteca.titulo,
        autor: obj_biblioteca.autor,
        idioma: obj_biblioteca.idioma,
        paginas: obj_biblioteca.paginas,
        url: obj_biblioteca.url,
        percentage: obj_biblioteca.percentage
    }).then(function(docRef) {
        console.log("Document written with ID biblioteca: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});*/

/*
const json = require('./coleccionesbiblioteca.json')
var coleccionesBiblioteca = json 

coleccionesBiblioteca.forEach(function(obj_coleccionesBiblioteca){
    db.collection("Colecciones Biblioteca").add({
        username: obj_coleccionesBiblioteca.username,
        nombreColeccion: obj_coleccionesBiblioteca.nombreColeccion,
        titulo: obj_coleccionesBiblioteca.titulo,
        autor: obj_coleccionesBiblioteca.autor,
        idioma: obj_coleccionesBiblioteca.idioma,
        paginas: obj_coleccionesBiblioteca.paginas,
        url: obj_coleccionesBiblioteca.url,
        percentage: obj_coleccionesBiblioteca.percentage
    }).then(function(docRef) {
        console.log("Document written with ID coleccion Biblioteca: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});*/

const json = require('./suscripcion.json')
var suscripcion = json

suscripcion.forEach(function(obj_suscripcion){
    db.collection("Suscripcion").add({
        username: obj_suscripcion.username,
        suscrito: obj_suscripcion.suscrito,
        plan: obj_suscripcion.plan
    }).then(function(docRef) {
        console.log("Document written with ID suscripcion: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});