//Faça um programa em JavaScript em que o usuário clicará com o mouse sobre um botão e em seguida uma mensagem de alerta será apresentada com uma mensagem qualquer.

function FuncaoDeAlerta(){
    alert("Olá, seja Bem vindo")
}

//Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma mensagem de alerta informando qual é o maior número dentre os números informados

let N1 = prompt("Informe o primeiro número: ");
let N2 = prompt("Informe o segundo número: ");
let N3 = prompt("Informe o terceiro número: ");

if ((N1 > N2) && (N1 > N3)) mensagem = ("O primeiro número é o maior");
else

if((N2 > N1) && N2 > N3) mensagem = ("O segundo número é o maior");
else

if((N3 > N1) && N3 > N2) mensagem = ("O terceiro número é o maior");
else

mensgem = ("Os números são iguais ou não foram informado nenhum número");
alert(mensagem);



//Faça um programa JavaScript em que o usuário informará a sua idade e o programa emitirá uma mensagem dizendo se o usuário é ou não menor de idade

let idade = parseInt(prompt("Informe a sua idade: "));

if(idade < 18) mensagem = "Menor de idade";
else
mensagem = "Maior de idade";

alert(mensagem);

//Faça um programa JavaScript em que o usuário informará 3 números e o programa calculará a média aritmética desses números

let Num1 = parseInt(prompt("Informe o primeiro número: "));
let Num2 = parseInt(prompt("Inoforme o segundo número: "));
let Num3 = parseInt(prompt("Informe o terceiro número: "));

media = (Num1 + Num2 + Num3)/3

alert("A media aritmética é:" + media);
