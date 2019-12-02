document.querySelector('.click-me-button-0').addEventListener('click', calculateSpeed);
document.addEventListener('keypress', event => {
    if(event.keyCode === 13 || event.which === 13)
        calculateSpeed();
});

function calculateSpeed() {
    let distanceValue = document.querySelector('.distance').value;
    let timeValue = document.querySelector('.time').value;
    let speedValue = Math.floor(distanceValue / timeValue);
    document.querySelector('.speed').value = `${speedValue}`;
}

document.querySelector('.click-me-button-1').addEventListener('click', calculateForce);
document.addEventListener('keypress', event => {
    if(event.keyCode === 13 || event.which === 13)
        calculateForce();
});

function calculateForce() {
    let massValue = document.querySelector('.mass').value;
    let accValue = document.querySelector('.acceleration').value;
    let forceValue = Math.floor(massValue * accValue);
    document.querySelector('.force').value = `${forceValue}`;
}