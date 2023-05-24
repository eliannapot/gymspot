const express = require('express'); // import express
const app = express(); // create express app
const expbs = require('express-handlebars'); // import express-handlebars
const path = require('path'); // import path

const routes = require('./routes/handlers'); // import router 

app.engine('handlebars', expbs.engine({ 
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    extname: '.handlebars' 
})); // set handlebars as view engine

app.set('view engine', 'handlebars');

app.use(express.static('public')); // serve static files
app.use('/', routes);


app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});