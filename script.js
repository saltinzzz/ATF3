
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

function swapCurrencies() {
    const currencyFrom = document.getElementById('currencyFrom');
    const currencyTo = document.getElementById('currencyTo');

    const temp = currencyFrom.innerHTML;
    currencyFrom.innerHTML = currencyTo.innerHTML;
    currencyTo.innerHTML = temp;
}
      
      //MANUEL//

        // Tasas de cambio (pueden ser actualizadas)
