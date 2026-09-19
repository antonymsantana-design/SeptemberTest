const nomep = document.getElementById("clientName");
const nascp = document.getElementById("birthDate");
const cpfp = document.getElementById("clientCPF");
const emprestp = document.getElementById("loanAmount");
const Jurosp = document.getElementById("interestRate");
const parcelas = document.getElementById("installments").value;
const inputs = document.querySelectorAll("input");

let tent = 0

nomep.addEventListener("blur", function () {
  const nome = document.getElementById("clientName").value;
  if (nome.length < 5) {
    alert("AAAAAAEEEEEEEE ITS ALLRIGHT");
    tent++
  }
});

cpfp.addEventListener("blur", function () {
  const cpf = document.getElementById("clientCPF").value;
  if (cpf.length != 11) {
    alert("AAAAAAEEEEEEEE ITS ALLRIGHT");
    tent++
  }
});

nascp.addEventListener("blur", function () {
  const nasc = document.getElementById("birthDate").value;
  const Cdata = new Date(nasc);
  const Adata = new Date();
  if(Cdata > Adata){
    idade.innerHTML = (`Data de Nascimento: Você nem nasceu`);
    tent++
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
        tent++
    }
});

Jurosp.addEventListener("blur", function(){
    const Juros = document.getElementById("interestRate").value;
    if(Juros <= 0){
        alert("zero juros?")
        tent++
    }
})

if(tent = 3){
    inputs.disabled = true;
}