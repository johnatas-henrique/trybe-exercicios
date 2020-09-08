import random

# escolhe um número aleatório entre 1 e 10
random_number = random.randint(1, 10)
guess = ""

while guess != random_number:  # enquanto não adivinhar o número
    # pergunte a pessoa usuária um número
    guess = int(input("Qual o seu palpite? "))

print("O número sorteado era: ", guess)
