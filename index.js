// Grab Important Elements, and Assign Variables to Them
const submitButton = document.getElementById('submit-button');
const form = document.baddies;
const priceField = document.getElementById('price');
let price = document.getElementById('num');
let typeOfBaddie = form.baddie;
 // Create Image Element to Inject Image in Form
let baddieImage = document.createElement('img');

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
submitButton.addEventListener('submit', (e) => {
    // Prevent Page Reload
    e.preventDefault();

    // Get Price of Baddie
    // Multiply Price By Quantity Input Field Value
    // Update Total Price of Baddies Caught
})
