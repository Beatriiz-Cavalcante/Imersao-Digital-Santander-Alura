alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 29;
let chute = prompt ('Escolha um número entre 1 e 30');

while (chute != numeroSecreto){
    if(chute != numeroSecreto){
        chute = prompt ('Errado! Tente outra vez');
    }
    console.log('entrou no while'); 
};
alert(`Você acertou! ${numeroSecreto} é o número`);
console.log('saiu do while');
