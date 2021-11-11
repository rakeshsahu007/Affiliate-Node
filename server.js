const express = require('express');
var path = require('path');
const affiliateRouter = require('./routes/home/affiliate');
const productRouter = require('./routes/home/products');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// view engine setup
app.set('view engine','ejs');
app.use(expressLayouts);
app.set('layout', 'shared/layouts/layout');
app.set("layout extractScripts", true);

app.use(express.static(__dirname + '/public'));


app.use('/',affiliateRouter);
app.use('/p/',productRouter);

app.listen(5001);