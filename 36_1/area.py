PI = 3.14


def square(lado):
    return lado ** 2


def rectangle(base, altura):
    return base * altura


def circle(raio):
    return PI * raio * raio


if __name__ == "__main__":
    print("Área do quadrado:", square(8))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(4))
