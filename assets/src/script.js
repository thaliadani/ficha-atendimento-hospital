// Função para verificar nome e idade
function verificarCadastro() {
    // Limpar resultados anteriores
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    // Obter valores de entrada
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;
    const sintomas = document.getElementById('sintomas').value;

    // Validar nome (deve ter pelo menos 3 letras)
    if (nome.length >= 3) {
        sessionStorage.setItem('nome', nome);
        window.location.href = './login.html'
    } else {
        alert('Nome inválido (mínimo 3 letras)')
    }

    // Validar idade (deve estar entre 18 e 120 anos)
    if (idade >= 18 && idade <= 120) {
        sessionStorage.setItem('idade', idade);
        window.location.href = './login.html'
    } else {
        alert('Idade inválida (deve ser entre 18 e 120 anos)')
    }

    // Validar cpf (deve ser 11 digitos)
    if (cpf.length === 11 && !isNaN(cpf)) {
        //sessionStorage.setItem:permite armazenar os dados
        sessionStorage.setItem('cpf', cpf);
        window.location.href = './login.html'
    } else {
        alert('CPF inválido (deve ser 11 digitos)')
    }
    //validar sintomas (deve estar entre 5 e 100 caracteres)
    if (sintomas.length >= 5 && sintomas.length <= 100) {
        sessionStorage.setItem('sintomas', sintomas);
        window.location.href = './login.html'
    } else {
        alert('Sintomas inválido (deve ser entre 5 e 100 caracteres)')
    }
}