def triangulo_retangulo(numero):
    for num in range(numero):
        contador = 0
        imprime = ''
        while contador < num+1:
            imprime += '*'
            contador += 1
        print(imprime)
    return ''


print(triangulo_retangulo(5))
