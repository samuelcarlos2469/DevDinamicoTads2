const Conexao = require("./conexao");

class CarrinhoModel {
  tabela = "carrinho";
  db = new Conexao();

  constructor() {
    this.db.conectar();
  }

  async getallCarrinho() {
    try {
      const request = await this.db.query(`SELECT * FROM ${this.tabela}`, []);
      return request;
    } catch (err) {
      throw err;
    }
  }

  async getcarrinhoById(id) {
    try {
      const request = await this.db.query(
        `SELECT * FROM ${this.tabela} WHERE id = ?`,
        [id]
      );
      return request;
    } catch (err) {
      throw err;
    }
  }

  async add(valorTotal, valorParcela, tipo, data) {
    try {
      await this.db.query(
        `INSERT INTO ${this.tabela} (valorTotal, valorParcela, tipo, data) VALUES (?, ?, ?, ?)`,
        [valorTotal, valorParcela, tipo, data]
      );
    } catch (err) {
      throw err;
    }
  }

  async edita(id, valorTotal, valorParcela, tipo) {
    try {
      await this.db.query(
        `UPDATE ${this.tabela} SET valorTotal = ?, valorParcela = ?, tipo = ? WHERE id = ?`,
        [valorTotal, valorParcela, tipo, id]
      );
    } catch (err) {
      throw err;
    }
  }

  async remove(id) {
    try {
      await this.db.query(`DELETE FROM ${this.tabela} WHERE id = ?`, [id]);
    } catch (err) {
      throw err;
    }
  }
}
