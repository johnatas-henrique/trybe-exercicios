def custo_tinta(parede):
    preco_lata = 80
    litros_necessarios = parede // 3
    latas_necessarias = litros_necessarios % 18
    return latas_necessarias, latas_necessarias * preco_lata


print(custo_tinta(12))
