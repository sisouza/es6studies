/* ESCOPOS, LET, VAR E CONST - ES6*/

/* Existem tres formas de declarar variaveis em JavaScript:*/
var variavel1 = 1;
const variavel2 = 2;
let variavel3 = 3;

/*acessando os valores das variaveis :*/
console.log(variavel1)
console.log(variavel2)
console.log(variavel3)

/*Mas há algumas diferenças entre elas, por exemplo 
variaveis do tipo const não podem ter seus valores alterados 
já que como o proprio nome indica são constantes :*/

const pi = 3.14;

//tentanto atribuir um novo valor para "pi"
pi = 3.15;

//resultará em erro pois nao podemos alterar o valor de uma constante
console.log(pi)

/*ENTENDENDO O ESCOPO DE VAR :*/

var umaVarGlobal = "Oi humanx"

//acessando a var em uma função

function mostrar(){
    console.log("var global:" + umaVarGlobal)
}

mostrar()

//acessando var no escopo global
console.log("consigo acessar aqui também:" + umaVarGlobal)


/*Escopo Local:*/


//Definindo uma var em uma função ou seja no escopo local

function mostrarMsg(){
    var umaVarLocal = "eu só funciono nesta função carx humanx!"
    console.log(umaVarLocal)
}

mostrarMsg()

/* acessando a var local no escopo global, resultará em erro pois
a variavel foi definida em escopo local assim só "existe" dentro da
função em que foi criada, O mesmo é valido para variaveis do tipo let*/

console.log(umaVarLocal)




/* DIFERENÇA ENTRE LET E VAR */

let a = 2;
let b = 1;

//definindo um bloco e criando a variavel dentro dele
if (a > b){
    let c = "sou let em escopo de bloco ouse me acessar fora daqui"
    console.log(c)
}

//ouse tentar:
console.log(c)

var d = 2;
var e = 1;

//definindo um bloco e criando a variavel dentro dele
if (d > e){
    var f = "oi sou var em um escopo de bloco"
    console.log(f)
}

/* Podemos acessar var fora dos blocos mas com
let isso não é possivel */

console.log("mas para mim isso não significa nada:" + f)