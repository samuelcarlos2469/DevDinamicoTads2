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
                <div>R$ ${element.total.toLocaleString("pt-BR")}</div>
                  
                <input type="number" id="id${
                  element.id
                }" class="form-control w-25 text-center" value="${
      element.quantidade
    }" />
      
              <button class="btn btn-danger" onclick=alterarQuantidade(${
                element.id
              }, 0)>Remover
              </button>
          </div>
        </li>
    `;
  });

  listacarrinho.innerHTML = html;
}

populate(car);

car.forEach((element) => {
  const listacarrinho = document.querySelector("#lista-carrinho");
  const inputQtde = listacarrinho.querySelector(`#id${element.id}`);
  inputQtde.addEventListener("change", () => {
    alterarQuantidade(element.id, inputQtde.value);
  });
});

function alterarQuantidade(id, qtd) {
  const filtrado = car.filter((element) => element.id == id);
  const index = car.indexOf(filtrado[0]);

  filtrado[0].quantidade = qtd;
  filtrado[0].total = qtd * filtrado[0].preco;

  if (qtd === 0) {
    car = car.filter((element) => element.id !== id);
    storage.attCarrinho(carrinho);
  } else {
    car[index] = filtrado[0];
    storage.attCarrinho(car);
  }

  window.location.reload();
}
