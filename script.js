document.addEventListener('DOMContentLoaded', function () {
    const codigoInput = document.querySelector('#codigo_barras');

    if (!codigoInput) {
        return;
    }

    codigoInput.addEventListener('change', function () {
        const codigo = codigoInput.value;

        if (!codigo || isNaN(codigo)) {
            alert('Por favor, insira um código de barras válido.');
            return;
        }

        const num = codigo.padStart(18, '0');
        const dv = parseInt(num[17]);
        const numWithoutDV = num.slice(0, 17);

        let sum = 0;
        for (let i = 0, factor = 3; i < 17; i++, factor = 4 - factor) {
            sum += factor * parseInt(numWithoutDV[i]);
        }

        const mmc = Math.ceil(sum / 10) * 10;
        const mod = mmc - sum;

        if (dv !== mod) {
            alert('O código de barras digitado não é válido. Por favor, verifique os dados informados.');
        } else {
            alert(`O código de barras "${codigo}" é válido.`);
        }
    });
});
