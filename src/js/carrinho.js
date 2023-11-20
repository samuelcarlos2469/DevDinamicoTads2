import { Storage } from "./localStorage.js";

const storage = new Storage();
const car = storage.getCarrinho();

const listacarrinho = document.querySelector("#lista-carrinho");

function populate(produtos) {
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
      
              <button class="btn btn-danger" id="remove${element.id}">Remover
              </button>
          </div>
        </li>
    `;
  });

  listacarrinho.innerHTML = html;
}

populate(car);

car.forEach((element) => {
  const inputQtde = listacarrinho.querySelector(`#id${element.id}`);
  const remove = listacarrinho.querySelector(`#remove${element.id}`);

  remove.addEventListener("click", () => {
    alterarQuantidade(element.id, 0);
  });

  inputQtde.addEventListener("change", () => {
    alterarQuantidade(element.id, inputQtde.value);
  });
});

function alterarQuantidade(id, qtd) {
  const filtrado = car.filter((element) => element.id == id);
  const index = car.indexOf(filtrado[0]);

  filtrado[0].quantidade = qtd;
  filtrado[0].total = qtd * filtrado[0].preco;

  if (Number(qtd) === 0) {
    let compras = car.filter((element) => element.id !== id);
    storage.attCarrinho(compras);
  } else {
    car[index] = filtrado[0];
    storage.attCarrinho(car);
  }

  window.location.reload();
}

const total = document.querySelector("#total");
let all = 0;

car.forEach((element) => {
  all += element.total;
});

total.innerHTML = `R$ ${all.toLocaleString("pt-BR")}`;
