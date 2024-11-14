// Função para adicionar valores na tela
function adicionarValor(valor) {
    const resultado = document.getElementById('resultado');
    resultado.value += valor;
}

// Função para limpar a tela
function limparTela() {
    const resultado = document.getElementById('resultado');
    resultado.value = '';
}

// Função para calcular o resultado
function calcularResultado() {
    const resultado = document.getElementById('resultado');
    try {
        resultado.value = eval(resultado.value); // Calcula a expressão na tela
    } catch (error) {
        resultado.value = 'Erro'; // Exibe 'Erro' se houver algum erro na expressão
    }
}
