const nodemailer = require("nodemailer");

class Mail {
  /**
   * Envia um email com base em um template
   * @constructor
   * @param {string} service - outlook
   * @param {string} htmlText - o conteúdo do email
   */
  static sendEmail(service, htmlText) {
    const transporter = nodemailer.createTransport({
      service,
      auth: {
        user: "stephany.justino@sptech.school",
        pass: "#Gf4902237",
      },
    });

    transporter.sendMail(htmlText, function (error, info) {
      if (error) {
        console.log("Deu algo de errado! 🤦🏽‍♂️: " + error);
      } else {
        console.log("Email foi enviado com sucesso! > " + info?.response);
      }
    });
  }
}

module.exports = { Mail };