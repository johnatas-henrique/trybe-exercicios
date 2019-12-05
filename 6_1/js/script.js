botaoReset = document.querySelector('#botao-reset');

comboEstado = document.querySelector('#combo-estado');
arrEstado = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

botaoEnviar = document.querySelector('#botao-enviar');

caixaNome = document.querySelector('#nome');
caixaEmail = document.querySelector('#email');
caixaCPF = document.querySelector('#cpf');
caixaEndereco = document.querySelector('#endereco');
caixaCidade = document.querySelector('#cidade');
caixaComboEstado = document.querySelector('#combo-estado');

caixaBiografia = document.querySelector('#biografia');
caixaCargo = document.querySelector('#cargo');
caixaDescricaoCargo = document.querySelector('#descricaocargo');
caixaDataInicio = document.querySelector('#datainicio');


arrCaixas = [caixaNome, caixaEmail, caixaCPF, caixaEndereco, caixaCidade, nomeEstado, caixaBiografia, caixaCargo, caixaDescricaoCargo, caixaDataInicio];

divResultado = document.querySelector('.resultado');

function carregarComboEstado(item, index) {
    comboEstado.innerHTML += `<option value=${index}>${item}</option>`;
}

arrEstado.forEach(carregarComboEstado);

botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault();
    arrCaixas.forEach(validarCampos);
    validaEmail();
    validaCPF();
})

function validarCampos(item, index) {
    if (item.value !== '') {
        nomeEstado = arrEstado[comboEstado.value];
        criarPNome = document.createElement('p');
        criarSpanValor = document.createElement('span');
        nomeCaixas = document.createTextNode(item.name);
        valorCaixas = document.createTextNode(item.value);
        criarPNome.appendChild(nomeCaixas);
        criarPNome.classList.add('titulo-info');
        criarSpanValor.appendChild(valorCaixas);
        divResultado.appendChild(criarPNome);
        divResultado.appendChild(criarSpanValor);
    } else {
        alert('A caixa ' + item.placeholder + ' está vazia');
    }
}

botaoReset.addEventListener('click', function () {
    divResultado.innerHTML = '';
})

function validaEmail() {
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (caixaEmail.value.match(emailReg)) {
        return true;
    } else {
        alert("E-mail inválido!");
        return false;
    }
}

function validaCPF() {
    if (caixaCPF.value.length == 11){
        alert('CPF válido');
    }
    else {
        alert('CPF inválido');
    }
}

function nomeEstado(){

}
