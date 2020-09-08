from desafios.telefone import telefone
import pytest


def test_telefone_with_invalid_chars_should_return_error():
    with pytest.raises(ValueError):
        telefone("+") == "Caractere inválido"


def test_telefone_with_invalid_message_length_should_return_error():
    with pytest.raises(ValueError):
        telefone("qwertyuiopasdfghjklzxcvbnmqwertyuiahj") == "Tamanho inválido"


def test_with_all_letters_should_return():
    assert telefone("The-quick-brown-jumps-laz") == "843-78425-27696-58677-529"
