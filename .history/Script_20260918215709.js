const nome = document.getElementById('clientName').value;
const nomep = document.getElementById('clientName');
const nasc = document.getElementById('birthDate').value;
const cpf = document.getElementById('clientCPF').value;
const emprest = document.getElementById('loanAmount').value;
const Juros = document.getElementById('interestRate').Value;
const parcelas = document.getElementById('installments').Value;

if (nome.length < 5) {
    nomep.addEventListener('mouseleave', function(){
        alert('AAAAAAEEEEEEEE ITS ALLRIGHT')
    })
}