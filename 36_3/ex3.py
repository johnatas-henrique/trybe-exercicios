import random

file = open("ex3.txt", mode="r")
content = file.read()
file.close()

LISTA = content.split()

escolhida = random.choice(LISTA)

escolhida_embaralhada = "".join(random.sample(escolhida, len(escolhida)))

count = 0

while count < 3:
    print("A palavra embaralhada é: ", escolhida_embaralhada)
    tentativa = input("Digite a palavra corretamente: ")
    if (tentativa == escolhida):
        print(f"Você acertou na {count} tentativa")
    else:
        print("Você errou, tente novamentes")
    if (count == 3):
        print("Acabaram as tentativas, valeu!")
    count += 1
