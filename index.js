let computerNumber
// Variável para armazenar o número gerado pelo computador.

let userNumbers = []
// Array para armazenar os números inseridos pelo usuário durante o jogo.

let attempts = 0
// Contador de tentativas do usuário.

let maxguesses = 10
// Número máximo de tentativas que o usuário pode fazer antes de perder o jogo.

function newGame() {
    window.location.reload()
    // Função para iniciar um novo jogo recarregando a página. Isso reseta todos os valores e recomeça o jogo do zero.
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    // Gera um número aleatório entre 1 e 100 para o jogo.
    console.log(computerNumber)
    // Exibe o número gerado no console para facilitar testes e depuração (opcional).
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    // Captura o número inserido pelo usuário no campo de entrada e converte para número.

    userNumbers.push('' + userNumber)
    // Adiciona o número inserido pelo usuário ao array `userNumbers`.

    document.getElementById('guesses').innerHTML = userNumbers
    // Atualiza o elemento HTML para mostrar todos os palpites feitos até o momento.

    if (attempts < maxguesses) {
        // Verifica se o número de tentativas ainda está abaixo do limite máximo.
        
        if (userNumber > computerNumber) {
            // Se o palpite do usuário for maior que o número do computador:
            document.getElementById('textOutput').innerHTML = 'Seu número está muito alto'
            // Exibe a mensagem informando que o número está muito alto.

            document.getElementById('inputBox').value = ''
            // Limpa o campo de entrada para facilitar a inserção do próximo palpite.

            attempts++
            // Incrementa o contador de tentativas.

            document.getElementById('attempts').innerHTML = attempts
            // Atualiza o número de tentativas na interface.
        } 
        else if (userNumber < computerNumber) {
            // Se o palpite do usuário for menor que o número do computador:
            document.getElementById('textOutput').innerHTML = 'Seu número está muito baixo'
            // Exibe a mensagem informando que o número está muito baixo.

            document.getElementById('inputBox').value = ''
            // Limpa o campo de entrada.

            attempts++
            // Incrementa o contador de tentativas.

            document.getElementById('attempts').innerHTML = attempts
            // Atualiza o número de tentativas.
        } 
        else {
            // Se o palpite do usuário for igual ao número do computador:
            document.getElementById('textOutput').innerHTML = 'Parabéns!!!'
            // Exibe a mensagem de parabéns informando que o usuário acertou.

            attempts++
            // Incrementa o número de tentativas.

            document.getElementById('attempts').innerHTML = attempts
            // Atualiza o número de tentativas.

            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            // Desabilita o campo de entrada após o acerto para impedir novas tentativas.
        }
    } 
    else {
        // Se o número de tentativas exceder o limite máximo:
        document.getElementById('textOutput').innerHTML = 'Você Perdeu! O número do Computador é ' + computerNumber
        // Exibe a mensagem de derrota e revela o número correto.

        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        // Desabilita o campo de entrada após o jogo acabar.
    }
}
