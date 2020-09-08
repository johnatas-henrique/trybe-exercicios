import sys

soma = 0

for argument in sys.argv:
    if (argument.isdigit):
        print(argument, "não é número")
    else:
        print(argument)
