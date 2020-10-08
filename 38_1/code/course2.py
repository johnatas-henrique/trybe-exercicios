dict1 = {}
dict2 = dict()

# Instanciação com preenchimento inicial de dados
dict3 = {1: 'name1', 2: 'name2'}
print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")


dict1[14] = 'name1'
print(f"Novo dicionário 1, pós inserção/alteração: {dict1}")

# Consulta e Remoção
# Se a chave não existir no dict, causa erro
try:
    name = dict1[14]
except KeyError:
    print('zuou')
    
del dict1[14]
print(f"Dicionário 1 pós consulta e deleção: {dict1}")

duplica = {item: item * 2 for item in range(3, 20+1)}

for chave in duplica.keys():
    if chave % 2 != 0:
        duplica[chave] = chave * 3

print(duplica)


def conta_letra(palavra):
    obj = {}
    for letra in palavra:
        if letra in obj:
            obj[letra] += 1
        else:
            obj[letra] = 1
    return obj


print(conta_letra('Johnny'))
