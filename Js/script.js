// Indentificando elementos do html FORM e div LISTAGEM DE VEICULOS 
const form = document.querySelector("#formVeiculo")
const lista = document.querySelector("#listaVeiculos")

form.addEventListener("submit", function(e) {
//faz com que a página não limpe quando eviado
    e.preventDefault()
})

//pegando Valores do HTML

const modelo = document.getElementById("modelo").value
const marca = document.getElementById("marca").value
const placa = document.getElementById("placa").value
const ano = document.getElementById("ano").value
const valor = document.getElementById("valor").value
