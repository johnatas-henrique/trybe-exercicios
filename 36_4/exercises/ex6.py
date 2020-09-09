import requests
from parsel import Selector

url = "http://books.toscrape.com/catalogue/category/books/historical-fiction_4/"
next_page = "page-1.html"

while next_page:
    next_page_url = url + next_page
    response = requests.get(next_page_url)
    selector = Selector(text=response.text)
    titles = selector.css(".product_pod h3 a::attr(title)").getall()
    for title in titles:
        print(title)
    next_page = selector.css(".next a::attr(href)").get()
