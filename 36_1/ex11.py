def combustivel(tipo, quantidade):

    if (tipo == "A"):
        preco = 1.9
        desconto = 0.03

        if(quantidade > 20):
            desconto = 0.05

    if (tipo == "G"):
        preco = 2.5
        desconto = 0.04

        if(quantidade > 20):
            desconto = 0.06

    total = quantidade * preco
    total = total * (1 - desconto)

    return total


print(combustivel("G", 25))
