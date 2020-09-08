from posfix_evaluator.operations import plus, subtract, multiply, divide

OPERATIONS = {
    "+": plus,
    "-": subtract,
    "*": multiply,
    "/": divide,
}


def evaluate(expression):
    sequence = []
    for token in expression.split():
        if token.isnumeric():
            sequence.append(int(token))
        elif token in ("+", "-", "*", "/"):
            try
            other = sequence.pop()
            number = sequence.pop()
            operation = OPERATIONS[token]
            sequence.append(operation(number, other))
            except ZeroDivisionError:
                raise ValueError(f"poorly formatted expression or error")
    return sequence.pop()
