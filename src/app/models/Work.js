const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Work = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    time: { type: String },
    level: { type: String, maxLength: 50 },
}, {
    timestamps: true
});

module.exports = mongoose.model('Work', Work);
