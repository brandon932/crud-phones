var express = require('express');
var router = express.Router();
var Phone = require('../model/phones.js');

router.get('/phones', function(req, res, next) {
    Phone.find(function(err, phone){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(phone);
        }
    });
});

router.get('/phone/:id', function(req, res, next){
    Phone.findById(req.params.id, function(err, phone){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(phone);
        }
    });
});
router.post('/phones', function(req, res, next){
    newPhone = new Phone(req.body);
    newPhone.save(function(err, phone){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(phone);
        }
    });
});
router.put('/phone/:id', function(req, res, next){
    var options = {"new":true};
    Phone.findByIdAndUpdate(req.params.id, req.body, options, function(err, phone){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(phone);
        }
    });
});

router.delete('/phone/:id', function(req, res,next){
    Phone.findByIdAndRemove(req.params.id, function(err, phone){
        if (err) {
            res.send({"message":err});
        }else{
            res.send({"message":"success"});
        }
    });
});

module.exports = router;
