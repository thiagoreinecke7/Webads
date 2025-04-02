//Hello World
console.log("Hello");

//Hello World com mensagem de alerta
//alert("Hello");

nome= "Fulano";
//Imprima no log o tipo da variável nome.
console.log(typeof(nome));
//alert(nome);
nome= 10;
console.log(typeof(nome));

//Declaração de variáveis.
/*
var
let
const
*/

let n; //variável de escopo local.
var i; //variável de escopo global.
const pi=3.1416; //define uma constante imutável no contexto.

/*nome = prompt("Informe seu nome");
sobrenome = prompt("Informe o sobrenome");
nome_completo = nome + " " + sobrenome;
console.log(nome_completo);*/

//Solicite 2 números e apresente a soma deles.
let a = prompt("Digite um número:");
a = Number(a);
let b = prompt("Digite outro:");
b = Number(b);
console.log(a + b);

//Estrutura condicional;
/*if (condição){

}*/
if (a + b > 18){
    console.log("A + B é > 18")
    console.log(`${a} + ${b} é > 18`)
}
// else if, else

i = 0;
while (i < 10){
    console.log(i)
    i++
}

for (i = 0; i < 10; i++){
    console.log(i);
}

function soma(a,b){
    return a + b;
}

console.log(soma(1, 2))