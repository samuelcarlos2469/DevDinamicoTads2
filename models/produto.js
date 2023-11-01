const Conexao = require("./conexao");

class ProdutoModel {
  tabela = "produto";
  db = new Conexao();

  constructor() {
    this.db.conectar();
  }

  async getAllProdutos() {
    try {
      const result = await this.db.query(`SELECT * FROM ${this.tabela}`, []);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async getProdutoById(id) {
    try {
      const result = await this.db.query(
        `SELECT * FROM ${this.tabela} WHERE id = ?`,
        [id]
      );
      return result;
    } catch (err) {
      throw err;
    }
  }
}
