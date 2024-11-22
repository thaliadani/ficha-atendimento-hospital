//CADASTRO DO PACIENTE

//Function para verificar nome e idade 
function verificarCadastro() {
    // Limpar resultados anteriores
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    // Obter valores de entrada
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;
    const sintomas = document.getElementById('sintomas').value;

    //Armazenar valores
    if (nome.length >= 3 && idade >= 18 && idade <= 120 && cpf.length === 11 && !isNaN(cpf) && sintomas.length >= 5 && sintomas.length <= 100) {
        sessionStorage.setItem('nome', nome);
        sessionStorage.setItem('idade', idade);
        sessionStorage.setItem('cpf', cpf);
        sessionStorage.setItem('sintomas', sintomas);
        window.location.href = './dados-paciente.html'
    } else {
        alert('ACESSO NEGADO: Verifique as informações.');
    }
}

//DADOS DO PACIENTE

//Obter valores armazenados
const nome = sessionStorage.getItem('nome');
const idade = sessionStorage.getItem('idade');
const cpf = sessionStorage.getItem('cpf');
const sintomas = sessionStorage.getItem('sintomas');

//Imprimir dados do paciente
if (nome && idade && cpf && sintomas) {
    document.getElementById('dados').innerHTML = `
    <p>> <strong>Nome:</strong> ${nome}</p>
    <p>> <strong>Idade:</strong> ${idade}</p>
    <p>> <strong>CPF:</strong> ${cpf}</p>
    <p>> <strong>Sintomas:</strong><br> ${sintomas}</p>`;
} else {
    document.getElementById('dados').innerHTML = `<p>Dados não encontrados.</p>`
}


//Digitar apenas letras
function lettersOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
        ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)) {
        return false;
    }
    return true;
}

//Digitar apenas numeros
function numbersOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
        ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)) {
        return true;
    }
    return false;
}




