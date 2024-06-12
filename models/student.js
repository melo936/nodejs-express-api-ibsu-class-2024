const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date },
    gpa: { type: Number },
    studentCode: { type: String, required: true, unique: true },
    subjects: [{
        code: { type: String },
        name: { type: String }
    }]
}, {
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        wtimeoutMS: 30000,
        j: true
    }
});

const Model = mongoose.model('Student', studentSchema);
module.exports = Model;