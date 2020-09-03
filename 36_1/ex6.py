LISTA = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maior_nome(listagem):
    maior_nome = ''
    for nome in listagem:
        if (len(maior_nome) < len(nome)):
            maior_nome = nome
    return maior_nome


print(maior_nome(LISTA))
