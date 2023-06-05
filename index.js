const venom = require("venom-bot");

venom.create().then((client) => start(client));

async function start(client) {

  client.onMessage((message) => {
    if (message.body === "Oi" || message.body === "Olá") {
      client
        .sendText(message.from, "Olá! Tudo bem com você?")
        .then((result) => {
          console.log("Result: ", result);
          console.log("Audio message sent successfully!");
        })
        .catch((erro) => {
          console.error("Erro ao enviar mensagem: ", erro); // returns an error object
        });
      client
        .sendVoice(message.from, "./assets/audio.mp3")
        .then((result) => {
          console.log("Result: ", result);
          console.log("Audio message sent successfully!");
        })
        .catch((erro) => {
          console.error("Erro ao enviar mensagem: ", erro); // returns an error object
        });
    }
    if (message.body === "Oi seu pai tem boi" || message.body === "Oi seu pai tem boi") {
      client
      .sendText(message.from, "Tem vaca seu babaca")
      .then((result) => {
        console.log("Result: ", result);
        console.log("Audio message sent successfully!");
      })
      .catch((erro) => {
        console.error("Erro ao enviar mensagem: ", erro); // returns an error object
      });
    }
  });
}
