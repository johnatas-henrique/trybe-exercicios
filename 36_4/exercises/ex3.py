import requests

url = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
info_headers = {"User-agent": "Mozilla", "Accept": "text/html"}

response = requests.get(url, headers=info_headers)

assert "bot detected" not in response.text
