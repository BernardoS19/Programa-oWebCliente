"use strict";

function escondeMostra() {
    console.log("esconde/mostra");

}

function esconde() {
    console.log("esconde");

}

function mostra() {
    console.log("mostra");

}

document.addEventListener("DOMContentloaded", function () {
    var botao = document.getElementById("botao");
    botao.addEventListener("mouseover", mostra);
});