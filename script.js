let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

const inputPalpite = document.getElementById('palpite');
const mensagem = document.getElementById('mensagemJogo');
const tentativasText = document.getElementById('tentativasRestantes');

tentativasText.textContent = `Tentativas restantes: ${tentativas}`;

function chutar() {
    const palpite = parseInt(inputPalpite.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = 'Digite um número válido entre 1 e 100.';
        return;
    }

    if (tentativas <= 0) {
        mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
        return;
    }

    if (palpite === numeroSecreto) {
        mensagem.textContent = '🎉 Parabéns! Você acertou o número secreto!';
        tentativasText.textContent = '';
        inputPalpite.disabled = true;
    } else {
        tentativas--;
        if (tentativas === 0) {
            mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
            tentativasText.textContent = '';
            inputPalpite.disabled = true;
        } else {
            mensagem.textContent = palpite < numeroSecreto 
                ? 'O número secreto é maior.' 
                : 'O número secreto é menor.';
            tentativasText.textContent = `Tentativas restantes: ${tentativas}`;
        }
    }

    inputPalpite.value = '';
    inputPalpite.focus();
}
