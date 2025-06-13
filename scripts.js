let other1 = document.querySelector(".other1");
let other2 = document.querySelector(".other2");
let other3 = document.querySelector(".other3");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let sair1 = document.querySelector(".sair1");
let sair2 = document.querySelector(".sair2")
let sair3 = document.querySelector(".sair3")
let parte1 = document.querySelector(".part1")
let parte2 = document.querySelector(".part2")
let parte3 = document.querySelector(".part3")

function clicar() {
    other1.style.display = "block";
    btn1.style.display = "none"
    sair1.style.display = "block";
}

function ativar() {
    other2.style.display = "block";
    btn2.style.display = "none"
    sair2.style.display = "block";
}

function colocar() {
    other3.style.display = "block";
    btn3.style.display = "none"
    sair3.style.display = "block";
}

function sair() {
    sair1.style.display = "none";
    parte1.style.display = "flex"
    other1.style.display = "none"
    btn1.style.display = "block"
}

function leave() {
    sair2.style.display = "none";
    parte2.style.display = "flex"
    other2.style.display = "none"
    btn2.style.display = "block"
}

function left() {
    sair3.style.display = "none";
    parte3.style.display = "flex"
    other3.style.display = "none"
    btn3.style.display = "block"
}