/** */
const ServiceModel = require('../Models/Service')
/*********************** */
exports.ajouterService = (req, res) => {
    // console.log(req.body)
    const ServiceObj = {
        "nom": req.body.nom,
        "CoutService": req.body.CoutService,
        "DescriptionService": req.body.DescriptionService,
        "lieuService": req.body.lieuService

    }
    const service = new ServiceModel(ServiceObj)
    /**insert data fi databse  */
    service.save((error, CreatedService) => {

        if (error) { return res.status(400).json({ error }) }
        if (CreatedService) {
            return res.status(200).json({ CreatedService })

        }
    })


}
exports.modifierService = (req, res) => {
    const param = req.params.idService
    const modifierObj = {
        "nom": req.body.nom,
        "CoutService": req.body.CoutService,
        "DescriptionService": req.body.DescriptionService,
        "lieuService": req.body.lieuService

    }
    ServiceModel.findByIdAndUpdate(param, modifierObj).exec((error, ServiceModifier) => {
        if (error) { return res.status(400).json({ error }) }
        if (ServiceModifier) {
            return res.status(200).json({ "message": "modifier avec succer" })
        }
    }
    )
}

/**traitement pour modifier  service  */
// res.send('  modifier')


exports.supprimerService = (req, res) => {
    const param = req.params.idService
    ServiceModel.findByIdAndDelete(param).exec((error, ServiceSupprimer) => {
        if (error) { return res.status(400).json({ error }) }
        if (ServiceSupprimer) {
            return res.status(200).json({ "message": "delet avec succées" })
        }
    }
    )

    /**traitement pour supprimer  service  */
    // res.send('  supprimer')


}
exports.listerService = (req, res) => {
    /**traitement pour lister service  */
    ServiceModel.find({}).exec((error, ServiceList) => {
        if (error) { return res.status(400).json({ error }) }
        if (ServiceList) {
            return res.status(200).json({ ServiceList })
        }
    }
    )
}
