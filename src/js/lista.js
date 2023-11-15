import { Storage } from "./localStorage.js";
import { addCarrinho } from "./addCarrinho.js";

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
                <button onClick="addCarrinho(${
                  element.id
                })" class="btn btn-success">Comprar</button>
                </div>
            </div>
        </div>
    `;
  });
}

populate(produtos);
