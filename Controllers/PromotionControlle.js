/** */
const PromotionModel = require('../Models/Promotion')
/*********************** */
exports.ajouterPromotion = (req, res) => {
    // console.log(req.body)
    const PromotionObj = {
        // "nom": req.body.nom,
        "debut": req.body.debut,
        "fin": req.body.fin,
        "discount": req.body.discount,
        "desc_promotion": req.body.desc_promotion,
        "_id": req.body._id

    }
    const Promotion = new PromotionModel(PromotionObj)
    /**insert data fi databse  */
    Promotion.save((error, CreatedPromotion) => {

        if (error) { return res.status(400).json({ error }) }
        if (CreatedPromotion) {
            return res.status(200).json({ CreatedPromotion })

        }
    })


}
exports.modifierPromotion = (req, res) => {
    const param = req.params.idPromotion
    const modifierObj = {
        // "nom": req.body.nom,
        "debut": req.body.debut,
        "fin": req.body.fin,
        "discount": req.body.discount,
        "desc_promotion": req.body.desc_promotion,
        "_id": req.body._id

    }
    PromotionModel.findByIdAndUpdate(param, modifierObj).exec((error, PromotionModifier) => {
        if (error) { return res.status(400).json({ error }) }
        if (PromotionModifier) {
            return res.status(200).json({ "message": "modifier avec succer" })
        }
    }
    )
}

/**traitement pour modifier  Promotion  */
// res.send('  modifier')


exports.supprimerPromotion = (req, res) => {
    const param = req.params.idPromotion
    PromotionModel.findByIdAndDelete(param).exec((error, PromotionSupprimer) => {
        if (error) { return res.status(400).json({ error }) }
        if (PromotionSupprimer) {
            return res.status(200).json({ "message": "delet avec succées" })
        }
    }
    )

    /**traitement pour supprimer  Promotion  */
    // res.send('  supprimer')


}
exports.listerPromotion = (req, res) => {
    /**traitement pour lister Promotion  */
    PromotionModel.find({}).exec((error, PromotionList) => {
        if (error) { return res.status(400).json({ error }) }
        if (PromotionList) {
            return res.status(200).json({ PromotionList })
        }
    }
    )
}
