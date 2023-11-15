import { Storage } from "./localStorage.js";

const storage = new Storage();
const carrinho = document.querySelector("#carrinho");

export function addCarrinho(id) {
  const produto = storage.getProdutos(id);

  console.log(produto);

  storage.addProdutoCarrinho(produto);

  console.log(storage.getCarrinho());
}
export function preencherCarrinho(produtos) {
  const listacarrinho = document.querySelector("#lista-carrinho");
  listacarrinho.innerHTML = "";

  produtos.forEach((element) => {
    listacarrinho.innerHTML += `
        <li class="list-group-item">
        <div class="d-flex g-2 justify-content-between align-items-center">
            <div>
                <img
                src="${element.imagem}" class="object-fit-scale" height="150">
            </div>
            <div>${element.nome}</div>
            <p class="">R$ ${element.preco.toLocaleString("pt-BR")} </p>

            <div class="input-group">
            <button type="button" class="btn btn-outline-dark">-</button>
            <input type="text" class="form-control text-center border-dark" value="1">
            <button type="button" class="btn btn-outline-dark">+</button>
            <button class="btn btn-danger" onclick=removeProdutoCarrinho(${
              element.id
            })>Remover</button>
            </div>
        </div>
    </li>
    `;
  });
}

function removeProdutoCarrinho(id) {
  const carrinho = getCarrinho();
  carrinho = carrinho.filter((element) => element.id !== id);
  attCarrinho(carrinho);
}
