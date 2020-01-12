const stringPrim = `Tryber x aqui!
Tudo bem?'`;
const arrDois = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'ShellScript'];
const nome = 'Johnatas';
const fUm = () => stringPrim.replace('x', nome);

const fDois = () => `${fUm()}
Minhas cinco principais habilidades são:
${arrDois.sort()}`;

console.log(fDois());
