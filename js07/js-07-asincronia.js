console.log("Inicio de mi programa JS07");
//------------Desarrollo sincronico(secuencial) 

const primerPaso = () => {
    console.log("01- Inicio de mi programa JS07")
}

const segundoPaso = () => {
    console.log("02- Inicio de mi programa JS07")
}

const tercerPaso = () => {
    console.log("03- Inicio de mi programa JS07")
}

primerPaso();
segundoPaso();
tercerPaso();

//-------------------Programacion Asincrona--------------------
//setTimeout()
//Establece un temporizador que ejecuta una funcion
//una vez que expire el temporizador

const desarrolloAsincrono = (saludo) =>{
    console.log("Hola " + saludo);
}

const segundoPasoAsincrono = (saludo)  =>{
    //setTimeout(desarrolloAsincrono, 4000,saludo);
    //setTimeout((saludoRef) => console.log("Hola " + saludoRef),4000,saludo);
    setTimeout(() => console.log("Hola " + saludo),4000,saludo);
}

console.log("----------------------------------")
primerPaso();
//setTimeOut(desarrolloAsincrono,3000, "ch26");
segundoPasoAsincrono("ch26 con 4 s");
tercerPaso();

// ------------------ setInterval
//Ejecuta una funcion de manera reiterada con un tiempo de retardo fijo entre cada llamada.

const segundoPasoConIntervalo = (saludo) => {
    setInterval(()=>console.log("La banda malandra " + saludo),2000);
}
console.log("-----------setInterval-----------------------")
primerPaso();
//segundoPasoConIntervalo("ch26 wu, wu");
tercerPaso();

// ------------------Iniciar y detener  setInterval

const refStartInterval = document.getElementById("iniciar");
const refStopInterval = document.getElementById("detener");
const refDateH2 = document.getElementById("fecha");
let idInterval;

const stateButtons = (stopState, startState)=>{
    refStartInterval.disabled = startState;
    refStopInterval.disabled = stopState;
}

const disableStart = () => {
    stateButtons(false,true);
}

const enableStart = () => {
    stateButtons(true,false);
}

enableStart();

//refStartInterval.addEventListener("evento",funcion de callback o flecha)
refStartInterval.addEventListener("click",(event)=>{
    //console.log("Se pulso iniciar");
    idInterval = setInterval(() => {
        refDateH2.innerHTML = new Date().toLocaleString();
    }, 1000);
    disableStart();
    
});

refStopInterval.addEventListener("click",(event)=>{
    //console.log("Se pulso detener");
    clearInterval(idInterval);//detener mi intervalo
    enableStart();
});


