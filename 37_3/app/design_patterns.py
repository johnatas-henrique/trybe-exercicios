"""
Classes abstratas, são abstrações utilizadas para definir
protocolos de comunicação com objetos.
Além de definir uma interface (métodos), podem possuir comportamentos
já implementados baseados nestes protocolos.

Para que consigamos implementar a interface da abstração Iterable,
a classe deve implementar o método __iter__,
que deve retornar um objeto iterador.

Algo similar ocorre com a classe abstrata Iterator
e sua classe concreta StockIterator.
Porém o método que deve ser implementado é o __next__.

Você vai reparar que ao longo da implementação os nomes não são os mesmos
vistos no diagrama. O importante é a abstração.
"""
from collections.abc import Iterator, Iterable


class Book:

    def __init__(self, isbn, title, author, qty):
        self.isbn = isbn
        self.title = title
        self.author = author
        self.qty = qty

    # ...


class StockIterator(Iterator):

    def __init__(self, iterable):
        self._iterable = iterable
        self._position = 0

    def __next__(self):
        """Retorna o próximo elemento da coleção.

        Uma exceção é lançada quando não há mais elementos a serem percorridos.
        """
        try:
            current_value = self._iterable[self._position]
        except IndexError:
            raise StopIteration()
        else:
            self._position += 1
            return current_value


class Stock(Iterable):

    def __init__(self):
        self._book_stock = []

    def add_book(self, book):
        self._book_stock.append(book)

    def __iter__(self):
        """Retorna o iterador a partir da coleção de livros em estoque.

        Equivalente ao método iterator "ConcreteAgreggator" do diagrama.
        """
        return StockIterator(self._book_stock)


if __name__ == "__main__":
    stock = Stock()
    stock.add_book(Book(
        isbn="abbb492978ff656d",
        title="The Secret Garden",
        author="Frances Burnett",
        qty=4,
    ))
    stock.add_book(Book(
        isbn="7b599c8bfcdd8d30",
        title="Camp Midnight",
        author="Steven Seagle",
        qty=8,
    ))

    # Enviamos uma mensagem ao objeto stock que irá invocar o método __iter__
    # similar a stock.__iter__(), retornando uma instância do iterador
    iterator = iter(stock)

    # Enviamos outra mensagem, dessa vez à instancia do iterador
    # retornando  o primeiro objeto da coleção
    # similar a iterator.__next__()
    first_book = next(iterator)
    print(first_book.isbn, first_book.title)

    # No for não precisamos de um método has_next, pois
    # por baixo dos panos o python invoca o método __iter__
    # que retorná um iterador.
    # Em seguida, será invocado o __next__ do iterador até que seja lançada
    # uma exceção sinalizando o fim da iteração.
    # O retornado da invocação é atribuído a variável iteradora(book)
    # e o bloco de código é executado
    for book in stock:
        print(book.title)
