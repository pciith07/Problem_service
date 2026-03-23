const express = require('express');
const {problemController} = require('../../controllers/index')

const problemRouter = express.Router();

problemRouter.get('/ping',problemController.pingController);

problemRouter.get('/',problemController.getAllProblems);

problemRouter.get('/:id',problemController.getProblem);

problemRouter.post('/',problemController.addProblem);

problemRouter.delete('/:id',problemController.deleteProblem);

problemRouter.put('/:id',problemController.updateProblem);

module.exports = {
    problemRouter
};
