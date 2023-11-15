import { Storage } from "./localStorage.js";

const storage = new Storage();
const produtos = storage.getProdutos();

export function populate(produtos) {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";

  produtos.forEach((element) => {
    lista.innerHTML += `
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
                <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        </div>
    `;
  });
}

populate(produtos);
