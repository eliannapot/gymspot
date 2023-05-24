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

// //Routing
// app.get('/', (req, res) => {
//     res.render('index', { title: 'Home', javascript: 'home.js' });
// });

// app.get('/services', (req, res) => {
//     res.render('services', { title: 'Services', javascript: 'services.js' });
// });

// app.get('/programs', (req, res) => {
//     res.render('programs', { title: 'Programs', javascript: 'programs.js' });
// });

// app.get('/admin', (req, res) => {
//     res.render('admin', { title: 'Admin', javascript: 'admin.js' });
// });

// app.get('*', (req, res) => {
//     res.json('Page not found');
// });

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});