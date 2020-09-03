def inss(salario_bruto):
    if(salario_bruto <= 1556.94):
        return {1: 0.08, 2: 0}
    if(1556.95 <= salario_bruto <= 2594.92):
        return {1: 0.09, 2: 0}
    if(2594.93 <= salario_bruto <= 5189.82):
        return {1: 0.11, 2: 0}
    if(5189.82 < salario_bruto):
        return {1: 0, 2: 570.88}


def ir(salario_inss):
    if(salario_inss <= 1903.98):
        return {1: 0.00, 2: 0}
    if(1903.98 <= salario_inss <= 2826.65):
        return {1: 0.075, 2: 142.8}
    if(2826.66 <= salario_inss <= 3751.05):
        return {1: 0.15, 2: 354.8}
    if(3751.06 <= salario_inss <= 4664.08):
        return {1: 0.225, 2: 636.13}
    if(4664.68 < salario_inss):
        return {1: 0.275, 2: 869.36}


def salario_liquido(salario_bruto):
    aliquota_inss = inss(salario_bruto)
    resultado_inss = (salario_bruto -
                      aliquota_inss[2] - (salario_bruto * aliquota_inss[1]))
    aliquota_ir = ir(resultado_inss)
    resultado_ir = (resultado_inss * aliquota_ir[1] - aliquota_ir[2])
    resultado = resultado_inss - resultado_ir
    return resultado


print(salario_liquido(3000))
