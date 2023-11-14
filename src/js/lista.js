import { Storage } from "./localStorage.js";

const storage = new Storage();

function populate() {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";

  const produtos = storage.getProdutos();

  console.log(produtos);

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

populate();
