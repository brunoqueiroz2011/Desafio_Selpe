# Desafio do Pousada
Uma rede de pousadas em Recife gostaria de criar uma plataforma digital de reservas. A rede é composta por três pousadas: Coral, Aconchego e Bela Vista. Cada pousada tem taxas diferenciadas para dia de semana ou final de semana, incluindo taxas específicas para participantes do programa de fidelidade. Adicionalmente, cada pousada tem uma classificação, indicando a excelência do serviço.

Escreva um programa para encontrar a pousada mais barata. A entrada do programa será uma sequência de datas para um cliente participante ou não do programa de fidelidade. Utilize "Normal" para denominar um cliente normal e "Fidelidade" para um cliente participante do programa de fidelidade. A saída deverá ser a pousada disponível mais barata e em caso de empate, a pousada com a maior classificação deverá ser retornada.

##Como execultar
1. Coloque o arquivo na pasta do www(wampp) ou htdocs(xampp) do seu computador;
2. Abra um CMD e acesse a pasta view dentro do projeto;
3. Execulte o seguinte programa: _php index.php 16Mar2009(mon),17Mar2009(tue),18Mar2009(wed) normal_

###Entradas de testes
1. Dia de semana: _php index.php 16Mar2009(mon),17Mar2009(tue),18Mar2009(wed) normal_ ou _php index.php 16Mar2009(mon),17Mar2009(tue),18Mar2009(wed) fidelidade_
2. Fim de semana: _php index.php 21Mar2009(sat),22Mar2009(sun) normal_ _php index.php 21Mar2009(sat),22Mar2009(sun) fidelidade_