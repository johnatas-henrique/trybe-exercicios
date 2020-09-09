from unittest.mock import patch
import requests
import spider


@patch("spider.requests.get")
def test_fetch_content_with_status_ok(mock_get):
    content = """
    fake content
    """
    # O valor retornado pelo método `get` será um dublê
    # que possui status code 200 e o conteúdo definido na variável content
    mock_get.return_value.status_code = 200
    mock_get.return_value.text = content
    # A url não é importante. O que importa é como o método se comporta
    response = spider.fetch_content("http://meudominio.com")
    assert response == content


@patch("spider.requests.get")
def test_fetch_content_status_not_ok(mock_get):
    mock_get.return_value.raise_for_status.side_effect = requests.HTTPError()
    response = spider.fetch_content("http://meudominio.com")
    assert response == ''


@patch("spider.requests.get")
def test_fetch_content_timeout_raised(mock_get):
    mock_get.side_effect = requests.ReadTimeout
    response = spider.fetch_content("http://meudominio.com")
    assert response == ''
