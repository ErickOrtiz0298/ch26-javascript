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
