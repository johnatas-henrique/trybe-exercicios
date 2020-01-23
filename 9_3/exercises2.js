const SLonguinho = () => {
    return new Promise((aceitar, rejeitar) => {
        const vecta = [];
        for (let i = 0; i < 10; i += 1) {
            vecta[i] = Math.pow(Math.floor(Math.random() * 50), 2);
        }
        const soma = vecta.reduce((acum, current) => acum += current)
        if (soma > 8000) {
            aceitar(console.log('rodou', soma));
        } else {
            rejeitar();
        }
    })
}
SLonguinho()
.catch(() => console.log('falhou tudo'))
