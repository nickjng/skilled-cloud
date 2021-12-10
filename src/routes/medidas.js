var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/listarGeladeiras/:idFabricante",function(req,res){
    medidaController.listarGeladeiras(req,res);
})

router.get("/listarSensor/:idGeladeira",function(req,res){
    medidaController.listarSensor(req,res);
})

module.exports = router;