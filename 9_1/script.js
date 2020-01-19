bgCor = document.querySelector('#bg-cor');
textoCor = document.querySelector('#texto-cor');
fonteTamanho = document.querySelector('#fonte-tamanho');
linhaAltura = document.querySelector('#linha-altura');
fonteFamilia = document.querySelector('#fonte-familia');
bordaTamanho = document.querySelector('#borda-tamanho');
bordaFamilia = document.querySelector('#borda-familia');
bordaCor = document.querySelector('#borda-cor');
divAlterar = document.querySelector('#alterar');
btnSalvar = document.querySelector('#salvar');

const trocaBgCor = () => divAlterar.style.backgroundColor = bgCor.value;
const trocaTextoCor = () => divAlterar.style.color = textoCor.value;
const trocaFonteTamanho = () => divAlterar.style.fontSize = `${fonteTamanho.value}px`;
const trocaLinhaAltura = () => divAlterar.style.lineHeight = `${linhaAltura.value}px`;
const trocaFonteFamilia = () => divAlterar.style.fontFamily = fonteFamilia.value;
const trocaBorda = () => divAlterar.style.border = `${bordaTamanho.value}px ${bordaFamilia.value} ${bordaCor.value}`;
const salvarLocalStorage = () => {
    localStorage.setItem('bgCor', bgCor.value);
    localStorage.setItem('textoCor', textoCor.value);
    localStorage.setItem('fonteTamanho', fonteTamanho.value);
    localStorage.setItem('linhaAltura', linhaAltura.value);
    localStorage.setItem('fonteFamilia', fonteFamilia.value);
    localStorage.setItem('bordaTamanho', bordaTamanho.value);
    localStorage.setItem('bordaFamilia', bordaFamilia.value);
    localStorage.setItem('bordaCor', bordaCor.value);
}


bgCor.addEventListener('change', trocaBgCor);
textoCor.addEventListener('change', trocaTextoCor);
fonteTamanho.addEventListener('change', trocaFonteTamanho);
linhaAltura.addEventListener('change', trocaLinhaAltura);
fonteFamilia.addEventListener('change', trocaFonteFamilia);
bordaTamanho.addEventListener('change', trocaBorda);
bordaFamilia.addEventListener('change', trocaBorda);
bordaCor.addEventListener('change', trocaBorda);
btnSalvar.addEventListener('click', salvarLocalStorage);


const locBgCor = localStorage.getItem('bgCor');
const locTextoCor = localStorage.getItem('textoCor');
const locFonteTamanho = localStorage.getItem('fonteTamanho');
const locLinhaAltura = localStorage.getItem('linhaAltura');
const locFonteFamilia = localStorage.getItem('fonteFamilia');
const locBordaTamanho = localStorage.getItem('bordaTamanho');
const locBordaFamilia = localStorage.getItem('bordaFamilia');
const locBordaCor = localStorage.getItem('bordaCor');

if (locBgCor) divAlterar.style.backgroundColor = locBgCor;
if (locTextoCor) divAlterar.style.color = locTextoCor;
if (locFonteTamanho) divAlterar.style.fontSize = `${locFonteTamanho}px`;
if (locLinhaAltura) divAlterar.style.lineHeight = `${locLinhaAltura}px`;
if (locFonteFamilia) divAlterar.style.fontFamily = locFonteFamilia;
if (locBordaTamanho) divAlterar.style.border = `${locBordaTamanho}px ${locBordaFamilia} ${locBordaCor}`;
