$(document).ready(function(){

  $('#btnSubmit').click(function(){
    let name = $('#Nombre').val();
    let apellido = $('#Apellido').val();
    let email = $('#Email').val();
    let pais = $('#Pais').val();
    let sexo = $('#Sexo').val();
    let password = $('#Password').val();
    let nacimiento = $('#Nacimiento').val();
    let comentario = $('#Comentario').val(); 
    localStorage.setItem("name",name);
    localStorage.setItem("apellido",apellido);
    localStorage.setItem("email",email);
    localStorage.setItem("pais",pais);
    localStorage.setItem("sexo",sexo);
    localStorage.setItem("password",password);
    localStorage.setItem("comentario",comentario);
  })

})

function dividir(x,y){
    return x/y
}

alert("Esta pagina web es solo para mayores de 18");

let Nombre = prompt("Bienvenido a mi programa, dinos tu nombre");
let Mail = prompt("Ahora dinos tu E-mail");


let num = prompt(`Hola ${Nombre}, cual es tu edad?`);

function validar(){
    while (isNaN(num) || num == null || num.trim() == ""){
        num = prompt("Por favor solo acepto numeros");
    }
    while(num < 18)
    {
        num = prompt(`Lo siento, accseso denegado para ${Nombre}, debes ser mayor de edad`)
    }
    return num;
}

let edad = validar();

alert("Bienvenido a nuesto sitio "+ Nombre);



let numm = prompt(`Que cantidad de dinero deseas invertir ${Nombre}?`);

function validar2(){
    while (isNaN(numm) || numm == null || numm.trim() == ""){
        numm = prompt("Por favor solo acepto numeros");
    }
    return numm;
}

let Inversion = validar2();

let Numcuotas = prompt(`En que cantidad de cuotas deseas invertir el dinero ${Nombre}?`);

let Cuota = (dividir(Inversion,Numcuotas));

alert(`El costo de tu cuota sera de $${Cuota}, estas bien con eso ${Nombre}?`)

/*
class Cliente{
    constructor(Nombre,Edad,Ocupacion,Inversion) {
        this.Nombre=Nombre,
        this.Edad=Edad,
        this.Ocupacion= Ocupacion,
        this.Inversion=Inversion;

    }
    sumaIva(){
        this.Inversion = this.Inversion * 1.21;
    }

    habla(){
        console.log(`${this.Nombre} invierte en Shellman Wealth `)
    }
}

const Facundo = new Cliente ("Facundo",22,"Estudiante",10);
console.log(Facundo)
console.log("Inversion" in Facundo)

Facundo.habla();



let NOmbre = ["Valeria","Vanina","Cristian","Eduardo"]   /*array*/

/*
for(let i = 0;i<4;i++){        
    console.log(NOmbre[i]);
}

function saludando (NOmbre){   /*Array a funcion*//*
    console.log(`hola inversor ${NOmbre} como estas?`)
}
NOmbre.forEach(saludando);

NOmbre.push("Daniel");
console.log(NOmbre);

NOmbre.unshift("lu"); /*agrega primero*//*
console.log(NOmbre);

console.log(NOmbre.indexOf("vanina"));

localStorage.setItem("Vanina",200);
localStorage.setItem("Lucia",243);


/*sessionStorage.setItem("saludo", "Hola como estan");*/

/*
let VaninaInv = localStorage.getItem("Vanina");
document.write(VaninaInv);

/*document.cookie = "Name=Cookie; expires=Fri 01 Jan 00 00:00:00 GMT";*/ 
/*
console.log(document.getElementById("America"));
console.log(document.getElementsByClassName("PaisesInversores"));
console.log(document.getElementsByTagName("strong"));

console.log(typeof nodoConUl);

let listica = document.getElementsByClassName("Privacy Policy");

console.log(listica, listica.length);

for(let i = 0 ; listica.length; i++){
    if(i%2 == 0){
        listica[i].innerHTML = "El Inversor no quiere revelar su identidad.";
    } 
}

let botonson = document.querySelector("#TOKEN");
boton.onclick = () => {
    alert("Tu nuevo Codigo TOKEN es: 01240234");
};

let botonCon = document.querySelector("#BotonContacto");
boton.onclick = () => {
    alert("Por Favor contactanos a 095686444");
};
*/



let usuarios = [
    {
      id:1,
      nombre: "Facundo Sarabia",
      inversion: 1000,
      estado: 2000,
      imagen: "IMGS/USUARIO.JPG",
    },
    {
      id:2,
      nombre: "Andrea Pollero",
      inversion: 201000,
      estado: 2000000,
      imagen: "IMGS/USUARIO.JPG",
    },
    {
      id:3,
      nombre: "Nestor Jaque",
      inversion: 100,
      estado: 2000,
      imagen: "IMGS/USUARIO.JPG",
    },
    {
      id:4,
      nombre: "Francsico Rodriguez",
      inversion: 10,
      estado: 200,
      imagen: "IMGS/USUARIO.JPG",
    },
    {
      id:5,
      nombre: "Andres Rodriguez",
      inversion: 10,
      estado: 2000,
      imagen: "IMGS/USUARIO.JPG",
    },
    {
      id:6,
      nombre: "Nacho Salgado",
      inversion: 100,
      estado: 2000,
      imagen: "IMGS/USUARIO.JPG",
    },
  ];
  
  const contenedor = document.getElementById("container");
  
  usuarios.forEach((usuarios)=>{
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    card.innerHTML = `<img src="${usuarios.imagen}" class="card-img-top" alt="imagen-producto">
    <div class="card-body">
      <h5 class="card-title">${usuarios.nombre}</h5>
      <p class="card-text">Inversion Inicial: ${usuarios.inversion}</p>
      <p class="card-textBold">Estado: ${usuarios.estado}</p>
      <a href="#" class="btn btn-primary" onClick = "compra()"
      >Comprar</a>
    </div>`;
    contenedor.appendChild(card);
  });
  
  
  function compra() {
    alert("Los datos del inversor que solicito fueron enviados a su correo.");
  }
   
  function DatosEnviados(){
    alert("Aun no hay datos de estos paises");
  }
  

  $( document ).ready(function() /* para ejecutarse primero*/
  {
     console.log( "Estas listo para invertir" );
  });
  
  window.addEventListener('load', function() {
    console.log( "Se cargo todo correctamente." );
  });

  const URLJSON = "./datos.json"
//Agregamos un botón con jQuery
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").prepend(`<div>
                                <h3>${dato.nombre}</h3>
                                <p> ${dato.estado}</p>
                            </div>`)
      }  
    }
    });
});




// const URLJSON = "data/datos.json";

$("#btn2").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").prepend(`<div>
                                <h3>${dato.inversion}</h3>
                                <p> ${dato.id}</p>
                            </div>`)
      }  
    }
    });
});



/*let productos = [];
$.ajax({
  url: "./data.json",
  dataType: "json",
  success: (respuesta) => {
    cargarProductos(respuesta);
  },
});

const cargarProductos = (respuesta) => {
  productos = respuesta;

  const contenedor = document.getElementById("container");
  contenedor.innerHTML = "";
}

productos.forEach((producto, indice) => {
  let card = document.create Element("div");
  card.classList.add("")
})





/*
function cargarJSON() {
    let llamada = new XMLHttpRequest();
  
    let url = "datos.json";
  
    llamada.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200){
  
        console.log("recibida la informacion de los nuevos usuarios");
        let datos = JSON.parse(this.responseText);
        console.log(datos);
      }
    }
  
    console.log("Peticion enviada");
  
    llamada.open("GET", url, true);
    llamada.send();
  
  }
  
  window.onload = cargarJSON; */