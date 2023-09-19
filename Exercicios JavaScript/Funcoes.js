function somar() {
    const a = 10;
    const b = 20;
    const resultado = a + b;
    console.log(resultado);
}
somar()

//1-Crie um metodo de subtração sem parametros e sem retorno
function sub() {
    const sub1 = 100;
    const sub2 = 50;
    const subtracao = sub1 - sub2;
    console.log(subtracao);
}
sub()

//2-Crie um método de subtração com parâmetro;
function parametro(a, b) {
    const subtracao = a - b;
    console.log('a: ' + 50, 'b: ' + 25)
    console.log(subtracao);
}
parametro(50, 25)

//Exemplo Soma com Return
function somaComRetorno(a, b, i) {
    const somatoria = a + b + i;
    return somatoria;
}
console.log(somaComRetorno(10, 20, 30))

//Subtracao com Return
function subtracaoComRetorno(a, b, i) {
    const sub1 = a - b - i;
    return sub1;
}

console.log(subtracaoComRetorno(30, 15, 5))

//2- Crie um metodo que retorne a multiplicação de 2 valores e imprima o retorno
function multiplicacao(x, y) {
    const mult = x * y;
    return mult;
}

console.log(multiplicacao(10, 5))

//3-Crie um metodo que retorne uma frase e imprima o retorno
function imprimirFrase(frase) {
    return frase;
}
console.log(imprimirFrase("O amor é lindo!"));

//4- Faça um metodo sem retorno e sem parametro para ler e exibir uma palavra
function lerExibirPalavra() {
    const palavra = ("Ola")
    console.log("A palavra é: " + palavra)
}
lerExibirPalavra();

//5-Faça um metodo com retorno que receba como parametro dois valores e retorne os valores das variaveis, trocados
function trocarValores(valor1, valor2) {
    const trocar = valor2;
    valor2 = valor1;
    valor1 = trocar
    console.log('valor1:' + valor1 + ' valor2:' + valor2)
}
trocarValores(30, 20);

//6-Faça um metodo com retorno que receba como parametro um numero inteiro e retorne true se o valor do parametro divido por 2 for igual a 0. Caso contrario, retorne false
function dividirPorDois(numero){
    return numero;
}
const valor= dividirPorDois (15);
if(valor / 2 == 0){
    console.log("Igual a zero")
    return true;
}
else{
    console.log("Retorno Invalido")
    return false;
}
