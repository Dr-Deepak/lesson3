//link to connect to start our Server
var connect = require('connect');
// create a new connect application objects
var app = connect();
// setup a default response to GET
var  helloWorld = function(req,res, next){
  res.end('Hello world. It is lesson 3');
};

var  goodbyeWorld = function(req,res, next){
  res.end('GoodBye');
};

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
//Default function
var  everythingElse = function(req,res, next){
  res.end('All other requests');
};
// route requests to /hello helloWorld
app.use('/hello',helloWorld);
//route requests to /goodbye helloworld
app.use('/goodbye',goodbyeWorld);

// calculate tax
app.use('/tax', calculate);
//DEFAULT route : routes all other requests to Everythingelse
// should be last or it will override all other requests
app.use('/',everythingElse);
//listen for events on port 3000
app.listen(3000);
// print notice server is running
console.log('Server running on port 3000');
