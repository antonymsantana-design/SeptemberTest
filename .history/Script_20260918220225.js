const nomep = document.getElementById('clientName');

nomep.addEventListener('blur', function () {

    const nome = nomep.value;

    if (nome.length < 5) {
        alert('O nome deve ter no mínimo 5 caracteres.');
    }

});