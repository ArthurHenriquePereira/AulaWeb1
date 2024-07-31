function validaCampos(){
    let elemento1 = document.getElementById('nome');
    let elemento2 = document.getElementById('sobrenome');
    let elemento3 = document.getElementById('email');

    if (elemento1.value.length < 3){
        elemento1.focus();
        elemento1.style.border = '2px solid red';
    }else{
        elemento1.style.border = '2px solid green';
    }
    if (elemento2.value.length < 3){
        elemento2.focus();
        elemento2.style.border = '2px solid red';
    }else{
        elemento2.style.border = '2px solid green';
    }
    if (
        elemento3.value.length < 3            ||
        elemento3.value.indexOf('@')    == -1 ||
        elemento3.value.indexOf('.com') == -1
    ){
        elemento3.focus();
        elemento3.style.border = '2px solid red';
    }else{
        elemento3.style.border = '2px solid green';
    }
}

function mascaraTelefone(valueTelefone, formatoMascara){
    let posicao = valueTelefone.length;
    let saida = formatoMascara.substring(1,0);
    let texto = formatoMascara.substring(posicao);
    if(texto.substring(0,1) !== saida && valueTelefone.length < 13){
        document.getElementById('telefone').value += texto.substring(0,1);
    }
}