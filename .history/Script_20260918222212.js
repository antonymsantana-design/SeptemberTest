const nomep = document.getElementById("clientName");
const nasc = document.getElementById("birthDate").value;
const cpfp = document.getElementById("clientCPF");
const emprest = document.getElementById("loanAmount").value;
const Juros = document.getElementById("interestRate").value;
const parcelas = document.getElementById("installments").value;

nomep.addEventListener("blur", function () {
  const nome = document.getElementById("clientName").value;
  if (nome.length < 5) {
    alert("AAAAAAEEEEEEEE ITS ALLRIGHT");
  }
});

cpfp.addEventListener("blur", function () {
  const cpf = document.getElementById("clientCPF").value;
  if (cpf.length != 11) {
    alert("AAAAAAEEEEEEEE ITS ALLRIGHT");
  }
});
