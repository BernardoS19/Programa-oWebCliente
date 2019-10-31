"use strict";

var imagem = null;

function escondeMostra() {
    console.log("esconde/mostra");

    /*var visibilidade = getComputedStyle(imagem).getPropertyValue("visibility");

    if (visibilidade === "visible"){
        imagem.style.visibility = "hidden";
    }else {
        imagem.style.visibility = "visible";
    }*/
}
//var visibilidade = getComputedStyle(imagem).getPropertyValue("visibility");
var visibilidade = imagem.css("visibility");
if(visibilidade === "visible"){
    //imagem.style.visibility = "hidden";
    imagem.css("visibility", "hiden");
}else{
    //imagem.style.visibility = "visible";
    imagem.css("visibility", "visible");
}


function esconde() {
    console.log("esconde");
    imagem.style.display = "none";
}

function mostra() {
    console.log("mostra");
    imagem.style.display = "block";
}

/*document.addEventListener("DOMContentLoaded", function () {
    imagem = document.getElementsByTagName("img")[0];
    var botao = document.getElementById("botao");
    botao.addEventListener("mouseover", mostra);
});*/


//document.addEventListener("DOMContentLoaded", function () {})
$(document).ready(function () {
    //imagem = document.getElementsByTagName("img")[0];
    imagem = $("img");

    //var botao = document.getElementById("botao");
    //botao.addEventListener("mouseover", mostra);
    $("#botao").mouseover(mostra);
});