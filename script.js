function Temperature_Convert() {
    let inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    let inputScale = document.getElementById('inputScale').value;
    let convertScale = document.getElementById('convertScale').value;
    let convertedTempResult = document.getElementById('convertedTempResult');
    let convertedTemp = '';

    console.log(inputTemperature)
    if (inputTemperature == NaN) {
        return convertedTempResult.textContent = `Please Enter the temperature`
    } 

    if (inputScale === 'C' && convertScale === 'F') {
        convertedTemp = ((inputTemperature * 9 / 5) + 32).toFixed(1);
    } 

    else if (inputScale === 'F' && convertScale === 'C') {
        convertedTemp = ((inputTemperature - 32) * 5 / 9).toFixed(1);
    } 
    
    else if (inputScale === 'C' && convertScale === 'C') {
        convertedTemp = inputTemperature.toFixed(1);
    } 
    
    else if (inputScale === 'F' && convertScale === 'F') {
        convertedTemp = inputTemperature.toFixed(1);
    }
    convertedTempResult.textContent = `Converted Temperature is: ${convertedTemp}`
}

function resetFields() {
    document.getElementById('inputTemperature').value = '';
    document.getElementById('inputScale').selectedIndex = 0;
    document.getElementById('convertScale').selectedIndex = 0;
    document.getElementById('convertedTempResult').textContent = '';
}