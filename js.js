function dividir(x,y){
    return x/y
}

alert("Esta pagina web es solo para mayores de 18");

let Nombre = prompt("Bienvenido a mi programa, dinos tu nombre");


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

for(let i = 0;i<4;i++){        
    console.log(NOmbre[i]);
}

function saludando (NOmbre){   /*Array a funcion*/
    console.log(`hola inversor ${NOmbre} como estas?`)
}
NOmbre.forEach(saludando);

NOmbre.push("Daniel");
console.log(NOmbre);

NOmbre.unshift("lu"); /*agrega primero*/
console.log(NOmbre);

console.log(NOmbre.indexOf("vanina"));

localStorage.setItem("Vanina",200);
localStorage.setItem("Lucia",243);


/*sessionStorage.setItem("saludo", "Hola como estan");*/


let VaninaInv = localStorage.getItem("Vanina");
document.write(VaninaInv);

/*document.cookie = "Name=Cookie; expires=Fri 01 Jan 00 00:00:00 GMT";*/ 

console.log(document.getElementById("America"));
console.log(document.getElementsByClassName("PaisesInversores"));
console.log(document.getElementsByTagName("strong"));

console.log(typeof nodoConUl);

let listica = document.getElementsByTagName("li");

console.log(listica, listica.length);

for(let i = 0 ; listica.length; i++){
    if(i%2 == 0){
        listica[i].innerHTML = "Este Pais es inpar pero confidencial";
    } else{
        listica[i].innerHTML = "Este pais es par pero confidencial";
    }
}