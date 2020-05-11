<?php 
require "../controller/controller.php";

//chamar uma função para saber se o usuário passou uma data no nosso formato
if (!$util->dateFormat($argv[1])) {
    echo "Data no formato errado... O formato correto é Dia+Mes+Ano(Dia) => 16mar2009(mon)";
    exit;
}
//chamar uma função para saber se o usuário passou uma tipo de cliente no nosso formato
if (!$util->tipoClientFormat($argv[2])) {
    echo "Tipo do Cliente no formato errado... O formato correto é Normal ou Fidelidade";
    exit;
}


echo "##########################################################\n";
echo "                    Pousadas                              \n";
echo "##########################################################\n";
echo "\n";

echo "As datas digitadas foram: ";
echo $argv[1];
echo "\n";
echo "O cliente é: ";
echo $argv[2];
echo "\n";
echo "\n";
echo "A pousada mais barata é: ";
echo $nameHostel;





?>