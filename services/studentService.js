const StudentModel = require('../models/student');

module.exports = {
    findAll: (req, res) => {
        StudentModel.find({})
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.status(400).json(error);
            })
    },
    addStudent: async (req, res) => {
        try {
            const savedItem = await new StudentModel(req.body).save();
            res.json(savedItem);
        } catch(error) {
            res.status(400).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const student = await StudentModel.findById(req.params.id);
            res.json(student);
        }  catch(error) {
            res.status(400).json(error);
        }
    }
}