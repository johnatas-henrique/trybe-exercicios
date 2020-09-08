from posfix_evaluator.operations import plus, subtract, multiply, divide
import pytest


def test_when_plus_two_and_three_returns_five():
    assert plus(2, 3) == 5


def test_when_plus_three_and_two_returns_five():
    assert plus(3, 2) == 5


def test_when_plus_four_and_six_returns_ten():
    assert plus(4, 6) == 10


def test_when_subtract_six_and_four_returns_two():
    assert subtract(6, 4) == 2


def test_when_multiply_six_and_four_returns_twenty_four():
    assert multiply(6, 4) == 24


def test_when_divide_four_by_two_returns_2():
    # usamos a função pytest.approx para evitar de problemas de precisão em
    # comparações com números em ponto flutuante
    assert divide(4, 2) == pytest.approx(2.0)


def test_when_divide_negative_numbers_returns_positive_one():
    # divisão entre números negativos retorna um número positivo
    assert divide(-3, -2) == pytest.approx(1.5)


def test_when_divide_number_by_zero_raise_an_exception():
    with pytest.raises(ZeroDivisionError):
        divide(3, 0)
