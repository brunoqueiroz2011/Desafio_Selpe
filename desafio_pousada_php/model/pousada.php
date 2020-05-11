<?php

class Pousada{

    private $hostelName;
    private $rating;
    private $weekdayValue;
    private $weekdayFidelityValue;
    private $weekendValue;
    private $weekendFidelityValue;

    function __construct(string $hostelName, int $rating, $weekday, int $weekdayFidelity, int $weekend, int $weekendFidelity){
        $this->hostelName = $hostelName;
        $this->rating = $rating;
        $this->weekdayValue = $weekday;
        $this->weekdayFidelityValue = $weekdayFidelity;
        $this->weekendValue = $weekend;
        $this->weekendFidelityValue = $weekendFidelity;
    }

    public function getHostelName()
    {
        return $this->hostelName;
    }
    
    public function setHostelName($name)
    {
        $this->hostelName = $name;
    }

    public function getRating()
    {
        return $this->rating;
    }
    
    public function setRating($value)
    {
        $this->rating = $value;
    }

    public function getWeekdayValue()
    {
        return $this->weekdayValue;
    }
    
    public function setWeekdayValue($value)
    {
        $this->weekdayValue = $value;
    }

    public function getWeekdayFidelityValue()
    {
        return $this->weekdayFidelityValue;
    }
    
    public function setWeekdayFidelityValue($value)
    {
        $this->weekdayFidelityValue = $value;
    }

    public function getWeekendValue()
    {
        return $this->weekendValue;
    }
    
    public function setWeekendValue($value)
    {
        $this->weekendValue = $value;
    }

    public function getWeekendFidelityValue()
    {
        return $this->weekendFidelityValue;
    }
    
    public function setWeekendFidelityValue($value)
    {
        $this->weekendFidelityValue = $value;
    }   
}


    
?>