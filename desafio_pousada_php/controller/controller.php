<?php
require "../utils/utils.php";
require "../model/pousada.php";

    //Variaveis
    $util = new Utils();
    $datas = $argv[1];
    $typeClient =  $argv[2];


    $arrPousadas[] = array(
        new Pousada("Coral",3,110,80,90,80),
        new Pousada("Acochego",4,110,110,60,50),
        new Pousada("Bela Vista",5,220,100,150,40)
    );


    $nameHostel = "";
    $arrPriceHostel = [];

    $arrData = $util->convertDate($datas);


    for ($i=0; $i < count($arrData); $i++) { 
        if ($arrData[$i]->format('w') >= 1 && $arrData[$i]->format('w') <= 5) {
            $nameHostel = $util->LowestPriceHostel(($util->TypeClient($typeClient) == 0)? 2: 3, $arrPousadas);    
        }
        if ($arrData[$i]->format('w') == 0 || $arrData[$i]->format('w') == 6) {
            $nameHostel = $util->LowestPriceHostel(($util->TypeClient($typeClient) == 0)? 4: 5, $arrPousadas);    
        }
    }


?>