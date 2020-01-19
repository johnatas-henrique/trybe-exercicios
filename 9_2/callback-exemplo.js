let salarioBruto = 3000;
getSalario(salarioBruto, (resultado) => {
    console.log(`O salário liquido é ${resultado}`);
});


function getSalario(salarioBruto, callback)
{
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    salarioBruto - descontos;
    
    return callback(salarioBruto - descontos);
}
