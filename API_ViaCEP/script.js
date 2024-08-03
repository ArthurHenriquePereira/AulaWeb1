function validaCampos() {
    let elemento1 = document.getElementById('nome');
    let elemento2 = document.getElementById('sobrenome');
    let elemento3 = document.getElementById('email');

    if (elemento1.value.length < 3) {
        elemento1.focus();
        elemento1.style.border = '2px solid red';
    } else {
        elemento1.style.border = '2px solid green';
    }
    if (elemento2.value.length < 3) {
        elemento2.focus();
        elemento2.style.border = '2px solid red';
    } else {
        elemento2.style.border = '2px solid green';
    }
    if (
        elemento3.value.length < 3 ||
        elemento3.value.indexOf('@') == -1 ||
        elemento3.value.indexOf('.com') == -1
    ) {
        elemento3.focus();
        elemento3.style.border = '2px solid red';
    } else {
        elemento3.style.border = '2px solid green';
    }
}

function mascara(tipoCampo, valorCampo, formatoMascara) {
    let posicao = valorCampo.length;
    let saida = formatoMascara.substring(1, 0);
    let texto = formatoMascara.substring(posicao);
    if (texto.substring(0, 1) !== saida) {
        if (tipoCampo == 0 && valorCampo.length < 13) { //Telefone
            document.getElementById('telefone').value += texto.substring(0, 1);
        }
        if (tipoCampo == 1 && valorCampo.length < 9) { //CEP
            document.getElementById('cep').value += texto.substring(0, 1);
        }
    }
    if (tipoCampo == 0 && valorCampo.length >= 13) {
        document.getElementById('telefone').value = valorCampo.substring(0, (valorCampo.length - 1));
    }
    if (tipoCampo == 1 && valorCampo.length >= 9) {
        document.getElementById('cep').value = valorCampo.substring(0, (valorCampo.length - 1));
    }
}

function buscaEndereco(cep) {
    if(cep.length == 9){
        var cepSplit =  cep.split('-');
        var cepFormatado = '';
        for (var i = 0; i < cepSplit.length; i++){
            cepFormatado += cepSplit[i];
        }
        const url = `https://viacep.com.br/ws/${cepFormatado}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById("estado").value = data.uf;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("rua").value = data.logradouro;
            })
            .catch(error => console.error(error));
    }else{
        document.getElementById("estado").value = '';
        document.getElementById("cidade").value = '';
        document.getElementById("bairro").value = '';
        document.getElementById("rua").value = '';
    }
}