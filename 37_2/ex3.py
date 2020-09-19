from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    @abstractmethod
    def area():
        raise NotImplementedError

    @abstractmethod
    def perimetro():
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado ** 2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return self.base * 2 + self.altura * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return 3.1415 * (self.raio ** 2)

    def perimetro(self):
        return 2 * 3.1415 * self.raio
