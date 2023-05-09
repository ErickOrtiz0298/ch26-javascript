
const buscarPalindromo = (str)  =>{
    str =str.toLowerCase().split(" ").join("");
    console.log(str);
    const strReversed = str.split("").reverse().join("");
    console.log(strReversed);
    return strReversed === str ? true : false;
  }

  console.log(buscarPalindromo("somos o no somos"));

  module.exports = {buscarPalindromo};