def somatorio(numero):
    soma = 0
    for num in range(1, numero+1):
        soma += num
    return soma


print(somatorio(6))
