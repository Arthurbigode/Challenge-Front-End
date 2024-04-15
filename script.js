let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");
let mensagem = document.getElementById("mensagem");

function validarContato() {
    // NOME
    if(nome.value.length > 50) {
        alert('O nome deve conter no máximo 50 caracteres.');
    }

    // ASSUNTO
    if(assunto.value.length > 50) {
        alert('O assunto deve conter no máximo 50 caracteres.');
        
    }

}

function enviarMensagem() {
    return validarContato();
}