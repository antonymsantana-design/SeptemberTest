const nomep = document.getElementById("clientName");
const nascp = document.getElementById("birthDate");
const cpfp = document.getElementById("clientCPF");
const emprestp = document.getElementById("loanAmount");
const Jurosp = document.getElementById("interestRate");
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

nascp.addEventListener("blur", function () {
  const nasc = document.getElementById("birthDate").value;
  const Cdata = new Date(nasc);
  const Adata = new Date();
  if(Cdata > Adata){
    idade.innerHTML = (`Data de Nascimento: Você nem nasceu`);
  }else{
  const data_farc = Adata - Cdata;
  const anos = (((((data_farc / 1000) / 60) / 60) / 24) / 365);
  const idade = document.getElementById("idade");
  idade.innerHTML = (`Data de Nascimento: ${(anos).toFixed(1)}(anos)`);
  }
});

emprestp.addEventListener("blur", function (){
    const emprest = document.getElementById("loanAmount").value;
    if(emprest <= 0){
        alert("emprestar zero?")
    }
});

Jurosp.addEventListener("blur")