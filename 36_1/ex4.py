def quadrado(numero):
    for num in range(numero):
        contador = 0
        imprime = ''
        while contador < numero:
            imprime += '*'
            contador += 1
        print(imprime)
    return ''


print(quadrado(5))
