const SLonguinho = () => {
    const minhaPromise = new Promise((aceitar, rejeitar) => {
        const vecta = [];
        for (let i = 0; i < 10; i += 1) {
            vecta[i] = Math.pow(Math.floor(Math.random() * 50), 2);
        }
        const soma = vecta.reduce((acum, current) => acum += current);
        
        soma < 8000 ? aceitar(soma) : rejeitar(soma)
    })
    minhaPromise.then(soma => [2, 3, 5, 10].map(alg => Math.floor(soma/alg)))
    .then(arrQC => console.log(arrQC.reduce((acumula, curr) => acumula + curr, 0)))
      .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
  }
  
  SLonguinho()
