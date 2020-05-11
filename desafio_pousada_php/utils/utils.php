<?php

class Utils{

    //function __construct(){}

    //Função para validar o formato da data
    public function dateFormat(string $dates){
        $tam = strlen($dates);
        $result = false;
        if ($tam >= 14) {            
            if ($tam == 14) {
                //16Mar2009(mon)
                //01234567890123
                $twoNumber = is_numeric(substr($dates, 0, 2));
                $mounthString = is_string(substr($dates, 2, 3));
                $fourNumber = is_numeric(substr($dates, 5, 4));
                $carcter1 = (is_string(substr($dates, 9, 4)) && (strcmp(substr($dates, 9, 1), "(") == 0));
                $dayString = is_string(substr($dates, 10, 3));
                $carcter2 = (is_string(substr($dates, 13, 4)) && (strcmp(substr($dates, 13, 1), ")") == 0));
                $result = ($twoNumber && $mounthString && $fourNumber && $carcter1 && $dayString && $carcter2);
            }else{
                $arrAux = explode(",", $dates);
                for ($i=0; $i < count($arrAux) ; $i++) { 
                    $arrData[] = DateTime::createFromFormat('dMY(D)', $arrAux[$i]);
                } 
                $result = (count($arrData)>1);  
            } 
        }
        return $result;
    }

    public function tipoClientFormat(string $tipo)
    {   
        $result = false;
        if (strcmp(strtoupper($tipo), "NORMAL") || strcmp(strtoupper($tipo), "FIDELIDADE")) {
            $result = true;
        }

        return $result;
    }

    public function convertDate(string $dates)
    {
        $result = [];
        if (strlen($dates) > 14) {
            $arrAux = explode(",", $dates);            
            for ($i=0; $i < count($arrAux) ; $i++) { 
                $result[] = DateTime::createFromFormat('dMY(D)', $arrAux[$i]);
            }    
        }else{
            $result[] = DateTime::createFromFormat('dMY(D)', $dates);
        }

        return $result;
    }

    public function TypeClient($tipo){
        return (strcmp(strtoupper($tipo), "NORMAL") == 0) ? 0: 1;
    }

    public function LowestPriceHostel($pos, $arrPousadas){
        $previousValue = 99999;
        $currentValue = 0;
        $index = 0;
        $indexValue = [];
        $nameHostel = [];
        $arrRating = [];
        $result = "";

        foreach($arrPousadas[0] as $key=>$value){   
            switch ($pos) {
                case 2:
                    $currentValue = $value->getWeekdayValue();
                    break;
                case 3:                    
                    $currentValue = $value->getWeekdayFidelityValue();
                    break;
                case 4:                
                    $currentValue = $value->getWeekendValue();
                    break;
                case 5:                    
                    $currentValue = $value->getWeekendFidelityValue();
                    break;
            }
            if ($currentValue <= $previousValue) {
                $arrRating[$index] = $value->getRating();                
                $nameHostel[$index] = $value->getHostelName();
                $index++;
                $previousValue = $currentValue;
            }
        }

        $index = 0;
        $previousValue = 0;
        $currentValue = 0;

        if (count($arrRating) > 1) {
            for ($i=0; $i < count($arrRating); $i++) {                 
                $currentValue = $arrRating[$i];                 
                if ($currentValue > $previousValue) {
                    $indexValue = $i;                                    
                    $previousValue = $currentValue;
                }
            }
            $result = $nameHostel[$indexValue];
    
        }else{
            $result = $nameHostel[0];
        }

        return $result;
    }

    public function PriceHostel($tipoClient, $posBegin, $posEnd)
    {
        $resultPrice = 0;
        if ($util->tipoClient($tipoClient) == 0) {
            $resultPrice = $util->PousadaBarata($posBegin);
        }else{
            $resultPrice = $util->PousadaBarata($posEnd);
        }
        return $resultPrice;
    }


}
?>