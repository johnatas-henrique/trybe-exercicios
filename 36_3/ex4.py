import json
import csv


lista = []

with open("books.json") as file:
    for row in file:
        lista.append(json.loads(row))

categories = {}


for book in lista:
    for category in book["categories"]:
        if not categories.get(category):
            categories[category] = 0
        categories[category] += 1


print(categories)

