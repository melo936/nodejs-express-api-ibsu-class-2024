var express = require('express');
var router = express.Router();
var StudentService = require('../services/studentService');


router.get('/all', (req, res) => {
    return StudentService.findAll(req, res);
});

router.get('/:id', (req, res) => {
    return StudentService.getOne(req, res);
});

router.post('/add', (req, res) => {
    return StudentService.addStudent(req, res);
});

module.exports = router;