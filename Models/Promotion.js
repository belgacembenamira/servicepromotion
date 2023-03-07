const mongoose = require('mongoose');

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
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true

    } 
});

module.exports = mongoose.model('Promotion', PromotionSchema);


// const mongoose = require('mongoose');
// const service = require('./Service')

// const PromotionSchema = new mongoose.Schema({
//     debut: {
//         type: String,
//         required: true
//     },
//     fin: {
//         type: String,
//         required: true
//     },
//     discount: {
//         type: Number,
//         required: true
//     },
//     desc_promotion: {
//         type: String,
//         required: true
//     },
//     _id:
//     {
        
//         type: mongoose.Schema.Types.ObjectId,
//         ref:'Service.js',

//         // ref: service.id,
//         required: true

//     }
    
// });

// module.exports = mongoose.model('Promotion', PromotionSchema);
