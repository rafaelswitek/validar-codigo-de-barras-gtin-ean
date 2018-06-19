$(document).ready(function() {
    $("#codigo_barras").change(function() { //Quando o campo codigo_barras e alterado.
        var codigo_barras = $(this).val(); //Nova variável "codigo_barras" somente com dígitos.
        var tamanho = codigo_barras.length; //Define o tamanho do codigo de barras
        var array = codigo_barras.split(""); //Separa os numeros em um array
        var par = 0;
        var impar = 0;

        for (var i = 0; i < tamanho - 1; i++) {
            var resto = i % 2;
            if (resto == 0) {
                par = par + (parseInt(array[i]) * 1);
            } else {
                impar = impar + (parseInt(array[i]) * 3);
            }
        }
        soma = par + impar;
        multiplo10 = Math.ceil(soma / 10) * 10; //Define o proximo multiplo de 10
        total = multiplo10 - soma; //Enontra o digito verificador
        if (total == array[tamanho - 1]) { //Verifica se o digito verificador e igual ao ultimo digito
            alert("Código Válido");
        } else {
            alert("Código Inválido");
        }
    });
});