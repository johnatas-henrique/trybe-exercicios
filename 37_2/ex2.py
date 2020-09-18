from collections import Counter

LISTA_NUM = [10, 20, 30, 40, 50, 50, 50, 60, 60, 70, 80, 90]
print(Counter(LISTA_NUM))


class Estatistica():
    @classmethod
    def media(cls, lista):
        return sum(lista) / len(lista)

    @classmethod
    def mediana(cls, lista):
        sorted_list = lista.sort()
        lista_length = len(sorted_list)
        if lista_length % 2 == 0:
            valor = (lista_length / 2) - 1
            return (sorted_list[valor] + sorted_list[valor+1]) / 2
        valor = (lista_length + 1) / 2
        return sorted_list[valor - 1]

   @classmethod
    def moda(cls, lista):
        teste = Counter(lista)
        print(teste)
