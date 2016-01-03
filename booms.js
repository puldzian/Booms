// Jedna zmienna wystarczy
var numerWiersza = 1;

// Komora losująca
function komoraLosujaca(n) {
    return Math.floor(Math.random() * (n));
}

// Podstaw wylosowane frazy do htmla
function podstawRzeczy(n) {
    $(".v1").html(rzeczy[n][0]);
    $(".v3").html(rzeczy[n][1]);
}

function podstawBombe(n) {
    $(".v2a").html(bomby[n][0]);
    $(".v2b").html(bomby[n][1]);
    $(".v2c").html(bomby[n][2]);
    $(".v2d").html(bomby[n][3]);   
}

// Jedziemy
$(document).ready(function () {
    "use strict";
    
    function booms() {
        
        switch(numerWiersza) {
            // Case 1+2+3 to wiersze z repetytorium, więc stałe wartości
            // setTimeout czeka ze zmianą treści aż fadeout się dopełni
            case 1:
                podstawRzeczy(0);
                podstawBombe(0);
                $(".vliczba").html(numerWiersza);
                numerWiersza = numerWiersza + 1;
                break;
            case 2:
                $(".generator").fadeOut();
                setTimeout(function(){
                    podstawRzeczy(1);
                    podstawBombe(1);
                    $(".vliczba").html(numerWiersza);  
                    numerWiersza = numerWiersza + 1;
                    $(".generator").fadeIn();
                }, 500);
                break;
            case 3:
                $(".generator").fadeOut();
                setTimeout(function(){
                    podstawRzeczy(2);
                    podstawBombe(2);
                    $(".vliczba").html(numerWiersza);    
                    numerWiersza = numerWiersza + 1;
                    $(".generator").fadeIn();
                }, 500);

                break;
            default:
                $(".generator").fadeOut();
                setTimeout(function(){
                    // Losujemy frazy i podstawiamy je
                    var wylosowanaRzecz = komoraLosujaca(maksimumRzecz),
                        wylosowanaBomba = komoraLosujaca(maksimumBomba); 
                    podstawRzeczy(wylosowanaRzecz);
                    podstawBombe(wylosowanaBomba);     
                    $(".vliczba").html(numerWiersza);  
                    numerWiersza = numerWiersza + 1;
                    $(".generator").fadeIn();
                }, 500);
        }
    
        // CZAS JEDNEGO WIERSZA = 10000ms
        setTimeout(booms, 5000);
    }
    
    booms();
    
});