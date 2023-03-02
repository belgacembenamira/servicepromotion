const express = require("express");
const router = express.Router()

const ServiceControlle = require('../Controllers/ServiceControlle')

router.post("/ajouter", ServiceControlle.ajouterService)
router.post("/:idService/modifier", ServiceControlle.modifierService)
router.get("/:idService/supprimer", ServiceControlle.supprimerService)
router.get("/lister", ServiceControlle.listerService)
module.exports=router