console.log("js 07 Api Fetch");

/*
 La Api Fetch nos ayuda a acceder y manipular peticiones HTTP. Proporciona
 una forma lógica y fácil de obtener recursos de la red de manera ASÍNCRONA.

Sintaxis:
 Solicitud get

 fetch(  url )
  .then( )
  .catch( );
 */

const url = "https://fakestoreapi.com/products";

const getProducts = (httpUrl) => {

    fetch(httpUrl)
        //.then(result=>console.log(result))
        .then(result =>{
            console.log("Respuesta: " + result.status);
            return result.json();//conversion de JSON a objeto La funcion JSON es asincrona por eso debemos consumirla en otro then
        })
        .then((productsOBJ)=>{
            console.log(productsOBJ)
            //Quiero imprimir solo el titulo de cada producto
            productsOBJ.forEach(element => console.log(element.title));
        })
        .catch(error=>console.log(error));
}

//getProducts(url);

//--------------------------------Consumir Fetch usando async-await
const getProductsWithAwait = async (httpUrl) => {
    try {
        const productsJson =await fetch(httpUrl);
        //console.log("Status" + productsJson.status);
        const products = await productsJson.json();//conversion de JSON a objeto
        console.log(products);
        localStorage.setItem("mis-productos", JSON.stringify(products))//key,value
                                            //Convertir a un formato facil de leer Convetir a Json
        for(let product of products){
            console.log(product.title);
        }
        
    } catch (error) {
        console.log(error);
    }
};

getProductsWithAwait(url);

let valorLeidoLocalStorage = localStorage.getItem('mis-productos');
console.log("---------INFORMACION DE PRODUCTS DESDE LOCALSTORAGE--------")
console.log("Esto se leyo desde localStorage: " + valorLeidoLocalStorage)

//Recuperar la informacion de local storage.Sí, recuperar y que se impruima en consolña.
//https://fakestoreapi.com/products/category/jewelery recuperar informacion en la consola.
//https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

console.log("---------INFORMACION DE JEWELERY DESDE LOCALSTORAGE--------")

const url2 = "https://fakestoreapi.com/products/category/jewelery";

const getProductsWithAwait2 = async (httpUrl) => {
    try {
        const productsJson =await fetch(httpUrl);
        //console.log("Status" + productsJson.status);
        const products = await productsJson.json();//conversion de JSON a objeto
        console.log(products);
        localStorage.setItem("mis-productos2", JSON.stringify(products))//key,value
                                            //Convertir a un formato facil de leer Convetir a Json
        for(let product of products){
            console.log(product.title);
        }
        
    } catch (error) {
        console.log(error);
    }
};

getProductsWithAwait2(url2);

let valorLeidoLocalStorage2 = localStorage.getItem('mis-productos2');
console.log("Esto se leyo desde localStorage2: " + valorLeidoLocalStorage)

//------------Realizar una solicitud POST

const postUser = (url,userData) =>{
    //fetch().then(()=>{}).catch(()=>{});
    //fetc(url, objeto con opciones)
    fetch(url,{
        method:'POST', //PUT o DELETE
        body: JSON.stringify(userData), //Los datos del usuario convertidos a formato JSON
        headers:{'Content-Type':'application/json'}
    })
    .then((response)=>response.json()) /*convirtiendo a json*/
    .then(register => console.log(register.createdAt))
    .catch((error)=>{console.log(error)});
}

const user = {
    name:"El ivan",
    job:"leader"
}

const urlPOST = "https://reqres.in/api/users";

postUser(urlPOST,user);
