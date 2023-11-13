const { Database } = require("./database");

function executar(instrucao) {
	console.log(`Executando a instrução SQL: \n ${instrucao}`);

	const database = new Database();

	return database.executar(instrucao);
}

module.exports = {
	executar,
};
