//ToBe

/*
Hacer pruebas unitarias a una funcion que verifique que si una palabra es palindromo.

Palindromo: La palabra se lee igual de derecha a izquierda y de izuierda a derecha 


"Ana" -> true 
"Bob" -> true
"Radar" -> true 
"Saoko" -> false
"Somos o no somos" -> true

 */

const {buscarPalindromo} = require('../scripts/palindromo.js');

test("Ana -> true", ()=>{
    expect( buscarPalindromo("Ana")).toBe(true) ;
} );

test("Bob -> true", ()=>{
    expect( buscarPalindromo("Bob")).toBe(true) ;
} );

test("Radar -> true", ()=>{
    expect( buscarPalindromo("Radar")).toBe(true) ;
} );

test("Saoko -> true", ()=>{
    expect( buscarPalindromo("Saoko")).toBe(false) ;
} );

test("Somos o no somos -> true", ()=>{
    expect( buscarPalindromo("Somos o no somos")).toBe(true) ;
} );