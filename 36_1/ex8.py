import math

def custo_tinta(parede):
    preco_lata = 80
    litros_necessarios = math.ceil(parede / 3)
    latas_necessarias = litros_necessarios % 18
    return latas_necessarias, latas_necessarias * preco_lata


print(custo_tinta(10))
