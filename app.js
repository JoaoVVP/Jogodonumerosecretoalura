let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function limparCampo(){
  chute = document.querySelector('input')
  chute.value = ''
}

function exibirMensagemInicial(){
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 100');

}
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100 + 1);
}

exibirMensagemInicial();
console.log(numerosecreto);

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(numerosecreto);
  if (chute == numerosecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você acertou o número secreto ${numerosecreto} com ${tentativas} ${palavraTentativa}.`;
    exibirTexto('h1', 'Acertou!');
    exibirTexto('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('chutebutton').setAttribute('disabled',true);
  } else {
    if (chute > numerosecreto) {
      exibirTexto('p', `Você errou, o número secreto é menor que ${chute}.`);
    } else {
      exibirTexto('p', `Você errou, o número secreto é maior que ${chute}.`);
    }
    tentativas++;
  }
  
  limparCampo()
}

function reiniciar(){
numerosecreto = gerarNumeroAleatorio();
tentativas = 1;
limparCampo();
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true);
document.getElementById('chutebutton').removeAttribute('disabled');
}

