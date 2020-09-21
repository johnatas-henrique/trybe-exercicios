"""
A classe LoanOrder representa nosso objeto de contexto (Context) e seu método
para interação é o devolution.

Um pedido de empréstimo (LoanOrder) é composto por uma estratégia de devolução
que será utilizada para calcular o prazo da mesma.

Uma estratégia (Strategy) possui um algoritmo que calcula o prazo de devolução.
A interface para interação com este prazo é através do método deadline.
"""
from abc import ABC, abstractmethod
from uuid import uuid4
from datetime import timedelta, datetime


class LoanOrder:
    def __init__(self, customer, books, deadline_strategy=None):
        self._id = uuid4()
        self._customer = customer
        self._books = books
        self.deadline_strategy = deadline_strategy
        self._created_at = datetime.now().date()

    def devolution(self):
        if self.deadline_strategy is None:
            return self._created_at
        return self._created_at + self.deadline_strategy.deadline()


class Strategy(ABC):
    @abstractmethod
    def deadline(self):
        raise NotImplementedError


class ReadingOnSite(Strategy):
    def deadline(self):
        # o timedelta é zero, pois o livro deve ser retornado no mesmo dia
        return timedelta()


class TakeHome(Strategy):
    def deadline(self):
        return timedelta(days=7)


class VacationLoan(Strategy):
    def deadline(self):
        return timedelta(days=30)


#  o código cliente interage com instâncias de Pedido de Empréstimo
first_order = LoanOrder(
    "Felipe", ["7b599c8bfcdd8d30", "abbb492978ff656d"], TakeHome(),
)
# posso criar pedidos de empréstimo com diferentes estratégias de empréstimo
second_order = LoanOrder(
    "Marta", ["abbb492978ff656d"], ReadingOnSite(),
)
# cada estratégia possui um algoritmo diferente para
# calcular o prazo de devolução
print(first_order.devolution())
print(second_order.devolution())

# posso modificar em tempo de execução a estratégia de empréstimo
first_order.deadline_strategy = VacationLoan()
# o mesmo pedido agora tem uma nova data de devolução
print(first_order.devolution())
