import { Storage } from "./localStorage.js";

const storage = new Storage();

const car = storage.getCarrinho();

function populate(produtos) {
  const listacarrinho = document.querySelector("#lista-carrinho");
  listacarrinho.innerHTML = "";
  let html = "";

  produtos.forEach((element) => {
    html += `
        <li class="list-group-item">
            <div class="d-flex g-2 justify-content-between align-items-center">
                <div>
                    <img src="${
                      element.imagem
                    }" class="card-img-top object-fit-scale"
                        height="100" />
                </div>
                <div>${element.nome}</div>
                <div>R$ ${element.preco.toLocaleString("pt-BR")}</div>
                <div><button class="btn btn-danger">Remover</button></div>
            </div>
        </li>
    `;
  });

  listacarrinho.innerHTML = html;
}

populate(car);

function removeProdutoCarrinho(id) {
  const carrinho = getCarrinho();
  carrinho = carrinho.filter((element) => element.id !== id);
  attCarrinho(carrinho);
}
