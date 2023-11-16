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

                <div class="input-group">
                  
                  <input type="number" id= "inputqtd${
                    element.id
                  }" class="form-control text-center border-dark" value="${
      element.quantidade
    }">
                  
                  
                  <button class="btn btn-danger" onclick=alterarQuantidade(${
                    element.id
                  }, 0)>Remover
                  </button>
                </div>
        </div>
        </li>
    `;
  });

  listacarrinho.innerHTML = html;
}

populate(car);

car.forEach((element) => {
  const listacarrinho = document.querySelector("#lista-carrinho");
  const btn = listacarrinho.querySelector(`#inputqtd${element.id}`);
  btn.addEventListener("change", () => {
    alterarQuantidade(element.id, btn.value);
  });
});

function alterarQuantidade(id, qtd) {
  const carrinho = car.filter((element) => element.id == id);
  //revisar aqui
  produto.quantidade = qtd;
  produto.total = qtd * preco;
  if (produto.quantidade == 0) {
    carrinho = car.filter((element) => element.id !== id);
  }
  storage.attCarrinho(carrinho);
}

/*
testar e modificar pra ver se fica legal no carrinho, outro input ficou mt grande
<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>;

esse aqui pra substituir o do parcelamento talvez
<div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
*/
