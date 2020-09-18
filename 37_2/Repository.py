"""O módulo abc, ou Abstract Base Class, é o módulo que fornece a estrutura
para criar classes abstratas em Python.
"""
from abc import ABC, abstractmethod


class Repository(ABC):
    @abstractmethod
    def update(self, entity, **kwargs):
        raise NotImplementedError

    def *validate*attributes(self, entity, **kwargs):
        """Lança uma exceção caso a entidade não possua algum dos atributos.

        Normalmente, validações de atributo são implementadas por classes e
        não por um código compartilhado. Este exemplo está dessa forma, apenas
        para demonstrar o encapsulamento.

        Em Python há uma convenção que diz que atributos prefixados com _ (um under) são
        protegidos e atributos prefixados __ (dois under) são privados. Essa restrição de
        visibilidade pode ter sintaxes diferentes de acordo com a linguagem
        de programação, como por exemplo, algumas utilizam as palavras-chave
        public, protected e private.
        """
        if kwargs.keys() - entity.__dict__.keys():
            raise AttributeError
