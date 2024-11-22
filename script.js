

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
function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
}
//SCRIPT DE CONVERSION DE DOLARES A OTRAS MONEDAS
function convertirMoneda() {
            const cantidad = parseFloat(document.getElementById('cantidad').value);
            const tasaInicial = parseFloat(document.getElementById('monedaInicial').value);
            const tasaFinal = parseFloat(document.getElementById('monedaFinal').value);
            const result = document.getElementById('resultado');

            if (isNaN(cantidad) || cantidad <= 0) {
                result.textContent = "Por favor, ingresa una cantidad válida.";
                return;
            }
            if (tasaInicial === tasaFinal)  {
                result.textContent = "Selecciona monedas diferentes para realizar la conversión."
                return;
            }

            const conversion = ((cantidad / tasaInicial) * tasaFinal).toFixed(2);

            const nombremonedaInicial = document.getElementById('monedaInicial').options[document.getElementById('monedaInicial').selectedIndex].text;

            const nombremonedaFinal = document.getElementById('monedaFinal').options[document.getElementById('monedaFinal').selectedIndex].text;

            result.textContent = `Conversión: ${cantidad} ${nombremonedaInicial} equivale a ${conversion} ${nombremonedaFinal}`;
        
        }
        //MANUEL//


function swapCurrencies() {
    const currencyFrom = document.getElementById('currencyFrom');
    const currencyTo = document.getElementById('currencyTo');

    const temp = currencyFrom.innerHTML;
    currencyFrom.innerHTML = currencyTo.innerHTML;
    currencyTo.innerHTML = temp;
}
      
      //MANUEL//4E

        // Tasas de cambio (pueden ser actualizadas)
