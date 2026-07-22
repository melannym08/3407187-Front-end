/*Funcion Tradicional*/
function saludar (nombre) {//parametro 
    console.log("hola" + nombre)
}
saludar("Sergio")//Argumento

/*Funcion con metodo*/

const persona ={
    nombre: "Sergio",
    Saludar(){
            return "Hola" +this.nombre
    }
}
console.log(persona.saludar())

/*Funcion Flecha*/

//Forma corta
const multiplicar = (a, b) =>{
    return a * b 
}
console.log (multiplicar(9, 3))

/*funcion tipo expresion*/
//la funcion se guarda en una variable 
const restar = function (a, b){
    return a-b
}
console.log(restar(50, 10 ))

/*Llamado de funcion antes de definir*/

//se puede llamar antes de definirse (hoisting)
console.log(sumar(3, 5))
function sumar (a, b){
    return a + b
}

/*Funcion constructora*/
//funcion que permite crear una especie de clase con sus atributos y luego instanciar 
function Persona (nombre, edad){
    this.nombre = nombre
    this.edad = edad
}
const usuario = new Persona ("Juan", 30)
console.log(usuario.nombre, usuario.edad)

/*Funcion anonima*/

setTimeout(function(){
    console.log("Ejecutando despues de 2 segundos");
}, 2000);

/*Ambito de las variables*/
//las variables dentro de funciones, no se pueden utilizar por fuera 
function ejemplo(){
    let mensaje = "Hola";
}
console.log (mensaje); //error 

/*function ejemplo() {
    let mensaje = "Hola";
    return mensaje
}
let result = ejemplo()
console.log(result); //error*/