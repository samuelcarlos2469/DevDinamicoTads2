import { Storage } from "./localStorage.js";

const storage = new Storage();
const produtos = storage.getProdutos();

function populate(produtos) {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";
  let html = "";

  produtos.forEach((element) => {
    html += `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <img src="${
                  element.imagem
                }" class="card-img-top object-fit-scale" height="200">
                <div class="card-body">
                <h5 class="card-title">${element.nome}</h5>
                <p class="card-text">R$ ${element.preco.toLocaleString(
                  "pt-BR"
                )} </p>
                <button id="id${
                  element.id
                }" class="btn btn-success">Comprar</button>
                </div>
            </div>
        </div>
    `;
  });

  lista.innerHTML = html;
}

populate(produtos);

produtos.forEach((element) => {
  const btn = lista.querySelector(`#id${element.id}`);
  btn.addEventListener("click", () => {
    storage.addProdutoCarrinho(element.id);
  });
});

const search = document.querySelector("#search");

search.addEventListener("input", () => {
  const procura = search.value;
  const prods = storage.searchProdutos(procura);

  populate(prods);
});
