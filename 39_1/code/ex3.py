from stack import Stack

estacionado = Stack()
removido = Stack()


def add_car(plate):
    if type(plate) is not int:
        return 'Placa inválida'
    estacionado.push(plate)
    return f'Carro com placa {plate} estacionado'


def remove_car(plate):
    while not estacionado.peek() == plate:
        removido.push(estacionado.pop())
    carro_removido = estacionado.pop()
    print(estacionado, removido)
    print(f'Carro {carro_removido} encontrado e removido')
    while not removido.is_empty():
        estacionado.push(removido.pop())
    print(estacionado, removido)


print(estacionado.is_empty())  # True
print(add_car(16))
print(add_car(24))
print(add_car(32))
print(add_car(40))
print(add_car(48))
print(add_car(56))
print(add_car(64))
print(estacionado.is_empty())  # False

print(remove_car(40))
