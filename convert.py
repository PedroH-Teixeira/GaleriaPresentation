import csv
import json

with open('Slabs.csv', 'r') as arquivo:
    dados = [x for x in csv.DictReader(arquivo)]

dados_json = json.dumps(dados)
print(dados_json)

with open('lotes.json', 'w') as arquivo:
    for dado in dados_json:
        dadoCaixaBaixa = dado.lower()
        arquivo.write(dadoCaixaBaixa)