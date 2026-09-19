const nomep = document.getElementById("clientName");
const nascp = document.getElementById("birthDate");
const cpf = document.getElementById("clientCPF").value;
const emprest = document.getElementById("loanAmount").value;
const Juros = document.getElementById("interestRate").value;
const parcelas = document.getElementById("installments").value;

nomep.addEventListener("blur", function () {
  const nome = document.getElementById("clientName").value;
  if (nome.length < 5) {
    alert("AAAAAAEEEEEEEE ITS ALLRIGHT");
  }
});