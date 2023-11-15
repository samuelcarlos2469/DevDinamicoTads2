import { Storage } from "./localStorage.js";

const storage = new Storage();

function addCarrinho(id) {
  const produto = storage.getProdutos(id);

  console.log(produto);

  storage.addProdutoCarrinho(produto);

  console.log(storage.getCarrinho());
}
