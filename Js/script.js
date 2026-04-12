function adicionarVeiculo() {

    // Indentificando elementos do html FORM e div LISTAGEM DE VEICULOS 
    const form = document.querySelector("#formVeiculo")
    const lista = document.querySelector("#listaVeiculos")
    const item = document.createElement("div")
    item.classList.add("item")


    //pegando Valores do HTML

    const modelo = document.getElementById("modelo").value
    const marca = document.getElementById("marca").value
    const placa = document.getElementById("placa").value

   //correção data input
    const data = document.getElementById("ano").value
    const ano = new Date(data).getFullYear()
    //
    
    const valor = parseFloat(document.getElementById("valor").value)
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



    //calculo taxa de seguro do veiculo

    const seguro = valor * 0.1

    //Final / calculo idade e IPVA

    const anoAtual = new Date().getFullYear()
    const idade_carro = anoAtual - ano

    let ipva = 0
    let ipvaTexto = ""


    if (idade_carro >= 20) {
        ipvaTexto = "Isento"
        item.classList.add("isento")
    } else {
        const taxa = taxas[combustivel] || 0;
        ipva = valor * taxa
        ipvaTexto = `R$ ${ipva.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`
    }

    const total = seguro + ipva

    //criando lista

    item.innerHTML =
        `
        <hr>

        <p><strong>Placa:</strong> ${placa}</p>
        <p><strong>Modelo:</strong> ${modelo}</p>
        <p><strong>Marca:</strong> ${marca}</p>
        <p><strong>Ano:</strong> ${ano}</p>
        <p><strong>Cor:</strong> ${cor}</p>
        <p><strong>Seguro:</strong> R$ ${seguro.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
        <p><strong>IPVA:</strong> ${ipvaTexto}</p>
        <p><strong>Total:</strong> R$ ${total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>

        <button class="remover">Excluir</button>
    `
    const btnExcluir = item.querySelector(".remover");

    btnExcluir.addEventListener("click", function () {
        if (confirm("Tem certeza que deseja excluir esse veículo?")) {
            item.remove();
        }
    })
    lista.appendChild(item)
    //limpa o formulário
    form.reset()
}