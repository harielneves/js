function jogarAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log(`(DEBUG) Número secreto: ${numeroSecreto}`);

    let tentativasRestantes = 10;
    let acertou = false;

    alert("Estou pensando em um número entre 1 e 100. Você tem " + tentativasRestantes + " tentativas para adivinhar!");

    while (!acertou && tentativasRestantes > 0) {
        let palpiteStr = prompt(`Tentativas restantes: ${tentativasRestantes}\nQual é o seu palpite? (entre 1 e 100)`);

        if (palpiteStr === null) {
            alert("Jogo encerrado. Você desistiu!");
            break;
        }

        let palpite = Number(palpiteStr);

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            alert("Por favor, digite um número válido entre 1 e 100.");
            continue;
        }

        tentativasRestantes--;

        if (palpite === numeroSecreto) {
            alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${10 - tentativasRestantes} tentativas!`);
            acertou = true;
        } else if (palpite < numeroSecreto) {
            alert("O número secreto é MAIOR que " + palpite + ".");
        } else {
            alert("O número secreto é MENOR que " + palpite + ".");
        }
    }

    if (!acertou && tentativasRestantes === 0) {
        alert(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}. Mais sorte na próxima vez!`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const botaoIniciar = document.getElementById('iniciarJogo');
    botaoIniciar.addEventListener('click', jogarAdivinhacao);
});
