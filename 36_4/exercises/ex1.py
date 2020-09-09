import requests

url = "https://httpbin.org/encoding/utf8"

response = requests.get(url)
print(response.text)
