import requests
from parsel import Selector

url = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"

response = requests.get(url)
selector = Selector(text=response.text)
titulo = selector.css(".product_main > h1::text").get()
preco = selector.css(".price_color::text").re_first(r"\d+\.\d{2}")
descricao = selector.css(".product_page > p::text").get()
url = selector.css("#product_gallery img::attr(src)").get()

print(titulo, preco, descricao, url, sep=", ")
