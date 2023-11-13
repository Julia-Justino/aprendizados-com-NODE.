const database = require("../database/config");
const { Mail } = require("../infra/mail/mail");
const { GetHtmlText } = require("../infra/mail/templates/bemVindoFuncionario");

class FuncionarioRepository {
  async listarFuncionario() {
    const instrucao = `
    SELECT nome, email, senha, funcao, DATE_FORMAT(data_nascimento, '%d/%m/%Y') as dtNasc
	  FROM tb_funcionario`;

    return await database.executar(instrucao);
  }

  /**
   * @param {string} id
   */
  async selecionarFuncionario(id) {
    const instrucao = `
    SELECT nome, email, senha, funcao, DATE_FORMAT(data_nascimento, '%d/%m/%Y') as dtNasc
	  FROM tb_funcionario
    WHERE id_funcionario = '${id}'`;

    return await database.executar(instrucao);
  }

  /**
   * @param {string} email
   * @param {string} senha
   */
  async autenticar(email, senha) {
    const instrucao = `
    SELECT *
    FROM tb_funcionario
    WHERE email = '${email}' AND senha = '${senha}'`;

    return await database.executar(instrucao);
  }

  /**
   * @param {string} nome
   * @param {string} funcao
   * @param {string} dataNasc
   * @param {string} email
   * @param {string} senha
   */
  async cadastrar(nome, funcao, dataNasc, email, senha) {
    const instrucao = `
    INSERT INTO tb_funcionario
    VALUES (null,'${nome}','${funcao}','${dataNasc}',null,'${email}','${senha}')`;

    return await database.executar(instrucao);
  }

  /**
   * @param {string} imagem
   * @param {string} idUsuario
   */
  async enviarFoto(imagem, idUsuario) {
    const instrucao = `
         UPDATE funcionario SET foto = '${imagem}'
         WHERE idFuncionario = ${idUsuario};`;

    return await database.executar(instrucao);
  }

  /**
   * @param {string} id
   * @param {string} nome
   * @param {string} funcao
   * @param {string} data
   * @param {string} email
   */
  async alterar(id, nome, funcao, data, email) {
    const instrucao = `
		UPDATE tb_funcionario SET nome = '${nome}', funcao = '${funcao}', data_nascimento = '${data}',
  	email = '${email}'
  	WHERE id_funcionario = ${id};`;

    return await database.executar(instrucao);
  }

  /**
   * @param {string} senha
   * @param {string} idUsuario
   */
  async alterarSenha(senha, idUsuario) {
    const instrucao = `
	  UPDATE usuario SET senha = '${senha}'
 	 WHERE idUsuario = ${idUsuario};`;

    return await database.executar(instrucao);
  }

  /**
   * @param {string} email
   * @param {string} funcao
   */
  async enviarEmail(email, funcao) {
    const senha = Math.floor(Math.random() * 1000000);

    const instrucao = `
    INSERT INTO tb_funcionario(email, funcao, senha)
    VALUES ('${email}','${funcao}', '${senha}')`;

    const result = await database.executar(instrucao);

    Mail.sendEmail("outlook", GetHtmlText({ email, senha }));

    return result;
  }

  /**
   * @param {string} id
   * @param {string} nome
   * @param {string} dataNascimento
   * @param {string} senha
   */
  async terminarCadastro(id, nome, dataNascimeto, senha) {
    const instrucao = `
  UPDATE tb_funcionario SET nome = '${nome}', data_nascimento = '${dataNascimeto}',
  senha = '${senha}'
  WHERE id_funcionario = ${id};`;

    return await database.executar(instrucao);
  }

  async solicitacoesFuncionarios() {
    const instrucao = `SELECT * FROM tb_funcionario WHERE nome IS NULL;`;

    return await database.executar(instrucao);
  }

  /**
   * @param {string} id
   */
  async deletarSolicitacoes(id) {
    const instrucao = `
  DELETE FROM tb_funcionario WHERE id_funcionario = ${id};
  `;

    return database.executar(instrucao);
  }
}

module.exports = { FuncionarioRepository };
