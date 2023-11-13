const { MysqlConnection } = require("./mysql-connection");
const { MssqlConnection } = require("./mssql-connection");

const isProduction = process.env.AMBIENTE_PROCESSO === "producao";

class Database {
	mysqlConnection = null;
	mssqlConnection = null;

	constructor() {
		this.mysqlConnection = new MysqlConnection();
		this.mssqlConnection = new MssqlConnection();
	}

	async startConnection() {
		if (isProduction) {
			if (this.mssqlConnection) {
				await this.mssqlConnection.start();
			}
		} else {
			if (this.mysqlConnection) {
				await this.mysqlConnection.start();
			}
		}
	}

	verifyHasStarted() {
		if (isProduction) {
			if (!this.mssqlConnection) return false;

			return this.mssqlConnection.verifyHasStarted();
		} else {
			if (!this.mysqlConnection) return false;

			return this.mysqlConnection.verifyHasStarted();
		}
	}

	async query(sql) {
		if (isProduction) {
			if (this.mssqlConnection) {
				return await this.mssqlConnection.query(sql);
			}
		} else {
			if (this.mysqlConnection) {
				return await this.mysqlConnection.query(sql);
			}
		}
	}

	async executar(sql) {
		const hasStarted = await this.verifyHasStarted();

		if (!hasStarted) {
			await this.startConnection();
		}

		return this.query(sql);
	}
}

module.exports = { Database };
