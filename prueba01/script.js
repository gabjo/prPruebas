import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Hola Mundo");
let num1 = prompt("Número 1: ");
let num2 = prompt("Número 2: ");



function multiplicar(n1, n2){
    return n1 * n2;
}

console.log(multiplicar(num1, num2));