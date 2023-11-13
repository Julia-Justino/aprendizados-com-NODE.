const sql = require("mssql");

class MssqlConnection {
	hasStarted = false;

	async start() {
		await sql.connect(sqlServerConfig);

		sql.on("error", function (erro) {
			return "ERRO NO SQL SERVER (Azure): ", erro;
		});

    this.hasStarted = true
	}

	async query(instrucao) {
		try {
			return await sql.query(instrucao);
		} catch {
			throw new Error("Internal server error");
		}
	}

	async verifyHasStarted() {
		return this.hasStarted;
	}
}

module.exports = { MssqlConnection }; 