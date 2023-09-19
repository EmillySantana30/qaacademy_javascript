//1 - Calcular e exibir a tabuada de um número de 1 e 10
let num1 = 5;
let i = 0
while (i <= 10) {
    let mult = num1 * i;
    i++;
    console.log(num1 + "x" +i+ "=" +mult);  
}

//2 - Faça um algoritmo para ler um numero inteiro e exibir ele 5 vezes
let numero = 5;
let e = 1;

while (e <= 5) {
    console.log(numero)
    e = e + 1;
}
//3-Faça um algoritmo para somar tres numeros e exibir o resultado
let soma = 3;
let soma2 = 2;
let soma3 = 3;
let adicao = soma + soma2 + soma3
if (adicao > 0) {
    console.log(adicao)
}

//4- Faça um algoritmo para exibir de 30 à 45
let inicio = 29;
let fim = 44;
while (inicio <= fim) {
    console.log(inicio + 1)
    inicio = inicio + 1
}

//5- Faça um algoritmo para exibir de 100 à 0 (decrescente)
let inicio2 = 101;
let fim2 = 1;
while (inicio2 >= fim2) {
    console.log(inicio2 - 1)
    inicio2 = inicio2 - 1
}

//6-Faça um algoritmo para subtrair dois valores, e exibir o texto "sucesso", se o resultado da operação for igual ou maior que 100. E se, o resultado for menor que 50, exibir a mensagem "media"
let sub = (110-95);
if (sub >=100) {
    console.log ("Sucesso");
    }
    if(sub <50){
       console.log ("Media");
}
//7-Faça um algoritmo para ler uma variavel do tipo texto e exibir uma mensagem se o valor da variavel for "casa". E se o valor for "moto" exibir outra mensagem
let texto = "casa";
if (texto == "casa") {
    console.log("É CASA");
}
if (texto == "moto"){
    console.log("é moto")
}
//8-Faça um algoritmo para multiplicar dois valores, e exibir uma mensagem se o resultado for maior ou igual a 100. Senão, outra mensagem deve ser exibida
let mult = 10;
let mult2 = 1
let multplicacao = mult * mult2
if (multplicacao >= 100) {
    console.log("Parabens");
}
else {
    console.log("Errou")
}