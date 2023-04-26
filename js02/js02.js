console.log("Sesion JS02");

//-----------------Funcion Declarada-------------
//function declaration, function statement
//Una caracteristica es que las funciones declaradas tiene hoisting

console.log("El resultado de 5 x 10 = " + multiplica(5,10)); //invocando la funcion 
multiplica(8,8); //invocando a la funcion sin retorno
multiplica(-4,2); 


/*
Sintaxis 

function nombreFuncionCamelCase (parametros) {

}
 */

function multiplica(operandoA,operandoB){
    const resultado = operandoA * operandoB; 
    console.log(resultado);
}

function divide(dividendo,divisor){
    return dividendo/divisor;
}

console.log(divide(5,2)); 
console.log(divide(5,"2")); 
console.log(divide("5","2")); 
console.log(divide("5 0","2")); 


{//este es un bloque de codigo
    const operandoA = 8
    const operandoB = 8
    const resultado = operandoA * operandoB;
    console.log(resultado);
}

{//este es un bloque de codigo
    const operandoA = 5
    const operandoB = 10
    const resultado = operandoA * operandoB;
    console.log(resultado);
}

//------------------------Funciones expresadas--------------------
//Function expressions
//Son declaradas dentro de la asignacion de una variable 
//Estas funciones pueden ser anonimas(no tienen nombre)
//Las funciones expresadas no tienen hoisting porque no se carga en memoria hasta que se utilice.

/*Sintaxis 
const nombreVariable = function nombreFuncion(parametros){
    instrucciones;
}
*/


const sum = function sumatoria(a,b){
    return a + b; 
}; 
const resta = function(a,b){
    return a-b;
};

const potencia = function(a,b){
    return a**b;
}

console.log(sum(9,9));
console.log(resta(90,20));

//-----Funciones autoinvocadas------------------
//self-invoking functions
//se autoinvocan, se pueden definir con funciones anonimas

(function (){
    console.log("Me auto-invoco en la funcion");
})();

//------------------Funciones flecha---------------------------------------
//Arrow Functions 
//Son funciones similares a las funciones expresadas pero: 
//No requieren la palabra function
//Si tiene una sola instruccion no requiere las llaves de apertura y cierre {}
//Si la instrucción es el mismo retorno no requiere la palabra return
/*
const areaRectangulo = function (a,b){
    return a * b;
}; 
*/

const areaRectangulo = (base,altura) => base*altura; //Si solo es una linea se puede omitir las llaves y el return de otro modo si se colocan.

console.log("Area de rectangulo 5 x 3: "+ areaRectangulo(5,3));

//--------------------Parametros default---------------------------
/**
 * Este comentario es la documentación de la funcion 
 * @param {number} base esto es la descripcion de la base
 * @param {number} altura esto es la descripcion de la altura
 * @returns area del rectangulo
 */
const areaTriangulo = (base, altura = 5) => base * altura / 2;

console.log("Area de triangulo b:5 a:10 = " + areaTriangulo(5,10));
console.log("Area de triangulo b:8 = " + areaTriangulo(8));

/*
function sumatoriaVariosNumeros(a,b){
    let suma; 
    suma = a +  b; 
    return suma; 
}*/
console.log("Sumatoriade de varios numeros: " + sumatoriaVariosNumeros(5,6));

//--------Parametros rest ---------------
//Rest parameters Sintaxis: 


//Esto se representa como un array. 
//Debe estar 

function sumatoriaVariosNumeros(a,b,...restoDatos){
    let suma; 
    suma = a +  b; 
    for (let index=0; index < restoDatos.length; index++){
        suma += restoDatos[index];//suma = suma + restoDatos[index]
    }
    return suma;
}   

console.log("Suma de varios numeros: "+ sumatoriaVariosNumeros(5,6));
console.log("Suma de varios numeros: "+ sumatoriaVariosNumeros(5,6,7,8));
console.log("Sumatoria: "+ sumatoriaVariosNumeros(5,6, 9, 10, 20, 50));

//------------Funciones callback 
//Funcion que pasa a otra funcion como argumento, para luego invocarse
//para completar algún tipo de rutina o accion

//3 funciones, una que imprima en consola, alert, DOM h1. 
//1 parametro de entrada. 
//no tiene return

// Función que imprime un mensaje en la consola
function printToConsole(mensaje) {
    console.log(mensaje);
  }
  
  // Función que muestra una alerta en la pantalla
  function showAlert(mensaje) {
    alert(mensaje);
  }
  
  // Función que agrega un encabezado h1 al DOM
  function addH1ToDOM(mensaje) {
    const h1 = document.createElement("h1");
    h1.innerText = mensaje;
    document.body.appendChild(h1);
  }
/*
printToConsole("Hola, mundo!");
showAlert("¡Bienvenido!");
addH1ToDOM("Hola, mundo!");*/

const addH1 = (mensaje) =>{
    document.querySelector("#div").innerHTML = `<h1>${mensaje}</h1>`
};

function getNamePrintToConsole(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    printToConsole(text);
}
function getNamePrintToDOM(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    addH1(text);
}

