function questions() {
  let nome = document.getElementById("name").value;
  let idade = document.getElementById("age").value;
  let linguagem = document.getElementById("language").value;
  if (nome.length > 0 && idade.length > 0 && linguagem.length > 0) {
    document.getElementById("middle").classList.add("middle-display");
    let message = document.getElementById("show-message-title");
    message.innerHTML =
      `${nome}` +
      ", you are " +
      `${idade}` +
      " years old and you are learning " +
      `${linguagem}` +
      "!";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("language").value = "";
  } else alert("Preencha o campo corretamente 😉");
}

function Answer() {
  let resposta = document.getElementById("answer").value;
  if ((resposta != 1) & (resposta != 2)) {
    alert("Sua resposta não é válida 🤷‍♀️");
  } else if (resposta == 1) {
    document.getElementById("end").classList.add("end-display");
    YesStudy();
  } else if (resposta == 2) {
    document.getElementById("end").classList.add("end-display");
    NoStudy();
  } else "";

  document.getElementById("answer").value = "";
}

function YesStudy() {
  let messageEnd = document.getElementById("show-message-end");
  messageEnd.innerHTML = "Very good! Keep studying and you will succeed!";
}

function NoStudy() {
  let messageEnd = document.getElementById("show-message-end");
  messageEnd.innerHTML =
    "Oh, too bad... Have you tried to learn other languages?";
}
