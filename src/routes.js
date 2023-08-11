const express = require("express");
const routes = express.Router();

const AnnotationController = require("./controllers/AnnotationController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require("./controllers/ContentController");

// Rota Annotations
routes.post("/anotacoes", AnnotationController.create); //Cria uma anotação
routes.get("/anotacoes", AnnotationController.read); //Retorna uma anotação
routes.delete("/anotacoes/:id", AnnotationController.delete); //Deleta uma anotação

// Rota Priority
routes.get("/priorities", PriorityController.read); // Verifica o boolean do priority
routes.post("/priorities/:id", PriorityController.update); // Muda o valor do boolean

// Rota Content
routes.post("/contents/:id", ContentController.update); // Altera o valor de uma anotação

module.exports = routes;
