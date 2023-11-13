const database = require("../database/config");
const nodemailer = require("nodemailer");

export class FunctionarioRepository {
	async listarFuncionario() {
		const instrucao = `SELECT nome, email, senha, funcao, DATE_FORMAT(data_nascimento, '%d/%m/%Y') as dtNasc FROM tb_funcionario`;

		return await database.executar(instrucao);
	}
}
