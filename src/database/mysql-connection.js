const mysql = require('mysql2')

const { mySqlConfig } = require("./secrets");

class MysqlConnection {
	mysql = null;

	async start() {
		const conexao = mysql.createConnection(mySqlConfig);

		conexao.on("error", function (erro) {
			return "ERRO NO MySQL WORKBENCH: ", erro.sqlMessage;
		});

		this.mysql = conexao;
	}

	async query(instrucao) {

		return await new Promise((resolve, reject) => {
			this.mysql.query(instrucao, (error, data) => {
				if (error) return reject(error);

				return resolve(data);
			});
		});
	}

	async verifyHasStarted() {
		return Boolean(this.mysql);
	}
}

module.exports = { MysqlConnection };
