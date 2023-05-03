console.log("Sesion Js05");
//------------------Operadores Aritmeticos

//Adicion + 
//Multiplicacion *
//Substraccion -
//Division /
//Exponencial **
//Resto %

//Ejemplo 
let dinero = 20 + 10; //30

//--------------------Operadores de asignacion 
//Asigna un valor a su operando izquierdo basandose en el valor de su operando derecho. 
//Asignacion = 
//Asignacion de adicion += 
dinero +=15; //dinero = dinero + 15;
//Multiplicacion *=
//Substraccion -= 
//Division /= 
//Exponencial **= 
//Resto %=


//--------------------------Operadores Unarios 
//Un operador unario realiza una operacion en un solo operando.
//Negacion -
dinero = -3; //-=3 ->  dinero = dinero - 3
console.log(dinero);

//Conversion a Numerico 
dinero = +dinero;
console.log(dinero);
dinero = + "200"
console.log(dinero);

//typeof
//Operador logico not

let valorBooleano = !true; 
console.log(valorBooleano);

//Operadores de incremento y decremento en una unidad
//Operador de preincremento y predecremento
//preincremento ++valor 
//predecremento --valor

//Operador de post-incremento y post-decremento
//post-incremento valor++
//post-decremento valor--

let numero = 10; 
numero++;//11
++numero;//12
console.log(numero);

let nuevoValor = numero ++; 
/*
let nuevoValor = numero; 
numero = numero + 1;
 */

console.log(nuevoValor);
console.log(numero);

let nuevoDato = ++numero; 

/*
    numero = numero + 1; 
    nuevoDato = numero;
*/ 
console.log(nuevoDato);
console.log(numero);

let x = 3; 
let y = ++x;
console.log("x = "+ x++ , "y = " + ++y);
console.log("x = "+ x , "y = " + y);

//--------------Operadores logicos AND && y OR ||
const a = true; 
const b = false; 
const c = true; 

console.log(a || b && c);

//Operadores de corto circuito 
//Cuando los operadores logicos AND y OR actuan sobre operandos diferentes a booleanos.

//OP1 && OP2 Si OP1 es verdadero se realiza el resultado de OP2
console.log(a && "Holi crayoli"); 
console.log(b && "Holi crayoli"); 
console.log(NaN && "El valor es un numero que se puede procesar");
console.log("false" && "El valor es false") 
console.log(""&&"No hay dato");

//OP1 || OP2 Si OP1 es verdadero se realiza el resultado de OP1 
console.log(a || "Holi crayoli"); 
console.log(b || "Holi crayoli"); 
console.log(NaN || "El valor es un numero que se puede procesar");
console.log("false" || "El valor es false") 
console.log(""||"No hay dato");

const noDefinido = true;
console.log(noDefinido || theBigBang);

//Quiero imprimir "Estas Autorizado" si la variable isOnline y isActive son true. 
const isOnline = true;
const isActive = true;

if(isOnline){
    if(isActive){
        console.log("Estas autorizado");
    }
}

if(isOnline && isActive)
console.log("Estas autorizado");

//isOnline && isActive?console.log("Estas autorizado"):console.log("No estas autorizado");
console.log(isOnline && isActive?"Estas autorizado":"No estas autorizado");
console.log((isOnline && isActive) && "Estas autorizado"); 

//----------------Operadores relacionales
/*
Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente.

< menor que 
> mayor que 
<= menor o igual 
>= mayor o igual
== igual que

 */

console.log(true == "true");//false
console.log(23 < "40");//true
console.log("b" < "A" ); //false
console.log("Hola"<"HOLA");//false
console.log("Hola"<"123");//false
console.log("Hola" < "KeHace" + 1000);
console.log("23" == 23);

//----Comparacion estricta---------

/*
=== estrictamente igual, debe ser igual en el valor y el tipo
!== estrictamente diferente , debe ser diferente en valor y tipo  
*/

console.log("23" === 23);//false
console.log("true" === true);//false

//Operador de asignacion 

const myNumber = 34;

//Desestructuracion(Destructuring)
/*
Es una expresion en JS que hace posible extraer datos de arreglos o objetos y nos ayuda a realizar asignaciones más complejas
*/
let dataA = 10; 
let dataB = 20;

[dataA,dataB] = [dataB,dataA]; 
console.log(dataA,dataB);

const calificaciones = [50,80, 100, 30];
//dataA = calificaciones[0]  //50
//dataA = calificaciones[1]  //80
let resto; //rest parameter
[dataA,,dataB, ...resto] = calificaciones; 
console.log(dataA,dataB,resto);

const primerAnio = {
    dataA: "43 alumnos",
    dataB: "50 alumnos",
    dataC: "20 alumnos"
};

({dataB,dataA} = primerAnio); //Con los objetos solo importa el nombre del atributo
console.log(`a: ${dataA}, b:${dataB}`);

const auto = {
    model: "Chevrolet",
    year: 2023,
    color: "red",
    motor: "2.0"
}

console.log("Model " + auto.model); //auto["model"]

//Asignando el valor model del objeto auto a la constante model
        //inicializar con un valor por default
//const {model,colorAuto = "Pistache"} = auto; 
        //Asignar un nuevo nombre al atributo

const {model,color: colorAuto} = auto; 
console.log("Model " + model + " color: " + colorAuto); 

//------------------------ejercicio
/*
    Hacer una funcion que realice la division de 2 números
    y me entregue (return) en entero el cociente y residuo
*/
/*
function division(a,b){
    const resultado = [parseInt(a/b), a%b]
    return resultado;
}
[cociente,residuo] = division(9,5);
console.log(`El resultado de 9/5, cociente:${cociente}, residuo ${residuo}`)
*/

const division = (numA,numB) => {
    const cociente = parseInt(numA/numB);
    const residuo = numA % numB;
    return{cociente, residuo};
}
const {cociente, residuo} = division(9,5);
console.log(`El resultado de 9/5, cociente:${cociente}, residuo ${residuo}`);
//-------fin de la sesion

