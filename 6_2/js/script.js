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
radioTipo1 = document.querySelector('#tipo1');
radioTipo2 = document.querySelector('#tipo2');
caixaBiografia = document.querySelector('#biografia');
caixaCargo = document.querySelector('#cargo');
caixaDescricaoCargo = document.querySelector('#descricaocargo');
caixaDataInicio = document.querySelector('#datainicio');

retCaixaEstado = document.createElement('p');

retCaixaTipoCasa = document.createElement('p');

arrCaixas = [caixaNome, caixaEmail, caixaCPF, caixaEndereco, caixaCidade, retCaixaEstado, retCaixaTipoCasa, caixaBiografia, caixaCargo, caixaDescricaoCargo, caixaDataInicio];

divResultado = document.querySelector('.resultado');

let contadorFalha = 0;
let arrNome = [];
let arrValor = [];

function carregarComboEstado(item, index) {
    comboEstado.innerHTML += `<option value=${index}>${item}</option>`;
}

arrEstado.forEach(carregarComboEstado);

botaoReset.addEventListener('click', function () {
    divResultado.innerHTML = '';
})

/* function validaEmail() {
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (caixaEmail.value.match(emailReg)) {
        return true;
    } else {
        alert("E-mail inválido!");
        contadorFalha += 1;
        return false;
    }
}

function validaCPF() {
    if (caixaCPF.value.length == 11) {
        return true;
    } else {
        alert('CPF inválido');
        contadorFalha += 1;
        return false;
    }
}
 */
/* function validaDia() {
    let dia = caixaDataInicio.value.substring(0, 2);
    if (dia <= 31 && dia > 0) {
        return true
    } else {
        alert("Por favor, digite um dia válido, entre 01 e 31");
        contadorFalha += 1;
        return false;
    }
}

function validaMes() {
    let mes = caixaDataInicio.value.substring(3, 5);
    if (mes <= 12 && mes > 0) {
        return true
    } else {
        alert("Por favor, digite um mês válido, entre 01 e 12");
        contadorFalha += 1;
        return false;
    }
}

function validaAno() {
    let ano = caixaDataInicio.value.substring(6, 10);
    if (ano <= 2099 && ano > 1900) {
        return true
    } else {
        alert("Por favor, digite um ano válido, entre 1900 e 2099");
        contadorFalha += 1;
        return false;
    }
} */
/* 
function validaTipoMoradia() {
    if (radioTipo1.checked == true) {
        retCaixaTipoCasa.name = radioTipo1.name;
        retCaixaTipoCasa.value = radioTipo1.value;
        return true
    } else if (radioTipo2.checked == true) {
        retCaixaTipoCasa.name = radioTipo2.name;
        retCaixaTipoCasa.value = radioTipo2.value;
        return true
    } else {
        alert("Por favor, escolha sua opção de tipo de moradia");
        contadorFalha += 1;
        return false
    }
}
 */
function carregaEstadoAuto() {
    if (caixaComboEstado.value != 0) {
        retCaixaEstado.name = caixaComboEstado.name;
        retCaixaEstado.value = arrEstado[caixaComboEstado.value];
        return true
    } else {
        alert("Por favor, escolha um estado");
        contadorFalha += 1;
        return false
    }
}

function validarCampos(item, index) {
    if (item.value !== '') {
        arrNome.push(item.name);
        arrValor.push(item.value);
    } else {
        alert('A caixa ' + item.placeholder + ' está vazia');
        contadorFalha += 1;
    }
}

function criarDivItems() {
    divResultado.innerHTML = '';
    for (i = 0; i < arrNome.length; i++) {
        filhoDivResultado = document.createElement('div');
        criarPNome = document.createElement('p');
        criarSpanValor = document.createElement('span');
        criarPNome.innerText = (arrNome[i]);
        criarPNome.classList.add('titulo-info');
        criarSpanValor.innerText = (arrValor[i]);
        criarSpanValor.classList.add('desc-info');
        divResultado.appendChild(filhoDivResultado);
        filhoDivResultado.classList.add('div-filha');
        filhoDivResultado.appendChild(criarPNome);
        filhoDivResultado.appendChild(criarSpanValor);
    }
}

botaoEnviar.addEventListener('click', function (event) {
    contadorFalha = 0;
    arrNome.length = 0;
    arrValor.length = 0;
    event.preventDefault();
/*     validaEmail();
    validaCPF();
    carregaEstadoAuto();
    validaTipoMoradia();
    validaDia();
    validaMes();
    validaAno();

    if (contadorFalha == 0) {
        arrCaixas.forEach(validarCampos);
    }
    if (contadorFalha == 0) {
        criarDivItems();
    } */
})
