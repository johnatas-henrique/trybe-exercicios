LISTA = list(range(39, 54+1))


def conta_pares(list, n=None):
    if n is None:
        n = len(list) - 1
    if n == 0:
        return 0
    elif list[n] % 2 == 0:
        return 1 + conta_pares(list, n-1)
    else:
        return conta_pares(list, n-1)


print(conta_pares(LISTA))
