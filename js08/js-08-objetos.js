console.log("js 08 Objetos");

//-----------Crear un objeto en js-------------------
const frutasColores = {
    //clave:valor
    fresa:["roja"],
    pepino:["verde"],
    mango:["amarillo"],
    naranja:["anaranjado"],
    mandarina:["anaranjado"],
    mora:["morada"],
    pitaya:["rosa","rojo","blanco","amarillo"]
};

//------------- Formas de leer un objeto
//Leer el color del pepino
console.log("El pepino es: " + frutasColores.pepino);
//Leer el color de la pitaya
console.log("El pepino es: " + frutasColores.pitaya[1]);//rojo
//Leer el color de la pitaya
console.log("El pepino es: " + frutasColores.pitaya.join('-'));//rosa-rojo-lanco-amarillo

//Modificamos un valor 
//agregar el color verde al mango
frutasColores.mango.push("verde");
//frutasColores.mango = "verde"; // sustituye el arreglo
console.log("El mango es: "+ frutasColores.mango);
console.log("El mango es: "+ frutasColores["mango"]);

//--------------Iterando los objetos--------------------------
//Iterar los valores  con for-in
//Iterar sobre todas las propiedades (keys) de un objeto
for (let fruta in frutasColores){
    console.log(`${fruta} tiene los colores ${frutasColores[fruta]}`);
}

//-----------------uso de symbol 
/*
    Symbol() Se utiliza para añadir claves de propiedades únicas y que estén ocultas
    a otros mecanismos como la iteracion y stringify.

    Esto nos sirve para realizar el concepto de encapsulacion. 

*/
const sueldoOculto = Symbol();

const datosEmpleado = {
    nombre: "El kesa",
    apellido: "Britas",
    //sueldo: 50_000
    [sueldoOculto]:50_000
}

for(let dato in datosEmpleado){
    console.log(`${dato}: ${datosEmpleado[dato]}`)
}

console.log(datosEmpleado[sueldoOculto]);
localStorage.setItem("datos-empleado",JSON.stringify(datosEmpleado));

sessionStorage.setItem("datos-empleado",JSON.stringify(datosEmpleado));

//Bote de lunetas 
const boteLunetas = {
    gramaje: 20, 
    sabor: "chocolate", 
    cost: 35,
    abrir: function(){
        return "Despachar producto";
    },
    comer: function(gramosComidos){
        return this.gramaje-= gramosComidos;
    }
}

console.log("Mi bote de lunetas tiene(g): " + boteLunetas.comer(5));

const car = {
    color: "black",
    type: "sedan",
    brand: "Hyundai",
    price: 250_000,
/*     igniteEngine: function (boolean) {
      if (boolean === true) {
        return "Engine is on";
      } else {
        return "Engine is off";
      }
    }, */
    igniteEngine: ( state ) => state? "Engine is on": "Engine is off"

  };
  
  console.log(car.igniteEngine(false));
  
