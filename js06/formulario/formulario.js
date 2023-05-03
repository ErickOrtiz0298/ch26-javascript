console.log("Sesion JS06-Formulario");
const refForm = document.forms["registro"];


refForm.addEventListener('submit', (event) =>{
    event.preventDefault(); //omita las acciones por default
    console.log(event);
    
    const password = refForm.elements["inputPassword4"];
    const address = refForm.elements["inputAddress"];
    const city = refForm.elements["inputCity"]; 
    const zip = refForm.elements["inputZip"];

    //console.log(email.value);
    //console.log(typeof(email.value));
    // Crear el objeto con los datos del formulario
    user = {
        email: refForm.elements["inputEmail4"].value || "sin email",
        password: password.value,
        address: address.value,
        city: city.value,
        zip:zip.value,
        checkbox: refForm.elements["gridCheck"].checked

    }
    console.log(user);
});