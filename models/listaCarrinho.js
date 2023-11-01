const Conexao = require("./conexao");

class ListaCarrinho {
  tabela = "listacarrinho";
  db = new Conexao();

  constructor() {
    this.db.conectar();
  }

  async getAllLista() {
    try {
      const result = await this.db.query(`SELECT * FROM ${this.tabela}`);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async getListaById(id) {
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

  async add(idCarrinho, idProduto, quantidade, valorTotal) {
    try {
      await this.db.query(
        `INSERT INTO ${this.tabela} (idCarrinho, idProduto, quantidade, valorTotal) VALUES (?, ?, ?, ?)`,
        [idCarrinho, idProduto, quantidade, valorTotal]
      );
    } catch (err) {
      throw err;
    }
  }

  async edita(idProduto, quantidade, valorTotal) {
    try {
      await this.db.query(
        `UPDATE ${this.tabela} SET quantidade = ?, valorTotal = ? WHERE idProduto = ?`,
        [quantidade, valorTotal, idProduto]
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
