console.log("Sesion Js04 Arreglos y ciclos");

//Declarar un array 
const nombresCh26 = ["Sofi","Alejandro","Ixchel","Said"];
//Usando el constructor de arreglos 
const apellidosCh26 = new Array("Montelladno", "Torres", "Vazquez");
const numCajonesEstacionamiento = new Array(4); //[ , , , ]

console.log("Apellido de Sergio " + apellidosCh26[1]);

//Agregar  un nuevo apellido al final del arreglo apellidos

apellidosCh26.push("Ortiz");

console.log(apellidosCh26);

//Matrices(arreglos de 2 dimensiones)
//Arrays anidados
//[[],[],[]]
const personasEnCohorte = [ 
    /*ch26*/    ["Arath"    , "José"  , "Karen"     , "Sofi"  ], 
    /*ch27*/    ["Manuel"   , "María" , "Francisco" , "Pablo", "Pepe"], 
    /*ch28*/    ["Doris" , "Brendan"   , "Lucas" ] 
    ];

console.log("Personas ch27: " + personasEnCohorte[1].join(", "));

//Accendiendno a Francisco
///*ch27*/    ["Manuel"   , "María" , "Francisco" , "Pablo", "Pepe"], 
console.log("Paco en ch27: " + personasEnCohorte[1][2]);


// Iterar todos los elementos en un arreglo de 2 dimensiones.

for (let fila = 0; fila < personasEnCohorte.length; fila++) {
    console.log(`Indice ${fila}: ${personasEnCohorte[fila]}`)
    for(let columna = 0; columna < personasEnCohorte[fila].length;columna++){
        console.log(`Nombre : ${personasEnCohorte[fila][columna]}`)
    }
}

// Usando forEach
personasEnCohorte.forEach( fila => fila.forEach( columna =>  console.log(columna) ));

//For of 
//Ejecuta sentencias por cada elemento de un objeto iterable (arrays, strings y objetos)

const myName = "Sergio";
for(let char of myName){
    console.log(char);
}

for(let fila of personasEnCohorte){
    for(let columna of fila){
        console.log(columna);
    }
}
    

//-----------------------Consideraciones para el ciclo For-----------
//No es necesario indicar el inicio, la comparacion y la expresion final
/*
Sintaxis ciclo For:
for (inicio, comparacion; expresionFinal){
    sentencias;
}
 */

let nIteracion = 0; 
for(/*inicio */; /*Comparacion*/ ; /*ExpresionFinal */ ){
    console.log(nIteracion);
    if(nIteracion === 5)break;
    nIteracion++;
}

//------------------------------Ejercicio 
//Iterar y mostrar a las personas en personasEnCohorte y detener cuando se encuentre a María
//Dejar de iterar

personas: //Se usa un label para indicar en el break hacia que ciclo romperá. 
for(let fila of personasEnCohorte){
    for(let columna of fila){
        console.log(columna);
        if(columna == "Maria") break personas;//Se indica el label que rompe
    }
    //if(columna == "Maria")break;//Si no se usa el label, se tiene que realizar esto
}

//Continue 
/*
Termina la ejecucion de la sentencia en la iteracion actual y continua la ejecucion del ciclo con la proxima iteracion (o en el label que se indique).
 */

console.log("============= Uso de continue==================")

//No imprimir a María
personas: //Se usa un label para indicar en el break hacia que ciclo romperá. 
for(let fila of personasEnCohorte){
    for(let columna of fila){
        if(columna === "Maria" || columna === "María") continue;
        
    }
    
}

//-----------------------Ciclo while 
/*
Crea un bucle que ejecuta una sentencia mientras la condicion especificada sea verdadera . 

Sintaxis: 

while(condicion)
sentencias;

 */
/*
let counter = 0; 
while(confirm("¿Quieres continuar?")){
    console.log(`Has continuado ${++counter} ${counter>1?"veces":"vez"}`)
}
*/

const number = [9,5,6,7,8];
//numbers.forEach(number => console.log(number));
let i =0;
while(i<number.length){
    console.log(number[i],)
    i++;
}

//---------------------Practica
/*
 
*/

//------------Ciclo do While 

/*
Crea un bucle que ejecuta una sentencia hasta que la condicion de comprobacion se evalue como falso. 
La condicion se evalua despues de ejecutar la sentencia, por lo que la sentencia se ejecuta por lo menos una vez.
Sintaxis: 
do{
    sentencias;
}while();
 */
let iteracion = 0; 
/* do{
    iteracion++;
    console.log("N.iteracion do-while: " + iteracion);
}while(confirm("¿Deseas continuar?")); */

let valor = 10; 
while(valor < 5){
    console.log("While" + valor);
    valor ++;
}

valor = 5; 

do{
    console.log("Do-While" + valor);
    valor ++;
}while(valor < 5);

/*
FIFO: first input, first output
LIFO: last input, first output
 */

const alimentos = [];

//USAR FIFO
alimentos.push("Manzanas del lunes");
alimentos.push("Manzanas del miercoles");
console.log("alimentos");

//Sacar las manzanas
console.log("Sacando las manzanas antiguas: " + alimentos.shift());
console.log("alimentos");
console.log("Sacando las manzanas antiguas: " + alimentos.shift());
console.log("alimentos");

//Usar LIFO
const productos = []; 
//temporada navideña
productos.push("Desarmadores");
productos.push("Luces de colores"); 
console.log(productos);
console.log("Sacando el producto reciente: " + productos.pop()); 
console.log(productos);


