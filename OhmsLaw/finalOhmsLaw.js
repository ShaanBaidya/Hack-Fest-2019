const ratedPower = 20;
let storedValue = {
    voltage: [],
    current: []
};

let toCalcValues = {
    powerValue: undefined,
    resistanceValue: undefined
}

let circuit = document.createElement('div');
circuit.className = 'circuit';
box.appendChild(circuit);

let DOMStrings = {
    voltageLabel: '.voltage',
    currentLabel: '.current'
}

function carryOutCalculation() {
    let voltageValue = document.querySelector(DOMStrings.voltageLabel).value;
    let currentValue = document.querySelector(DOMStrings.currentLabel).value;
    tempData.labels.push(parseInt(voltageValue));
    tempData.datasets[0].data.push(parseInt(currentValue));
    toCalcValues.powerValue = Math.round(voltageValue * currentValue);
    if(currentValue > 0) {
        toCalcValues.resistanceValue = Math.round(voltageValue / currentValue);
    } else if(currentValue === 0)
        toCalcValues.resistanceValue = Infinity;
    changeBulb(powerStatus(toCalcValues.powerValue, ratedPower));
    document.getElementById('resistance').value = `${toCalcValues.resistanceValue}` ;
    document.getElementById('power').value = `${toCalcValues.powerValue}`;
    displayLineChart();
}

document.querySelector('.try-me-button').onclick = carryOutCalculation;
document.addEventListener('keypress', event => {
    if(event.keyCode === 13 || event.which === 13) {
        carryOutCalculation();
    }
});

function powerStatus(powerValue, ratedPower) {
    if(powerValue < 0.8 * ratedPower) {
        return 'Half';
    } else if(powerValue >= ratedPower) {
        return 'Full';
    }
}

function changeBulb(status) {
    if(status === 'Half') {
        circuit.style.backgroundImage = "url(images/OhmsLaw/finalDimBulb.png)";
    } else if(status === 'Full') {
        circuit.style.backgroundImage = "url(images/OhmsLaw/finalFullBulb.png)";
    } else {
        circuit.style.backgroundImage = "url(images/OhmsLaw/finalOffBulb.png)";
    }
}


