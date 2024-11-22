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