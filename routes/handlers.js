const express = require('express');
const path = require('path');
const router = express.Router();

const gymController = require(`../controller/gym-controller.js`);

//Functions


// router.post('/programs/addUserToProgram', gymController.addUserToProgram);

//Routing
router.get('/', function(req, res){
    res.render('index', { title: 'Home', javascript: 'home.js' });
});

router.get('/services', function(req, res){
    res.render('services', { title: 'Services', javascript: 'services.js' });
});

router.get('/programs', gymController.getAllPrograms);
// render is happening in controller!
// router.get('/programs', function(req, res){
//     res.render('programs', { title: 'Programs', javascript: 'programs.js' });
// });

router.get('/admin', function(req, res){
    res.render('admin', { title: 'Admin', javascript: 'admin.js' });
});

router.get('*', function(req, res){
    res.json('Page not found');
});




//
module.exports = router;
