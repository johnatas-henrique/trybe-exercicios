LISTA = [31, 41, 25, 63]

def media(listagem):
    soma = 0
    for num in listagem:
        soma += num
    return soma / len(listagem)

print(media(LISTA))
