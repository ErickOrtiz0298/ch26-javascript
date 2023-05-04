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

//Recuperar la informacion de local storage.Sí, recuperar y que se impruima en consolña.
//https://fakestoreapi.com/products/category/jewelery recuperar informacion en la consola.
//https://developer.mozilla.org/es/docs/Web/API/Window/localStorage


