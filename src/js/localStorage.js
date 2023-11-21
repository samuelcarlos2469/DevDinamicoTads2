export class Storage {
  constructor() {
    const produtos = [
      {
        id: 1,
        nome: "Notebook Acer Nitro 5",
        preco: 3299.0,
        imagem: "../src/img/acerNitro5.jpg",
        quantidade: 1,
        total: 3299.0,
      },
      {
        id: 2,
        nome: "JBL Boombox 3",
        preco: 2145.0,
        imagem: "../src/img/boombox3.jpg",
        quantidade: 1,
        total: 2145.0,
      },
      {
        id: 3,
        nome: "Controle Sem Fio Xbox",
        preco: 330.5,
        imagem: "../src/img/controleXbox.jpg",
        quantidade: 1,
        total: 330.5,
      },
      {
        id: 4,
        nome: "Galaxy Tab S7 FE",
        preco: 2299.0,
        imagem: "../src/img/galaxyTabs7FE.jpg",
        quantidade: 1,
        total: 2299.0,
      },
      {
        id: 5,
        nome: "Iphone 14 256GB",
        preco: 4998.9,
        imagem: "../src/img/iphone14.jpg",
        quantidade: 1,
        total: 4998.99,
      },
      {
        id: 6,
        nome: "Ar Condicionado LG 12000",
        preco: 2535.0,
        imagem: "../src/img/lgDualInverter12000.jpg",
        quantidade: 1,
        total: 2535.0,
      },
      {
        id: 7,
        nome: "Motorola Moto E13",
        preco: 549.0,
        imagem: "../src/img/motoE13.jpg",
        quantidade: 1,
        total: 549.0,
      },
      {
        id: 8,
        nome: "Galaxy Tab S6 Lite 64GB",
        preco: 1499.0,
        imagem: "../src/img/tab26Lite.jpg",
        quantidade: 1,
        total: 1499.0,
      },
      {
        id: 9,
        nome: "LG Thinq AI 50 40'",
        preco: 2079.0,
        imagem: "../src/img/tvThingAi50.jpg",
        quantidade: 1,
        total: 2079.0,
      },
      {
        id: 10,
        nome: "Teclado Razer BlackWidow",
        preco: 679.9,
        imagem: "../src/img/balckWidowRazer.jpg",
        quantidade: 1,
        total: 679.99,
      },
      {
        id: 11,
        nome: "Bateria Acer Aspire",
        preco: 109.9,
        imagem: "../src/img/bateriaAcerAspire.jpg",
        quantidade: 1,
        total: 109.99,
      },
      {
        id: 12,
        nome: "Mouse Logitech G402",
        preco: 149.9,
        imagem: "../src/img/logitechG402.jpg",
        quantidade: 1,
        total: 149.99,
      },
    ];

    let prods = this.getProdutos();
    let carrinho = this.getCarrinho();

    if (!prods) {
      localStorage.setItem("produtos", JSON.stringify(produtos));
    }

    if (!carrinho) {
      this.attCarrinho([]);
    }
  }

  addProdutoCarrinho(id) {
    const produto = this.getProdutoById(id);
    const carrinho = JSON.parse(localStorage.getItem("carrinho"));

    if (carrinho && carrinho.length > 0) {
      const filtrado = carrinho.filter((produto) => produto.id === id);
      const index = carrinho.indexOf(filtrado[0]);

      if (filtrado && filtrado.length > 0) {
        filtrado[0].quantidade = Number(filtrado[0].quantidade) + 1;
        filtrado[0].total =
          Number(filtrado[0].preco) * Number(filtrado[0].quantidade);

        carrinho[index] = filtrado[0];
      } else {
        carrinho.push(produto);
      }
    } else {
      carrinho.push(produto);
    }

    this.attCarrinho(carrinho);
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
