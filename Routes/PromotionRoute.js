const express = require("express");
const router = express.Router()

const PromotionControlle = require('../Controllers/PromotionControlle')

router.post("/ajouter", PromotionControlle.ajouterPromotion)
router.post("/:idPromotion/modifier", PromotionControlle.modifierPromotion)
router.get("/:idPromotion/supprimer", PromotionControlle.supprimerPromotion)
router.get("/lister", PromotionControlle.listerPromotion)
module.exports=router