//link to connect to start our Server
var connect = require('connect');
// link to the thwe accounting npm package we just installes
var accounting = require('accounting');

// create a new connect application objects
var app = connect();

/* create a callback function
function accepts amount from url query string
calculate tax and total
display all 3 values as currencey
*/

var calculate = function(req, res,next){
  //get subtotal from wuery string e.g subtotal = 100
  var qs = url.parse(req.url,true).query;
  var subtotal = qs.subtotal;

  //calculate tax in total
  var tax  = subTotal * 0.13;
  var total = subTotal+ tax;

  //disply all values as currency
  res.end('Subtotal: ' + subTotal + '\n'
                       + "Tax : "+ tax+ '\n'
                     +'Total: '+ total);
};


app.listen(3000);
