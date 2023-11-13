/** 
    @typedef {Object} FuncionarioData
    @property {string} email
    @property {string} senha
*/

/**
 * @param {FuncionarioData} data
 */
function GetHtmlText(data) {
  return {
    from: "stephany.justino@sptech.school",
    to: data.email,
    subject: "Você foi convocado para Stocksafe",
    text: `
    Seja bem - vindo.
    http://localhost:3333/dashboard/testeFormColaborador.html
     `,
    html: `
    <!DOCTYPE html>
      <html lang="pt-br">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Seja bem - vindo</title>
      </head>
      <body>
        <h1>Para acessar</h1>
        <p>É um prazer ter você conosco! Seja bem-vindo à nossa comunidade.</p>
        <p>Para aproveitar ao máximo sua experiência, pedimos que complete seu cadastro clicando no link abaixo:</p>
        <a href="http://localhost:3333/dashboard/testeFormColaborador.html">Complete Seu Cadastro</a>
    
        <p>Estamos ansiosos para tê-lo totalmente integrado à nossa plataforma. Se precisar de assistência ou tiver alguma dúvida,
          não hesite em entrar em contato conosco.</p>
    
        <p>Obrigado por fazer parte da nossa comunidade!</p>
        <p>Email de login: ${data.email}</p>
        <p>Senha: ${data.senha}</p>
    
        <p>Atenciosamente,</p>
        <p>Stocksafe<p>
      </body>
    </html>
    `,
  };
}

module.exports = { GetHtmlText };