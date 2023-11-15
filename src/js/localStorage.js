export class Storage {
  constructor() {
    const produtos = [
      {
        id: 1,
        nome: "Notebook Acer Nitro 5",
        preco: 2000.0,
        imagem: "../src/img/acerNitro5.jpg",
        quantidade: 1,
        total: 2000.0,
      },
      {
        id: 2,
        nome: "JBL Boombox 3",
        preco: 100.0,
        imagem: "../src/img/boombox3.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 3,
        nome: "Controle Sem Fio Xbox",
        preco: 100.0,
        imagem: "../src/img/controleXbox.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 4,
        nome: "Galaxy Tab S7 FE",
        preco: 100.0,
        imagem: "../src/img/galaxyTabs7FE.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 5,
        nome: "Iphone 14",
        preco: 100.0,
        imagem: "../src/img/iphone14.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 6,
        nome: "Ar Condicionado LG 12000",
        preco: 100.0,
        imagem: "../src/img/lgDualInverter12000.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 7,
        nome: "Motorola Moto E13",
        preco: 100.0,
        imagem: "../src/img/motoE13.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 8,
        nome: "Galaxy Tab S6 Lite",
        preco: 100.0,
        imagem: "../src/img/tab26Lite.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 9,
        nome: "LG Thinq AI 50 40'",
        preco: 100.0,
        imagem: "../src/img/tvThingAi50.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 10,
        nome: "Teclado Razer BlackWidow",
        preco: 100.0,
        imagem: "../src/img/balckWidowRazer.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 11,
        nome: "Bateria Acer Aspire",
        preco: 100.0,
        imagem: "../src/img/bateriaAcerAspire.jpg",
        quantidade: 1,
        total: 100.0,
      },
      {
        id: 12,
        nome: "Mouse Logitech G402",
        preco: 100.0,
        imagem: "../src/img/logitechG402.jpg",
        quantidade: 1,
        total: 100.0,
      },
    ];

    let prods = this.getProdutos();
    let carrinho = this.getCarrinho();

    if (!prods) {
      localStorage.setItem("produtos", JSON.stringify(produtos));
    }

    if (!carrinho) {
      localStorage.setItem("carrinho", JSON.stringify([]));
    }
  }

  addProdutos(produto) {
    const produtos = JSON.parse(localStorage.getItem("produtos"));
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }

  addProdutoCarrinho(id) {
    const produto = this.getProdutoById(id);
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

  attCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }

  getProdutos() {
    return JSON.parse(localStorage.getItem("produtos"));
  }

  getProdutoById(id) {
    const produtos = JSON.parse(localStorage.getItem("produtos"));
    return produtos.find((produto) => produto.id === id);
  }

  clear() {
    localStorage.clear();
  }
}
