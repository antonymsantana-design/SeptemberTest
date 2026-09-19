const nome = document.getElementById('clientName').value;
const nomep = document.getElementById('clientName');
const nasc = document.getElementById('birthDate').value;
const cpf = document.getElementById('clientCPF').value;
const emprest = document.getElementById('loanAmount').value;
const Juros = document.getElementById('interestRate').value;
const parcelas = document.getElementById('installments').value;


    nomep.addEventListener('blur', function(){
        if (nome.length < 5) {
            alert('AAAAAAEEEEEEEE ITS ALLRIGHT')
        }
    })
