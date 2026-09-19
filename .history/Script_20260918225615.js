const nomep = document.getElementById("clientName");
const nascp = document.getElementById("birthDate");
const cpfp = document.getElementById("clientCPF");
const emprest = document.getElementById("loanAmount").value;
const Juros = document.getElementById("interestRate").value;
const parcelas = document.getElementById("installments").value;

nomep.addEventListener("blur", function () {
  const nome = document.getElementById("clientName").value;
  if (nome.length < 5) {
    alert("AAAAAAEEEEEEEE ITS ALLRIGHT");
    alert(nasc);
  }
});

cpfp.addEventListener("blur", function () {
  const cpf = document.getElementById("clientCPF").value;
  if (cpf.length != 11) {
    alert("AAAAAAEEEEEEEE ITS ALLRIGHT");
  }
});

nascp.addEventListener("blur", function () {
  const nasc = document.getElementById("birthDate").value;
  const Cdata = new Date(nasc);
  
  const Adata = new Date();
  const data_farc = Adata - Cdata;
  const anos = (((((data_farc / 1000) / 60) / 60) / 24) / 365);
  const idade = document.getElementById("idade");
  idade.innerHTML = (`Data de Nascimento: ${(anos).toFixed(1)}(anos)`);
});