function getNameAndPrint(funcionImprimir){//Esta es la buena
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    funcionImprimir(text);
}
//getNameAndPrint(printToConsole); //mando una funcion como parametro SIN PARENTESIS para que no se ejecute
//getNameAndPrint(showAlert);
//getNameAndPrint(addH1);
//getNamePrintToConsole();
//getNamePrintToDOM();

//--------------------------------------------------

function double(arr){
    const doubleNumbers = []; 
    for(let i = 0; i < arr.length; i++){
        const duplicate = arr[i] * 2 ; 
        doubleNumbers.push(duplicate);
    }
    return doubleNumbers; 
}
//Funcion que nos sirve de Call Back
//const duplicate = (number) => number * 2;

/*
function doubleWithMap(array){
    const duplicateNumber = array.map(function(number){
        return number * 2; 
    });
    return duplicateNumber
}*/

function doubleWithMap(array){
   return array.map( number => number * 2 );
    
}

const numbers = [5,10,15,20,25]; 
console.log(double(numbers));
console.log(doubleWithMap(numbers));

const student1Courses = ['Español', 'Matematicas','Historia'];
const student2Courses = ['Quimica','Historia','Matematicas'];

function cursosEnComun (student1Courses,student2Courses) {
    const courses = [];
    for (let i=0; i < student1Courses.length; i++) {
     for (let j=0; j < student2Courses.length; j++) {
      if (student1Courses[i] == student2Courses[j]){
        courses.push( student1Courses[i] );
      }
     }
    }
    return `Cursos en común: ${courses}`; 
  }
  console.log(cursosEnComun( student1Courses, student2Courses ));

  //Usar filter y usar includes

/*  function cursosEnComunV2(){
    return
  }

console.log(cursosEnComunV2( student1Courses, student2Courses )); */


//------------------Uso de metodo filter e includes

//Version Santi
/*function getCommonCoursesWithFilter(student1Courses,student2Courses) {
    return student1Courses.filter(course => student2Courses.includes(course) );
}*/

 student3Courses = ["Math", "English","Music"];
 student4Courses = ["Music","Math","History"];
 student5Courses = ["Music"];

function getCommonCoursesWithFilter(student3Courses,student4Courses) {
    return student3Courses.filter(
        function (studen3course) {
            console.log(studen3course);
            return student4Courses.includes(studen3course)
        } 
    );
}
console.log(getCommonCoursesWithFilter(student3Courses, student4Courses))
const commonCourses = getCommonCoursesWithFilter(student3Courses, student4Courses);
const commonCoursesWithStudent5 = getCommonCoursesWithFilter(commonCourses, student5Courses);
console.log("Common courses: ", commonCourses.join(", ")); 
console.log("Common courses: ", commonCoursesWithStudent5.join(", ")); 

//-------------Contar la cantidad de caracteres de una frase--------------

//pepe pecas pica papas con un pico 
//la cantidad de letras 'p': 8
//resolverlo usando arrow function

text = "pepe pecas pica papas con un pico";

function countLetters(text) {
    let contador = 0;
    for(let i= 0; i < text.length; i++){
        
        if(text.slice(i,i+1) == "p")
        contador += 1; 
    }
    return contador;
}
console.log("La frase:pepe pecas pica papas con un pico, tiene: " + countLetters(text) + " p.");


phrase = 'pepe pecas pica papas con un pico y una pala'

const countChar = (p, phrase) => phrase.split("").filter(c => c == p).length;

console.log("Cantidad de letras 'p':", countChar('p', phrase))

//--------------------Algunas funciones flecha------------------


function sumar(a,b){
    return a + b; 
}

console.log(sumar(8,8));

let sumarFlecha = (a,b) => a +b;

console.log(sumarFlecha(9,9));

//-----------------Funciones recursivas----------------------------
//Es una tecnica de programacion en donde la funcion se llama así misma. 
//Se debe tener precaución de no entrar a un bucle infinito
/*
    function funcionRecursiva(valor){
        if(condicionDeParo){

        }
        else{
            LLamada recursiva
        }
    }
 */


const factorialConCicloFor = (numero) => {
    let total = 1;
    for(let i = 1; i<= numero; i++){
       total*= i;
    }
    return total;
}

/*function factorialRecursivo(numero){
    if(numero == 1){
        return 1;
    }else{
        return numero * factorialRecursivo(numero-1);
    }
}*/

function factorialRecursivo(numero){
    if(numero == 1)
        return 1;
    return numero * factorialRecursivo(numero-1);
}

const factorial = number => (number === 1) ? 
                     number : 
                     number * factorial(number - 1);


console.log("Factorial de 5: " + factorialConCicloFor(5));
console.log("Factorial de 5: " + factorialRecursivo(5));

console.log("Factorial de 1: "+ factorial(1));

// ------------ Ejercicio ---------------------------------
// Una función recursiva que muestre en consola
/*
Saludo 1
Saludo 2
Saludo 3
 ...
Saludo 10

saludo(10);
*/

const saludar = ( numero ) => {
    if( numero === 1){
        console.log("Saludo " + numero);
    }else{
        saludar(numero - 1)
        console.log("Saludo " + numero);
    };
};

saludar(10);

function saludo(numero) {
    if (numero > 1) {
      saludo(numero - 1);
    }
    console.log("Saludo " + numero);
  }
  
  saludo(10);

