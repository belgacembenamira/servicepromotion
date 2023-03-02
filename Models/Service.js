const mongoose = require('mongoose');
const Promotion =require('./Promotion')

const ServiceSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    CoutService: {
        type: Number,
        required: true
    },
    DescriptionService: {
        type: String,
        required: true
    },
    lieuService: {
        type: String,
        required: true
    },
    Promotion:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Promotion'
    },
},

    );


module.exports = mongoose.model('Service', ServiceSchema)
