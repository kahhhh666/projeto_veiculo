// Indentificando elementos do html FORM e div LISTAGEM DE VEICULOS 
const form = document.querySelector("#formVeiculo")
const lista = document.querySelector("#listaVeiculos")

form.addEventListener("submit", function(e) {
//faz com que a página não limpe quando eviado
    e.preventDefault()
})
