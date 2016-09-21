// link to the thwe accounting npm package we just installes
var accounting = require('accounting');

// set the numeric values
var subTotal = 9.99;

//format the subtotal
subTotal  = accounting.formatMoney(subTotal);
console.log(subTotal);
