1) Apesar de claramente os três domínios serem da mesma empresa, algumas responsabilidades aparecem em nome de pessoas diferentes, como você explica isso?
R: Acredito que seja porque cada um dos sites, é cuidado por uma equipe, como baixamos informações sobre o site co.uk (Reino Unido), com (EUA) e com.br (Brasil), são pessoas da empresa diferentes, além de que são órgãos reguladores diferentes.


Bibliografia > https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAB/Developers/GettingStarted/API%20requests/curl-requests.htm

Comando GET
args url> curl -X GET https://httpbin.org/anything?firstname=Johnatas

Comando POST
data> curl -X POST -H "Content-Type: application/json" -d '{"lastname":"Henrique"}' https://httpbin.org/anything

form> curl -X POST https://httpbin.org/anything -d 'lastname=Henrique'

Comando PUT 
data> curl -X PUT -H "Content-Type: application/json" -d '{"firstname":"Johnatas","lastname":"Henrique"}' https://httpbin.org/anything

form> curl -X PUT -d 'firstname=Johnatas&lastname=Henrique' https://httpbin.org/anything

Comando DELETE
arg url> curl -X DELETE https://httpbin.org/anything?firstname=Johnatas

Comando PUT (em json)
data json> curl -X PUT -H "Content-Type: application/json" -d '{"escola":"Trybe"}' https://httpbin.org/anything

Identificar endereço (usar grep para um resultado mais limpo)
ifconfig enp9s0 | grep "inet " #enp9s0 é a entrada LAN cabeada

Máquinas ativas respondendo (pesquisei apenas as 10 portas principais, para ser mais rápido o resultado)
nmap --top-ports 10 192.168.40.0/20

Verifique se a sua máquina possui portas abertas para o protocolo UDP
sudo nmap -v -p 1-65535 -sU localhost #para scan UDP, sudo é necessário, usei o -p, porque caso contrário apenas as primeiras 1024 portas são escaneadas

Verifique se a sua máquina possui portas abertas para o protocolo TCP
nmap -v -p 1-65535 -sT localhost #o -p, porque caso contrário apenas as primeiras 1024 portas são escaneadas

Liste as conexões UDP em sua máquina
netstat -au

Liste as conexões TCP em sua máquina
netstat -at

Liste os sockets em escuta (LISTEN)
netstat -l

Mostre os programas que estão usando as conexões em sua máquina
netstat -at -au -vp #escolhi usar -at e -au para listar apenas conexões tcp e udp e não listar os domain sockets, digitando apenas netstat-vp vem tudo, inclusive os domain sockets, lembrando que como tudo que rodamos sem sudo, certos processos só podem ser vistos utilizando sudo antes do comando


