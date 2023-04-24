console.log("Sesion JS01");

//Son 7 datos primitivos:
//String: "Hola"
console.log("Tipo de dato String: ", "Hola");

//Number 12, -45, 367.12, +infinity, -infinity, NaN
//Los numericos usan 64 bits para almacenar, pero solo se usan 53 bits para representar el numero
console.log("Tipo de dato Number: ", 12, -45, 367.12, 45/0, -45/0, 56*"Hola");
console.log("Valor maximo: ", Number.MAX_VALUE);
console.log("Valor maximo: ", Number.MAX_SAFE_INTEGER);

//BigInt
//Sirve para representar valores numericos enteros de los que el tipo number no puede representar o no es seguro.
console.log("MAX_SAFE_INTEGER + 1: ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2: ", Number.MAX_SAFE_INTEGER + 2);

let myBigInt=9007199254740991n; //Se agrega la letra n al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n: ", myBigInt + 1n);
console.log("MAX_SAFE_INTEGER + 2n: ", myBigInt + 2n);

//Boolean   
//Tenemos solo 2 estados: true/false
console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

//Undefined
//Un dato que es declarado, pero no definido en el tipo

let myVar; //Solo se declara
console.log("Tipo de dato undefined: ", myVar);

//null
//Intensionalmente se borra el tipo de dato

let myVarNull; //Solo se declara 
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));//undefined
myVarNull = "Saludos señor PP"; //se asigna un dato string 
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));//string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));//object

//Symbol 
//crea propiedades privadas en los objetos

//Tipos de datos Object
//Object: 

const misDatosDePerfil = {
    //clave: valor
    nombre:"Erick" ,
    apellido:"Ortiz",
    edad:25,
    isBelicoso:false,
    musicaPreferidaPorGenero:{
        rock:"La celula que explote",
        corridosTumbados:"Ella baila sola"
    },
    nombreCompleto:function fullName(){
        //return misDatosDePerfil.nombre +" " +misDatosDePerfil.apellido;
        return this.nombre +" " + this.apellido;
    }
}

const misDatosDeInstagram = {
    //clave: valor
    nombre:"El Belicoso" ,
    apellido:"666",
    edad:null,
    isBelicoso:true,
    musicaPreferidaPorGenero:{
        corridosTumbados:"El belicoso"
    },
    nombreCompleto:function fullName(){
        //return misDatosDePerfil.nombre +" " +misDatosDePerfil.apellido;
        return this.nombre +" " + this.apellido;
    }
}

console.log("Datos completos: ", misDatosDePerfil); 
console.log("Nombre: ", misDatosDePerfil.nombre);
console.log("Musica de fin de semana: ", misDatosDePerfil.musicaPreferidaPorGenero.corridosTumbados);
console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto());
console.log("Nombre completo: ", misDatosDeInstagram.nombreCompleto());

//Array 
//Almacena diferentes tipos de datos, su primer elemento es el indice 0

const cancionesPP = [
    "Soy el belicon", 
    "El azul",
    "El Tsurito",
    "AMG",
    {
        2020: 5,
        2021: 30,
        2022: 5,
        total:91
    }
];

console.log("Cancion con color: " + cancionesPP[1]);
console.log("Canciones hechas en el año 2021: " + cancionesPP[4][2021]);//Así no se recomiendo con objetos
console.log("Canciones hechas en el año 2021: " + cancionesPP[4]["2021"]);
console.log("Canciones hechas en el año 2021: " + cancionesPP[4].total);
console.log("Canciones hechas en el año 2021: " + cancionesPP[4]["total"]);


//-----------------------------------------------
//Conversión de datos
const myNumber = 420; //minutos de la sesion JS 01
console.log("Num. minutos en la sesion: " + myNumber);
//toString
const myNumberTxt = String(myNumber);
console.log("Num. minutos en la sesion: " + myNumber);

//toNumber
const myString = "420";
const sumatoria = 80 + Number(myString);
console.log("Valor de sumatoria: " + sumatoria);

//toParseInt
const myStringInteger = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log("Valor de sumatoria entera: " + sumatoriaEntera);

//toParseFloat
const myStringFloat = "420.2020";
const sumatoriaFloat = 80 + parseFloat(myStringFloat);
console.log("Valor de sumatoria float: " + sumatoriaFloat);

//to Boolean 
const isBelicoso = "false"
let auxiliar = Boolean(isBelicoso);
console.log(typeof isBelicoso);
console.log(Boolean(isBelicoso));


console.log(typeof auxiliar);
console.log(auxiliar);

if(Boolean(isBelicoso))
    console.log("Denle su belikin");
else 
    console.log("Abra paso a la barredora");

//Boolean
//para que sea False, debe ser: "",0,null,undefined
//Number
//[] = 0, [30] = 30, [3,1] = NaN, false = 0, true = 1, function(){} = NaN
//String
//[]="",[1,2] = "1,2",function(){} = "function(){}",{} = "[object,object]"






