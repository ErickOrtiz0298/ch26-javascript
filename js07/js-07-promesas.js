console.log("JS07-promesas");

/*
    Una promesa (promise) es un objeto que representa la terminacion o fracaso 
    de una operacion asincrona.
    Para crear una promesa se usa el constructor newPromise();
*/
//const pinkiPromise = new Promise(funcion de callback);
const pinkiPromise = new Promise((fncCallBackResolve,fncCallBackReject)=>{
    const menorEdad = false; 
    if(menorEdad)
        fncCallBackResolve("Hay que estar siempre juntos");
    else 
        fncCallBackReject("No te conozco")
});

//Consumir las promesas 
//usando la funcion then,catch y finally

console.log("Antes de consumir la promesa");
//pinkiPromise.then(fncCallBack).catch(fncCallBack);
pinkiPromise
    .then((response)=> console.log("Promesa Resuelta " + response))
    .catch((error)=> console.error("Tu promesa fue rechazada " + error)); //then consume la parte del resolve // Catch consume la parte del reject

console.log("Despues de consumir la promesa");

//------------------Una promesa que reciba dos numeros A y B y los divida
//En caso de que B sea cero, me envie un rechazo diciendome por qué no se puede realizar 
//la division

const division = new Promise ( (fncCallBackResolve, fncCallBackReject )=> {
    const a = 10;
    const b = 0;

    if(b != 0){
        fncCallBackResolve( a/b )
    }else{
        fncCallBackReject( "No se puede dividir por cero" )
    }
});

division
    .then( (response)=> console.log("promesa resuelta, la division es: " + response))
    .catch( (error) =>console.error("Tu promesa fue rechazada: " + error ));

//-------------------------------Haciendo la division con parametros---------------------------

const divisionConParametros = (a,b) =>{
    /*En lo sucesivo  //const myPromise se cambia por return */
    const myPromise = new Promise((resolve,reject) => {
        if(b===0)
            reject("No se puede realizar una division por cero"); 
            //setTimeout(() =>reject("¡Division por cero!"), 5000);
        else
            resolve(a/b);
    });
    return myPromise;
}

divisionConParametros(3,4)
    .then((response)=>{
        console.log(response);
        return response + 10
    }) //0.75 + 10
    .then((mas10Unidades) => console.log(mas10Unidades))
    .catch((error)=>console.log(error))
    .finally(()=>console.log("Se terminó la division"));

divisionConParametros(3,0)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error));


//-----------------Consumir las promesas con async y await

const realizarDivisionSincrona = async ()=>{
    console.log("---------Resolviendo Divisiones----------")
    const resultado = await divisionConParametros(20,4); //5
    console.log(resultado)
    console.log(resultado + 100);//105
    //const resultadoErroneo = await divisionConParametros(20,0);
    //console.log(resultadoErroneo)
    console.log("---------Terminando Divisiones----------")
}


realizarDivisionSincrona();

//--------------------Manejo de excepciones con try y catch
/*Sintaxis 
try{

}catch(error){

}
*/
const manejoDeExcepciones =async () =>{
    console.log("---------Resolviendo Divisiones usando try y catch----------");
    try {
        const resultadoErroneo = await divisionConParametros(20,0);
        console.log(resultadoErroneo);
    } catch (error) {
        console.error("Asyn-Await" + error);
    }
    
    
    console.log("---------Resolviendo Divisiones usando try y catch----------");

};  

manejoDeExcepciones();
//-------------------------------------
//Promise.resolve(); //Devuelve un promesa

const promesaRapida = Promise.resolve(123);

//----------Resolver (consumir) con .then
const consumirConThen = () =>{
    promesaRapida.then(value => console.log("Consumir con Then " + value));
    console.log(456);
}

consumirConThen();

//----------Resuelva (consumir) con Async-Await

const consumirConAwait = async () =>{
    console.log("Consumir con await " + await promesaRapida);
    console.log(789);
};

consumirConAwait();

// 456 ---
// then 123 ----
// await 123 ----
// 789 ------








