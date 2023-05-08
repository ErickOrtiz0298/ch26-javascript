/*

*/

const price =Symbol();
class Car{
     
    #brand; 
    #price;
    constructor(nameCar,brand,price){
        this.name = nameCar;
        this.#brand = brand;
        this.#price = price;
    }
    igniteEngine = ( state ) => state? "Engine is on": "Engine is off";
    getDescription () {
        return `El auto es: ${this.name}, de la marca ${this.#brand} tiene un costo de ${this.#price}`; 
    }
    set brand(newBrand ){
        this.#brand = newBrand;
    }

    get brand(){
        return this.#brand;
    }

    get price(){
        return this.#price;
    }
}

class ElectricCar extends Car{
    #numberOfBatteries; 

    constructor(nameCar,brand,price,numbeOfBatteries){
        super(nameCar,brand,price);
        this.#numberOfBatteries = numbeOfBatteries;
    }

    getDescription(){
        return `${super.getDescription()},tiene ${this.#numberOfBatteries} baterias`; 
    }
} 

export{Car,ElectricCar};