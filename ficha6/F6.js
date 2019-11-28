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
           var result = results[0]; // Primeiro resultado

           var titulo = result.Title;
           console.log("Title: " + titulo);
       }else{
           console.log("Error: no response.");
       }
    }else{
        console.log("Error: no response.");
    }

});