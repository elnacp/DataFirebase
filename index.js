
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

/*
const json_comentarios = require('./comentarios.json')
var comentarios = json_comentarios

comentarios.forEach(function(obj_comentarios) {
    db.collection("Comentario").add({
        IdComentario: obj_comentarios.IdComentario,
        IdUsuario: obj_comentarios.IdUsuario,
        IdManga: obj_comentarios.IdManga,
        Valoracion: obj_comentarios.Valoracion,
        Comentario: obj_comentarios.Comentario,
        fecha: obj_comentarios.fecha,
        Likes: obj_comentarios.Likes,
        Dislikes: obj_comentarios.Dislikes
    }).then(function(docRef) {
        console.log("ID comentarios: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});*/


const json_user = require('./users.json')
var users = json_user

users.forEach(function(obj_users){
    db.collection("Users").add({
        id: obj_users.id,
        username: obj_users.username,
        email: obj_users.email,
        contraseña: obj_users.contraseña,
        descripcion: obj_users.descripcion,
        generoFavorito: obj_users.generoFavorito,
        loggeado: obj_users.loggeado,
        idMangas: obj_users.idMangas,
        followers: obj_users.followers,
        following: obj_users.following,
        imagen: obj_users.imagen
    }).then(function(docRef) {
        console.log("ID users: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});