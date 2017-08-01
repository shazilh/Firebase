var config = {
    apiKey: "AIzaSyC3gZIeVCNhVyIkSdbBNWhwkbazBqQRpd8",
    authDomain: "fir-bd-lab-project.firebaseapp.com",
    databaseURL: "https://fir-bd-lab-project.firebaseio.com",
    projectId: "fir-bd-lab-project",
    storageBucket: "fir-bd-lab-project.appspot.com",
    messagingSenderId: "305439988511"
};
firebase.initializeApp(config);

var formulario = document.getElementById("crear-usuario");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    var nombre = document.getElementById("name").value;
    var correo= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var usuario = {
        name: nombre,
        email: correo,
        password: password
    }
    guardarDatos(usuario);
})


var database = firebase.database(); //nos permite interactuar con la base de datos, se pone despues porque primero debemos inicializar la base de datos


//Guardar en Bd: usar el metodo set
function guardarDatos(usuario) {
    // Guardar en BD: Usar el método .set()
    database.ref("/usuarios").set(usuario);
} //como si nos refirieramos a una tabla usuarios
//Leer datos: es usar el método on y encuchar el evento 'value'
database.ref("/usuarios").on('value', function (snapshot) { //snapshot la captura de los ultimos datos que obtuvo
    var usuario = snapshot.val();
    console.log(usuario);
})
