//Importação de pacotes.
const express = require("express");

const ongController = require("./controllers/ongController");

const incidentsController = require("./controllers/incidentController")

const profileController = require("./controllers/profileController");

const sessionController = require("./controllers/sessionController");

//Fim Importações De Controladores.

const routes = express.Router();

//cada rota tem uma finalidade
routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);
routes.get("/incidents", incidentsController.index);
routes.post("/incidents", incidentsController.create);
routes.delete("/incidents/:id", incidentsController.delete);
routes.get("/profile", profileController.index);
routes.post("/session", sessionController.create);





module.exports = routes;
    //deixando esse módulo disponivel para o index
    //fazer rota para listar estes incidentes