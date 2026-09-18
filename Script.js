const nome = document.getElementById('clientName').Value;
const nomep = document.getElementById('clientName');
const nasc = document.getElementById('birthDate').Value;
const cpf = document.getElementById('clientCPF').Value;
const emprest = document.getElementById('loanAmount').Value;
const Juros = document.getElementById('interestRate').Value;
const parcelas = document.getElementById('installments').Value;

if (nome.length > 5) {
    nomep.addEventListener('mouseleave', function(){
        alert('AAAAAAEEEEEEEE ITS ALLRIGHT')
    })
}