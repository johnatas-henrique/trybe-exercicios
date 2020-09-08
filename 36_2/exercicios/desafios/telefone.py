def telefone(mensagem):
    mensagemUp = mensagem.upper()
    if not 1 < len(mensagem) < 30:
        raise ValueError("Tamanho inválido")
    numero = ""
    for letra in mensagemUp:
        if letra in "ABC":
            numero += "2"
        elif letra in "DEF":
            numero += "3"
        elif letra in "GHI":
            numero += "4"
        elif letra in "JKL":
            numero += "5"
        elif letra in "MNO":
            numero += "6"
        elif letra in "MNO":
            numero += "6"
        elif letra in "PQRS":
            numero += "7"
        elif letra in "TUV":
            numero += "8"
        elif letra in "WXYZ":
            numero += "9"
        elif letra in "-01":
            numero += letra
        else:
            raise ValueError("Caractere inválido")
    return numero


print(telefone("go-Trybe"))
