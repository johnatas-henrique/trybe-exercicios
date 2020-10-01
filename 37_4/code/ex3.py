from random import shuffle
from time import perf_counter

# insertion sort


def insertion_sort(array):
    # itera sobre cada valor do array
    for i in range(len(array)):
        current_value = array[i]
        current_position = i
        # enquanto o valor da posição for menor que os elementos a sua esquerda
        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            # move as posições para a direita
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1
        # colocamos o elemento em sua nova posição
        array[current_position] = current_value
    return array


def selection_sort(array):
    # como um algoritmo de força bruta
    # percorre a estrutura exaustivamente
    for i in range(len(array)):
        minimum = i

        # itera sobre os elementos não ordenados
        for j in range(i + 1, len(array)):
            # seleciona o menor valor
            if array[j] < array[minimum]:
                minimum = j

        # após encontrar o menor valor
        # ao invés de criar um novo array (o que aumenta complexidade de espaço)
        # realizamos a substituição entre o menor elemento
        # e a posição i que corresponde ao primeiro elemento não ordenado
        # que consequentemente passará a ser o último ordenado
        array[minimum], array[i] = array[i], array[minimum]

    return array


ordenados = list(range(100000))
inversamente_ordenados = list(reversed(range(100000)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles

start_time = perf_counter()
# seu algoritmo aqui
selection_sort(ordenados)

# insertion_sort(ordenados)
end_time = perf_counter()
print(f"Seu algoritmo foi executado em {end_time - start_time} segundos")
start_time = perf_counter()
# seu algoritmo aqui
selection_sort(inversamente_ordenados)

# insertion_sort(inversamente_ordenados)
end_time = perf_counter()
print(f"Seu algoritmo foi executado em {end_time - start_time} segundos")
start_time = perf_counter()
# seu algoritmo aqui
selection_sort(aleatorios)

# insertion_sort(aleatorios)
end_time = perf_counter()
print(f"Seu algoritmo foi executado em {end_time - start_time} segundos")
