const mySqlConfig = {
	host: "localhost",
	database: "StockSafe",
	user: "aluno",
	password: "sptech",
};

const sqlServerConfig = {
	server: "SEU_SERVIDOR",
	database: "SEU_BANCO_DE_DADOS",
	user: "SEU_USUARIO",
	password: "SUA_SENHA",
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true, // for azure
	},
};

module.exports = {
	mySqlConfig,
	sqlServerConfig,
};