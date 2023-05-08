console.log("Js-08-clases");

//----Crear una clase 
//Para el nombre se usa la notacion Pascal-Case (UpperCamelCase)

class Car{
    //Metodo constructor 
    constructor(nameCar,brand,price){
        //console.log("Has creado un nuevo objeto" + nameCar);
        this.name = nameCar;
        this.brand = brand;
        this.price = price;
    }
    igniteEngine = ( state ) => state? "Engine is on": "Engine is off";
    /*
     igniteEngine(){}
     */
    //Agregar una funcion que describa las caracteristicas del auto
    getDescription () {
        return `El auto es: ${this.name}, de la marca ${this.brand} tiene un costo de ${this.price}`; 
    }
}

//-----Usar la clase para instanciar(crear)objetos------------
//para instanciar se usa new NombreClase
const elantra = new Car("Elantra","Hyundai",450_000);
const aveo = new Car("Aveo","Chevrolet",250_000);

console.log(elantra);
console.log(aveo);

console.log(elantra.name  + " " + elantra.igniteEngine(true));
console.log(elantra.getDescription());
console.log(aveo.getDescription());

