export class Storage {
  constructor() {
    const produtos = [
      {
        id: 1,
        nome: "Notebook Acer Nitro 5",
        preco: 2000.0,
        imagem: "../src/img/acerNitro5.jpg",
      },
      {
        id: 2,
        nome: "JBL Boombox 3",
        preco: 100.0,
        imagem: "../src/img/boombox3.jpg",
      },
      {
        id: 3,
        nome: "Controle Sem Fio Xbox",
        preco: 100.0,
        imagem: "../src/img/controleXbox.jpg",
      },
      {
        id: 4,
        nome: "Galaxy Tab S7 FE",
        preco: 100.0,
        imagem: "../src/img/galaxyTabs7FE.jpg",
      },
      {
        id: 5,
        nome: "Iphone 14",
        preco: 100.0,
        imagem: "../src/img/iphone14.jpg",
      },
      {
        id: 6,
        nome: "Ar Condicionado LG 12000",
        preco: 100.0,
        imagem: "../src/img/lgDualInverter12000.jpg",
      },
      {
        id: 7,
        nome: "Motorola Moto E13",
        preco: 100.0,
        imagem: "../src/img/motoE13.jpg",
      },
      {
        id: 8,
        nome: "Galaxy Tab S6 Lite",
        preco: 100.0,
        imagem: "../src/img/tab26Lite.jpg",
      },
      {
        id: 9,
        nome: "LG Thinq AI 50 40'",
        preco: 100.0,
        imagem: "../src/img/tvThingAi50.jpg",
      },
      {
        id: 10,
        nome: "Teclado Razer BlackWidow",
        preco: 100.0,
        imagem: "../src/img/balckWidowRazer.jpg",
      },
      {
        id: 11,
        nome: "Bateria Acer Aspire",
        preco: 100.0,
        imagem: "../src/img/bateriaAcerAspire.jpg",
      },
      {
        id: 12,
        nome: "Mouse Logitech G402",
        preco: 100.0,
        imagem: "../src/img/logitechG402.jpg",
      },
    ];

    this.produtos = localStorage.setItem("produtos", JSON.stringify(produtos));
    this.carrinho = localStorage.setItem("carrinho", JSON.stringify([]));
  }

  addProdutos(produto) {
    const produtos = JSON.parse(localStorage.getItem("produtos"));
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }

  addProdutoCarrinho(produto) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho"));
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }

  searchProdutos(search) {
    const produtos = JSON.parse(localStorage.getItem("produtos"));
    return produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(search.toLowerCase())
    );
  }

  getCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho"));
  }

  getProdutos() {
    return JSON.parse(localStorage.getItem("produtos"));
  }

  getProduto(id) {
    const produtos = JSON.parse(localStorage.getItem("produtos"));
    return produtos.find((produto) => produto.id == id);
  }

  clear() {
    localStorage.clear();
  }
}
