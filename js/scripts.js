//welcome message
var user = 'Valued Customer';
var salutation = 'Welcome, ';
var greeting = salutation + user + '! The New PILOT FriXion Clicker Erasable, Refillable & Retractable Gel Ink Pens.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 10,
        customerDiscount = .20,
        customerPrice = price - (price * customerDiscount),
        priceEl = document.getElementById('price'),
        customerPriceEl = document.getElementById('customer-price');

        priceEl.textContent = price.toFixed(2);
        customerPriceEl.textContent = customerPrice.toFixed(2);



//Basic JS Date 
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
        greeting = 'Good evening!';
} else if (hourNow > 12) {
        greeting = 'Good afternoon!';
} else if (hourNow > 0) {
        greeting = 'Good morning!';
} else {
        greeting = 'Welcome!';
}

document.write('<h3>'+ greeting + '</h3>');






