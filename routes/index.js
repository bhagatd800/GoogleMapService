var express = require('express');
var router = express.Router();
var Student = require('../model/students');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/student', function(req, res, next) {
  res.render('student');
});
router.get('/teacher', function(req, res, next) {
  res.render('teacher');
});

router.post('/submit_data', function (req, res) {
    Student.submitData(req.body, function (err, user) {
        if (err) {
            res.json({ "errorcode": 0 })
        }
        else {
            res.json({ "errorcode": 1 })
        }

    });

});



router.post('/get_location', function(req, res) {

    console.log(req.body);

     Student.getLocationData(req.body, function (err, user) {
        if (err) {
            res.json({ "errorcode": 0 });
        }
        else {
            
            res.json(user)
        }

    });



  //});



  

});


module.exports = router;
