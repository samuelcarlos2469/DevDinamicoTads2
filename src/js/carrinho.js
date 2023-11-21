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
                <div class="col-3">
                    <img src="${
                      element.imagem
                    }" class="card-img-top object-fit-scale"
                        height="100" />
                </div>
                <div class="col-3 text-center">${element.nome}</div>
                <div class="text-center col-2"> R$ ${element.total.toLocaleString(
                  "pt-BR"
                )}</div>
                  
                <input type="number" id="id${
                  element.id
                }" class="form-control text-center me-3" value="${
      element.quantidade
    }" />
              <button class="btn btn-danger col-2" id="remove${
                element.id
              }">Remover
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

total.innerHTML = `R$ ${all.toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})}`;

const parcelado = document.querySelector("#cartao");
const parcelas = document.querySelector("#parcelas");
const finalizar = document.querySelector("#btnFinalizar");

parcelado.addEventListener("change", () => {
  if (parcelado.checked) {
    parcelas.disabled = false;
    parcelas.innerHTML = "<option>Parcelamento:</option>";

    for (let i = 1; i <= 10; i++) {
      parcelas.innerHTML += `<option value="${i}">${i} vezes de R$ ${(
        all / i
      ).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} sem juros</option>`;
    }

    finalizar.classList.remove("d-none");
  } else {
    parcelas.disabled = true;
    finalizar.classList.add("d-none");
  }
});
