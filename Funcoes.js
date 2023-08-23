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