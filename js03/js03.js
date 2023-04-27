// ----- Declaración de bloque --------------------

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.

    */
   let nombre = "Erick";
   const apellido = "Ortiz";
   let edadSergio = 39, edadLuis = 25;
   //Let edadSergio
   //Let edadLuis
   let numCohorteSergio = numCohorteLuis = 26; //No significa que numCohorteLuis sea definida con let
   //var numCohorteLuis = 26
   //let numCohorteSergio = numCohorteLuis

   {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una varible global o de bloque superior, la varible
     local oculta las otras variables, para que la variable
     local sea usada.
     */
    let nombre = "Luis"
    const apellido = "SP";
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Sergio: ${edadSergio} años`);
    console.log(`Luis ${edadLuis} años`)
    console.log(`Sergio cohorte: ${numCohorteSergio} `);
    console.log(`Luis cohorte: ${numCohorteLuis} `)

   }
   console.log(`Me llamo ${nombre} ${apellido}`);
   console.log(`Sergio: ${edadSergio} años`);
   console.log(`Luis ${edadLuis} años`)
   console.log(`Sergio cohorte: ${numCohorteSergio} `);
   console.log(`Luis cohorte: ${numCohorteLuis} `)
}
//console.log(`Me llamo ${nombre} ${apellido}`); Las variables no están definidas
//console.log(`Sergio: ${edadSergio} años`);//Las variables no están definidas
//console.log(`Luis ${edadLuis} años`);//Las variables no están definidas
console.log(`Luis cohorte: ${numCohorteLuis} `)
//console.log(`Sergio cohorte: ${numCohorteSergio} `);

//---------Condicional if-else
/*
   La condicional if ejecuta una sentencia si una condicion especificada es evaluada 
   como verdadera

   Sintaxis 
    if(condicion) sentencia; 

    if(condicion){
        sentencias;
    }

    if(condicion) sentencia; 
    else sentencia; 

    if(condicion) {
        sentencia
    } else {
        sentencia
    }

    if(condicion) {
        sentencia
    } else if(condicion 2){
        sentencia
    } else if(condicion n){
        sentencia; 
    } else {

    }
*/

const temperatura = 21; 
let mensaje; 

/*if(temperatura === 21){
    mensaje = `Temperatura ideal`;
}else{
    mensaje = `${temperatura} grados no es ideal`;
}*/

if(temperatura === 21){
    mensaje = `Temperatura ideal`;
}else if(temperatura > 21 && temperatura < 40 ){
    mensaje = `Temperatura de ${temperatura} grados es caliente`;
}else if(temperatura > 40){
    mensaje = `Temperatura de ${temperatura} grados es super caliente bendiciones`;
}else if(temperatura < 21){
    mensaje = `Temperatura de ${temperatura} grados es fría`;
}else{
    mensaje = `Temperatura de ${temperatura} grados no existe`;
}

console.log(mensaje)

//-------------Ejercicio---------------------------------- 

/*
Preguntar por el numero de mes, del 1 al 12 
de acuerdo al mes desplegar en un Alert(o en el DOM ) la estación del año. 
mes 12,1,2 = invierno
mes 3,4,5 = primavera
mes 6,7,8 = verano
mes 9,10,11 = otoño
 */

/*const getEstacion = ()=>{
    const mes = document.getElementById("mes").value;
    alertEstacion(mes)
    addEstacionToDOM(mes);
};*/

function alertEstacion(mes){
    if( mes == 12 ||mes == 1 ||mes == 2){
        alert("Es el mes de invierno");
     }else if( mes == 3 ||mes == 4 ||mes == 5){
        alert("Es el mes de primavera");
     }else if( mes == 6 ||mes == 7 ||mes == 8){
        alert("Es el mes de verano");
     }else if( mes == 9 ||mes == 10 ||mes == 11){
        alert("Es el mes de otoño");
     }else {
         alert("No existe ese mes");
     }
}

function addEstacionToDOM(mes) {
    let mensaje ="";
    if( mes == 12 ||mes == 1 ||mes == 2){
        mensaje = "Es el mes de invierno";
     }else if( mes == 3 ||mes == 4 ||mes == 5){
        mensaje = "Es el mes de primavera";
     }else if( mes == 6 ||mes == 7 ||mes == 8){
        mensaje = "Es el mes de verano";
     }else if( mes == 9 ||mes == 10 ||mes == 11){
        mensaje = "Es el mes de otoño";
     }else {
         mensaje = "No existe ese mes";
     }
    const p = document.createElement("p");
    p.innerText = mensaje;
    document.body.appendChild(p);
  }

//----------------------------------Switch-----------------------
/*
La instruccion switch evalua una expresion y se compara con el valor de cada instancia en 'case'
y se ejecuta las sentencias asociadas a ese  'case' hasta que se encuentre la sentencia 'break'.

Sintaxis: 
  switch(expresion){
    case valor1: 
        sentencias;
        break;
    case valorN: 
        sentencias;
        break;
    default: 
        sentencias;
  }

 */

const setVelocidadVentilador = (velocidad) =>{
    let msj;
switch(velocidad){
    case 0: 
        msj = "Apagado";
        break;
    case 1: 
        msj = "Velocidad baja";
        break;
    case 2: 
        msj = "Velocidad Media";
        break;
    case 3: 
        msj = "Velocidad Alta"; 
        break; 
    case 4: case 5: 
        msj = "Velocidad super Alta"; 
        break; 
    default: 
        msj = "El nivel no existe";
}
return msj; 

}

console.log("El ventilador esta en: " + setVelocidadVentilador(5));


//-----------------------Practica---------------------------
//Refactorizar el ejercicio anterior y usar un switch

const getEstacion = ()=>{
    const mes = document.getElementById("mes").value;
    let msj;
    switch(parseInt(mes)){
        case 12:
        case 1:
        case 2: 
            msj = "Invierno";
            break;
        case 3:
        case 4:
        case 5: 
            msj = "Primavera";
            break;
        case 6:
        case 7:
        case 8:
            msj = "Verano";
            break;
        case 9:
        case 10:
        case 11:
            msj = "Otono"; 
            break;  
        default: 
            msj = "No existe ese mes";
            console.log(mes);
    }
    alert(msj);
    addEstacionToDOM(msj);
};

function addEstacionToDOM(msj) {
    const p = document.createElement("p");
    p.innerText = msj;
    document.body.appendChild(p);
  }
//----------------------------Operador condicional ternario
/* 
  Es el unico operador de JavaScript que tiene 3 operandos.Generalmente se usa 
  como opcion a la sentencia if-else

  Sintaxis: 
    condicion ? expresionSiCondicionEsVerdadera:expresionSiCondicionEsFalsa;
 */
    const subtotal = 1_000;
    const pagoTarjetaCredito = true; 
  /*   let msj;
    if(pagoTarjetaCredito) msj = subtotal*1.025;
    else msj = subtotal *1; */
    console.log(`La cuenta es de ${pagoTarjetaCredito?subtotal*1.025:subtotal} pesos`);

    const edad = 18; 
    //Se permite el acceso al antro de mala muerte? 
    console.log(`Acceso ${edad >=18 ? "Permitido":"Denegado"}`);
    //A los de 17 solo con permiso 
    console.log(`Acceso ${edad >=18 ? "Permitido": (edad === 17 ? "Solo con permiso":"Denegado")}`);

    //------------Practica ---------------------------
    /*
    Refactorizar el ejercicio de saludo con un operador ternario.
     */
/*
    function saludo(numero) {
        if (numero > 1) {
          saludo(numero - 1);
        }
        console.log("Saludo " + numero);
      }
*/
    function saludo(numero) {
        numero>1 ? saludo(numero - 1) :{};
        console.log("Saludo " + numero)
    }
    saludo(10);
    
      
