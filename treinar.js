//4-Faça um algoritmo para ler um número inteiro, armazenar em uma variavel, calcular o dobro e exibir.
let numero = 5;
let dobro = 2;
{
    let resultado = 5 * 2;
    console.log("O dobro de " + resultado);
}

//5- Faça um algoritmo para ler tres numeros inteiros, armazenar em variaveis, e exibir a soma, a subtração, multiplicação e a média dos três numeros digitados
let num1 = 10
let num2 = 50
let num3 = 100

let soma = num1 + num2 + num3;
let subtracao = num3 - num2 - num1;
let multiplicacao = num1 * num2 * num3;

let media = soma / 3;

console.log("Soma " + soma);
console.log("Subtracao " + subtracao);
console.log("Multiplicacao " + multiplicacao);
console.log("Media " + media);

//6- Faça um algoritmo para ler duas notas, calcular a média. 
// E SE - a média >5 Exibir Aprovado
// Se a média < que 5 exibir Reprovado
// Se média = 5 Exibir exame
let nota1 = 2
let nota2 = 2

let media2 = (nota1 + nota2) / 2;
console.log("A média das notas é: " + media2);
if (media2 > 5) {
    console.log("Aprovado")
}
if (media2 < 5) {
    console.log("Reprovado")
}
if (media2 == 5) {
    console.log("Exame")
}