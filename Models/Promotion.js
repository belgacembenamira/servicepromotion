const mongoose = require('mongoose');
const service = require('./Service')

const PromotionSchema = new mongoose.Schema({
    debut: {
        type: String,
        required: true
    },
    fin: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    desc_promotion: {
        type: String,
        required: true
    },
    _id:
    {
        
        type: mongoose.Schema.Types.ObjectId,
        ref:'Service',

        // ref: service.id,
        required: true

    }
    
});

module.exports = mongoose.model('Promotion', PromotionSchema);
