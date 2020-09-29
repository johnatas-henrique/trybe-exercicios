LISTA = list(range(39, 54+1))


def count_even(list):
    max = list[len(list) - 1]
    min = list[0]
    total = ((max-min) // 2)
    if max % 2 == 0 or min % 2 == 0:
        total += 1

    return total


print(count_even(LISTA))
