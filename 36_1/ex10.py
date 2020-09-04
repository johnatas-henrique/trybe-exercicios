def triangulo(lado_a, lado_b, lado_c):
    teste_triangulo = (
        lado_a + lado_b > lado_c or
        lado_a + lado_c > lado_b or
        lado_b + lado_c > lado_a
    )
    if not teste_triangulo:
        return "Não é triângulo"
    elif lado_a == lado_b == lado_c:
        return "Triângulo Equilátero: três lados iguais"
    elif lado_a == lado_b or lado_b == lado_c or lado_a == lado_c:
        return "Triângulo Isósceles: quaisquer dois lados iguais"
    else:
        return "Triângulo Escaleno: três lados diferentes"


print(triangulo(1, 0, 1))
