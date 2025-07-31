function multiplicar(){

    let primeiro_numero = parseInt(document.getElementById('primeiro_numero').value);
    let segundo_numero = parseInt(document.getElementById('segundo_numero').value);
    let terceiro_numero = parseInt(document.getElementById('terceiro_numero').value);

    let segundo_numerop = segundo_numero / 100;
    let primeiro_numerop = primeiro_numero * segundo_numerop * terceiro_numero ;

    document.getElementById('resultado').textContent = 'resultado: ' + primeiro_numerop;

}