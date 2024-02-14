/*
alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute;
let tentativas = 1;

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e 100`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número Secreto é menor que ${chute}`);
        } else {
            alert(`O número Secreto é maior que ${chute}`);
        }
        tentativas++;

    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabens você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
*/

let aleatorio = parseInt(Math.random() * 1000 + 1);
console.log(aleatorio);








