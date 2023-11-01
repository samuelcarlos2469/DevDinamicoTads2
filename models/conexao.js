const mysql = require("mysql2");

class Conexao {
  constructor() {
    this.conexao = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "$Enha123",
      database: "betofinal",
    });
    this.conectar();
  }

  conectar() {
    this.conexao.connect((err) => {
      if (err) {
        console.error(
          "Não foi possível realizar a conexão com o banco de dados:",
          err
        );
      }
    });
  }

  desconectar() {
    this.conexao.end();
  }

  query(sql, params) {
    return new Promise((resolve, reject) => {
      this.conectar();

      this.conexao.execute(sql, params, (err, result) => {
        if (err) {
          console.error("Erro ao executar a query: " + err);
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }
}

module.exports = Conexao;
