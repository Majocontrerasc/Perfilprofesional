console.log("Pruba de conexion");
// TIPO DE VARIABLES
// const para variables constantes
const pi = 3.1416;
const pulgada = 2.54;
const name = "Alexis Arenas";
// var para variables globales del mismo archivos
var cal_days = 15;
// let para variables de bloque o locales
let j = 0;
let count = 1;

//FORMAS DE IMPRESION
//alert
// alert(name);
//console
console.log(name);
console.log(cal_days);
console.log("15");
console.log(true);
// pantalla - body
document.write(name);
document.getElementById("box_one").innerHTML = "<h1>Alexis Arenas</h1>"; // cuando uso innerHTML identifica que es h1 mientras el text no
document.getElementById("box_two").innerText = "<h1>Alexis Arenas</h1>";
//librerias
Swal.fire({
    icon : 'info',
    title: 'Alexis',
    text: name,
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    position: 'center-end'
}  )

//TIPOS DE DATOS
//numericos
var number_one =  10;
var number_two = 2.3;
//string
var text = "Soy un texto";
// booleanos
var boolean =true; // or false
//aray
let array_num = [1,2,3,4,5,6];
let array_text = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "sabado", "Domingo"];
let array_mixt = [1, "a", 2.5, "c"];
let array_mul = [
    {name:"Rolly", last_name: "Arenas", age: "3"},
    {name:"Rolly", last_name: "Arenas", age: "3"},
    {name:"Rolly", last_name: "Arenas", age: "3"},
    {name:"Rolly", last_name: "Arenas", age: "3"},
];

//OPERADORES BASICOS
// suma
var suma =number_one + number_two;
console.log("Suma= " + suma);
//resta
var resta = number_one - number_two;
console.log("Resta= " + resta);
// multiplicacion
var multi =number_one * number_two;
console.log("Multiplicacion= " + multi);
//division
var divi = number_one / number_two;
console.log("Division= " + divi);
//modulo
var modulo = number_one % number_two;
console.log("Modulo= " + modulo);

console.log(
    "Suma= " + suma + "\n" +
    "Resta= " + resta + "\n" +
    "Multiplicacion= " + multi + "\n" +
    "Division= " + divi + "\n" +
    "Modulo= " + modulo
);

var respuesta = 
    "Suma= " + suma + "<br>" +
    "Resta= " + resta + "<br>" +
    "Multiplicacion= " + multi + "<br>" +
    "Division= " + divi.toFixed(2) + "<br>" +
    "Modulo= " + modulo.toFixed(2);

Swal.fire(respuesta);

Swal.fire({
    showConfirmButton: false,
    background: '#fff',
    icon: 'success',
    title: 'Respuesta:',
    html: respuesta
});