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
const cor = document.getElementById("cor").value

//pegando seleção de combustivel

const combustivel = document.querySelector('input[name="combustivel"]:checked')?.value || "Não informado"

//definição das TAXAS dos combustiveis

const taxas = {
    gasolina: 0.2,
    etanol: 0.15,
    bicombustivel: 0.1,
    hibrido: 0.08,
    eletrico: 0.02
}