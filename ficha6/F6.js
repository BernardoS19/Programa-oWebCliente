"use strict";

const API_KEY = "9091E687";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";


var search_url = API_URL + "s=" + "batman";
// http://www.omdbapi.com/?apikey=9091E687&s=batman

/*$.ajax({
    method: "GET",
    url: search_url
}).done(function (msg){

});   ---BASE PARA FAZER UM PEDIDO AO API---    */
$.ajax({
    method: "GET",
    url: search_url
}).done(function (msg) {

    if(msg.Response === "True") {
       var results = msg.Search; // Array de resultados
       if (results.length >= 1){
           var i = 0;
           var result = results[i]; // Primeiro resultado

           var titulo = result.Title;
           var ano = result.Year;
           var tipo = result.Type;
           var poster = result.Poster;

           console.log("Title: " + titulo);
           console.log("Year: " + ano);
           console.log("Tipo: " + tipo);
           console.log("Poster: " + poster);


       }else{
           console.log("Error: no response.");
       };
    }else{
        console.log("Error: no response.");
    };

});