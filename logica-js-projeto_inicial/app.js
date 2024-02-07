alert("Seja bem-vindo ao Jogo do Número Secreto!");

let intervalo = 120;
let numeroSecreto = parseInt(Math.random() * intervalo + 1);

let palpite, tentativas = 0;

while (palpite != numeroSecreto) {
   palpite = prompt(`Escolhe um número entre 1 e ${intervalo}!`)
   tentativas ++;

   if (palpite == numeroSecreto) {
      let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
      alert(`Acertou! O número secreto é ${numeroSecreto}!\nDescobriu com ${tentativas} ${palavraTentativa}!`);
   } else {
      let mensagem;
      if (palpite < numeroSecreto) {
         mensagem = (`O Número Secreto é maior que ${palpite}!`);
      } else {
         mensagem = (`O Número Secreto é menor que ${palpite}!`);
      }
      alert("Errou! " + mensagem);
   }
}
