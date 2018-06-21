$(document).ready(function() {
    /**
     * valida o codigo de barras do produto (EAN/GTIN)
     */
    $('body').on('change', '#codigo-barras', function() {
        // pega o codigo de barras (EAN/GTIN)
        let codigo = this.value || '';

        // verifica se o código existe e é um número
        if (codigo.length > 0 && !isNaN(codigo)) {                   	
            // completa o GTIN com 18 chars
            let num = codigo.padStart(18, 0);
            // pega o dígito verificador
            let dv = parseInt(num.charAt(17));
            // pega o código de barras excluíndo o dígito verificador
            num = num.substring(0, 17);

            // realiza o calculo do dígito verificador
            let sum = 0;
            num.split('').forEach(function(value) {
                // faz a soma dos digitos do código
              sum += (factor * value);
              // atualiza o fator de multiplicacao
                factor = factor == 3 ? 1 : 3;
            }, factor = 3);

            // realiza o calculo do dígito verificador
            let mmc = (Math.ceil(sum / 10)) * 10;
            mod = parseInt(mmc - sum);

            // valida se o dígito verificador informado
            // é igual ao dígito verificador calculado
            if (dv != mod) {
                alert('O código de barras digitado não é válído. Por favor, verique os dados informados.');
            }
        }
    });
});
