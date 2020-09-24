from collections.abc import Iterator, Iterable
from abc import ABC, abstractmethod


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Estrategia(ABC):
    @classmethod
    @abstractmethod
    def pos_inicial(self):
        raise NotImplementedError

    @classmethod
    @abstractmethod
    def proxima_pos(self):
        raise NotImplementedError


class PrimeiraCarta(Estrategia):
    @classmethod
    def pos_inicial(cls):
        return 0
    
    @classmethod
    def proxima_pos(cls, param):
        return param + 1


class UltimaCarta(Estrategia):
    @classmethod
    def pos_inicial(cls):
        return -1
    
    @classmethod
    def proxima_pos(cls, param):
        return param - 1


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas, estrategia):
        self._cartas = cartas
        self._estrategia = estrategia
        self._pos = self._estrategia.pos_inicial()

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos = self._estrategia.proxima_pos(self._pos)
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self._estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self._estrategia)


# baralho = Baralho()
# teste = iter(baralho)
# primeira_carta = next(teste)

# print(primeira_carta)

# for item in baralho:
#     print(item)


baralho = Baralho(PrimeiraCarta)
teste = iter(baralho)
primeira_carta = next(teste)

baralho_inverso = Baralho(UltimaCarta)
teste_inverso = iter(baralho_inverso)
ultima_carta = next(teste_inverso)

print(primeira_carta)
print(ultima_carta)

# for carta_inversa in teste_inverso:
#     print(carta_inversa)
