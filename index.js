// Grab Important Elements, and Assign Variables to Them
const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('reset-button');
const form = document.baddies;
const priceField = document.getElementById('price');
let price = document.getElementById('num');
let total = document.getElementById('total');
let runningTotal = 0;

let typeOfBaddie = form.baddie;
// Create Image Element to Inject Image in Form
let baddieImage = document.createElement('img');
// Array to Hold Objects of Baddies Caught
let baddiesCaught = [];

// Set Default Image to Goomba When Form Loads
baddieImage.src = '/assets/goomba.png';
priceField.appendChild(baddieImage);

// Add Event Listener on Type Field For Changes
// Then Update Price Field Accordingly
// As Well As Injecting Image
typeOfBaddie.addEventListener('change', (e) => {

    if (e.target.value === 'goombas') {
        price.innerText = '';
        price.innerText = '5';
        baddieImage.src = '/assets/goomba.png';
    } else if (e.target.value === 'bob-ombs') {
        price.innerText = '';
        price.innerText = '7';
        baddieImage.src = '/assets/bombs.jpeg';
    } else {
        price.innerText = '';
        price.innerText = '11';
        baddieImage.src = '/assets/cheep.jpeg';
    }
    priceField.appendChild(baddieImage);
});



// Add Event Listener on Submit Button
submitButton.addEventListener('click', (e) => {
    // Prevent Page Reload
    e.preventDefault();

    // Get Price of Baddie
    // Multiply Price By Quantity Input Field Value
    // Update Total Price of Baddies Caught
    let priceOfBaddie = Number(document.getElementById('num').innerText);
    let amountCaught = form.quantity.value;
    let totalPrice = priceOfBaddie * amountCaught;
    runningTotal += totalPrice;
    console.log('tot:', runningTotal);
    total.innerText = runningTotal;

    // Add Baddie Name/Type to Object
    // Add Baddie Image to Object
    // Add Price of Baddie to Object
    // Add Amount Caught of Baddie to Object
    // Push Object to Array
});

clearButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Clear Running Total
    runningTotal = 0;

    // Reset Input Caught Field
    form.quantity.value = '';

    // Clear Total
    total.innerText = '';

    console.log('running: ', runningTotal);
})
