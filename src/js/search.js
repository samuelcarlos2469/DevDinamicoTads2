import { Storage } from "./localStorage.js";
import { populate } from "./lista.js";

const storage = new Storage();
const search = document.querySelector("#search");

search.addEventListener("input", (event) => {
  const procura = search.value;
  const produtos = storage.searchProdutos(procura);

  console.log(produtos);

  populate(produtos);
});
