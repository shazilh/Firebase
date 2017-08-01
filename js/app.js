var config = {
    apiKey: "AIzaSyC3gZIeVCNhVyIkSdbBNWhwkbazBqQRpd8",
    authDomain: "fir-bd-lab-project.firebaseapp.com",
    databaseURL: "https://fir-bd-lab-project.firebaseio.com",
    projectId: "fir-bd-lab-project",
    storageBucket: "fir-bd-lab-project.appspot.com",
    messagingSenderId: "305439988511"
};
firebase.initializeApp(config);

var objDb = {
    usuarios: [ ]
}

var formulario = document.getElementById("crear-usuario");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    var nombre = document.getElementById("name").value;
    var correo= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    
    objDb.usuarios.push({
        name: nombre,
        email: correo,
        password: password
    });
    guardarDatos(objDb);
})


var database = firebase.database(); //nos permite interactuar con la base de datos, se pone despues porque primero debemos inicializar la base de datos


//Guardar en Bd: usar el metodo set
function guardarDatos(usuarios) {
    // Guardar en BD: Usar el método .set()
    database.ref("/").set(usuarios);
} //como si nos refirieramos a una tabla usuarios
//Leer datos: es usar el método on y encuchar el evento 'value'
database.ref("/usuarios").on('value', function (snapshot) { //snapshot la captura de los ultimos datos que obtuvo
    var usuario = snapshot.val();
    console.log(usuario);
    objDb.usuarios =usuarios;
    mostrarDatos(usuarios);
})
function mostrarDatos(usuarios){
    document.getElementById("usuarios").innerHTML="";
    usuarios.forEach(function(usuario){
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var p = document.createElement("p");
    h3.textContent = usuario.name;
    p.innerHTML = "<strong>Email:</strong>" + usuario.email;
        
    div.appendChild(h3);
    div.appendChild(p);
    document.getElementById("usuarios").appendChild(div);
        
    })
}
