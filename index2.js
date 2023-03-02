// const express = require('express')
// const app = express()
// const port = 3001
// app.use(express.json())
// const mongoose = require('mongoose')
// const PromotionRoute = require('./Routes/ServiceRoute')


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.use('/promotion', PromotionRoute)
// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true

// })
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'))
// db.once('open', function () {
//     console.log(" Database connection succufiliy")
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

// const express = require('express')
// const app = express()
// const port = 3000
// app.use(express.json())
// const mongoose = require('mongoose');
// const ServiceModel = require('./Models/Service')
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// /**ajouter service  */
// app.post('/service/ajouter', (req, res) => {
//     // console.log(req.body)
//     const ServiceObj = {
//         "nom": req.body.nom,
//         "CoutService": req.body.CoutService,
//         "DescriptionService": req.body.DescriptionService,
//         "lieuService": req.body.lieuService

//     }
//     const service = new ServiceModel(ServiceObj)
//     /**insert data fi databse  */
//     service.save((error, CreatedService) => {

//         if (error) { return res.status(400).json({ error }) }
//         if (CreatedService) {
//             return res.status(200).json({ CreatedService })

//         }
//     })
//     //res.status(200).json({ message: 'donnée ajouter' })


// })
// /**modifier service  */
// app.post('/service/:idService/modifier', (req, res) => {
//     const param = req.params.idService
//     const modifierObj = {
//         "nom": req.body.nom,
//         "CoutService": req.body.CoutService,
//         "DescriptionService": req.body.DescriptionService,
//         "lieuService": req.body.lieuService

//     }
//     ServiceModel.findByIdAndUpdate(param, modifierObj).exec((error, ServiceModifier) => {
//         if (error) { return res.status(400).json({ error }) }
//         if (ServiceModifier) {
//             return res.status(200).json({ "message": "modifier avec succer" })
//         }
//     }
//     )

//     /**traitement pour modifier  service  */
//     // res.send('  modifier')


// })
// /**traitement pour supprimer service  */
// app.get('/service/:idService/supprimer', (req, res) => {
//     const param = req.params.idService
//     ServiceModel.findByIdAndDelete(param).exec((error, ServiceSupprimer) => {
//         if (error) { return res.status(400).json({ error }) }
//         if (ServiceSupprimer) {
//             return res.status(200).json({ "message": "delet avec succées" })
//         }
//     }
//     )

//     /**traitement pour supprimer  service  */
//     // res.send('  supprimer')


// })
// app.get('/service/lister', (req, res) => {
//     /**traitement pour lister service  */
//     ServiceModel.find({}).exec((error, ServiceList) => {
//         if (error) { return res.status(400).json({ error }) }
//         if (ServiceList) {
//             return res.status(200).json({ ServiceList })
//         }
//     }
//     )


// })
// mongoose.connect('mongodb://localhost:27017/merncourse', {
//     useNewUrlParser: true

// })
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'))
// db.once('open', function () {
//     console.log(" Database connection succufiliy")
// })
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })