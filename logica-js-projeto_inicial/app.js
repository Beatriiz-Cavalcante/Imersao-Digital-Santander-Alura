alert('Boas-vindas ao jogo do número secreto');
let numMax = 10
let numeroSecreto = parseInt(Math.random() * numMax + 1); 
console.log(numeroSecreto);
chute = prompt (`Escolha um número entre 1 e ${numMax}`);
let tentativa = 1;

while (chute != numeroSecreto){
    if(chute != numeroSecreto){
        if (chute > numeroSecreto){
            chute = prompt(`O número secreto é menor que ${chute}`);
        } else {
            chute = prompt(`O número secreto é maior que ${chute}`);
        }
    }
    console.log('entrou no while');
    tentativa = tentativa +1; 
};

if (tentativa > 1) {
    alert(`Você acertou após ${tentativa} tentativa! o número secreto é ${numeroSecreto}`);
} else {
    alert(`Você acertou após ${tentativa} tentativas! o número secreto é ${numeroSecreto}`);
}

//operador ternário 
// let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
// outra forma de escrever a ultima estrututa condicional

console.log('saiu do while');

// Operadoreos lógicos:     e = &&   e   ou = ||