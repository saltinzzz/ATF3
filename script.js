//SCRIPT DE CONVERSION DE DOLARES A OTRAS MONEDAS
function convertCurrency() {
            const amount = parseFloat(document.getElementById('amount').value);
            const rate = parseFloat(document.getElementById('currency').value);
            const resultElement = document.getElementById('result');

            if (isNaN(amount) || amount <= 0) {
                resultElement.textContent = "Por favor, ingresa una cantidad válida.";
                return;
            }

            const converted = (amount * rate).toFixed(2);
            const currencyName = document.getElementById('currency').options[document.getElementById('currency').selectedIndex].text;

            resultElement.textContent = `Resultado: ${converted} ${currencyName}`;
        
        }
        //MANUEL//


