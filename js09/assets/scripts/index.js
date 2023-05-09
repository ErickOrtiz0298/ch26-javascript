console.log("JS09 uso de Axios");

const url = "https://reqres.in/api/users?page=2";

const getUsersFetch = () =>{
    fetch(url)
        .then(response => response.json())
        .then(users =>{
            console.log(users.data)
        })
        .catch(error => console.log(error));
} 

//Axios ya hace por default la conversion de json a objeto
const getUsersAxios = () =>{
    axios.get(url)
        .then(users => {
            console.log(users.data.data);
        })
        .catch(error => console.log(error));
};

//-----Usar Axios con async y await
const getUsersAxiosAwait = async() => {
    try {
       const users = await axios.get(url);
       console.log(users.data.data);
    } catch (error) {
        console.log(error);
    }
};

//------------Solicitud POST con Axios. --------------------
const postUsersAxios = () => {
    axios
    .post(urlPOST,user)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
};

const user = {
    name:"El ivan",
    job:"leader"
}

const urlPOST = "https://reqres.in/api/users";

