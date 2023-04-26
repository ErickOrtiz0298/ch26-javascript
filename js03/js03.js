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
}else if(temperatura > 21){
    mensaje = `Temperatura de ${temperatura} grados es caliente`;
}else if(temperatura < 21){
    mensaje = `Temperatura de ${temperatura} grados es fría`;
}else{
    mensaje = `Temperatura de ${temperatura} grados no existe`;
}

console.log(mensaje);
