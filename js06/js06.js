console.log("Sesion JS06");

//funcion definida
function findElementByIdFnc01(/*parametros*/){
    /*Instrucciones*/
    return null;
}

//funcion expresada, las funciones expresadas no se cargan en memoria hasta que se vayan a utilizar no tienen hoisting se declaran antes de usarse / funcion anonima
const findElementByIdFnc02 = function (/*parametros */){
    return null;
};

const findElementByIdFnc03 = (/*parametros */) =>{
    return 3*4;
};

const findElementByIdFnc04 = (/*parametros */) => 3*4;

const findElementByIdFnc05 = variableParametro  => 3*4;

const findElementById = (nameOfDeveloper) => {
    const tituloRef = document.getElementById("titulo");
    //const nombreDesarrollador  = ", Erick";
    //tituloRef.innerHTML = tituloRef.innerHTML +", "+ nameOfDeveloper;
    tituloRef.innerHTML +=", "+ nameOfDeveloper
}

findElementById("Erick");

const changeSubtitleById = (newTxt)=>{
    const subtitleRef = document.getElementById("subtitulo");
    subtitleRef.innerHTML = `${subtitleRef.innerHTML}, <em>${newTxt}</em>`;
}
changeSubtitleById("viernes de cholos");

//--------------------Encontrar elementos por su tag
//getElementsByTagName()

const changeEmphasis = (newTxt,link) => {
    const emphasisRef = document.getElementsByTagName("em");
    //console.log(emphasisRef);
    for(element of emphasisRef){
        console.log(element);
        element.innerHTML = `<a href=${link}>${newTxt}</a>`;
    }
};

changeEmphasis("viernes friki","./js06.html");

//-----------------------Selector universal
//querySelector. Podemos hacer referencias por id,clase y tag

//Query selector solo entrega el primer elemento que encuentre
const findElementByQuerySelector = () => {
    const refElements = document.querySelector("p em");
    refElements.innerHTML = `La CH 26 es bien <strong>chida</strong> y les gusta el 11:11`
}

findElementByQuerySelector();

//--------------------------Crear nuevo elemento-------------
//appendChild

const newElement = () => {
    const newElementRef = document.createElement("p"); //<p> </p>
    newElementRef.innerHTML = `La Ch26 le gusta: 
    <ul>
        <li>El pan de muerto</li>
        <li>El chismesito</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>El pulque</li>
    </ul>`

    const articleRef = document.querySelector("article");
    articleRef.appendChild(newElementRef); //Se agrega el nuevo elemento

    //Clonar el nodo anterior
    const nodoClonado = newElementRef.cloneNode(true); //lo clonamos para generar una nuevo objeto
    document.querySelector("#article-news").appendChild(nodoClonado);
};
newElement();

const changeColor = (color) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;
};
changeColor("red");

//Agregar a un elemento un border
//.style.border
//.style.border = "thick solid #0000FF"

const addBorder = (color) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.border = `thick solid ${color}`;
};
addBorder("green");

//----------------Propiedades de visualizacion (desaparecer elementos)-------
//display: none(Quitar el elemento del DOM).
//visibility: hidden(Ocultar el elemento). 

const quitarBoton= () =>{
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display = "none"; //quitar el elemento
}
const ocultarBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "hidden"; //ocultar el elemento
}

const reestablecerBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "visible"; //mostrar el elemento
    buttonRef.style.display = "inline";
}

