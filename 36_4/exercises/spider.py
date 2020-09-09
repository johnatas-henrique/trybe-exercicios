import requests


def fetch_content(url, timeout=1):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
    except (requests.ReadTimeout, requests.HTTPError):
        return ''
    else:
        return response.text
