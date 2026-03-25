const NotImplemented = require('../errors/NotImplemented.js')
const BadRequest = require('../errors/badRequest.js')
function pingController(req,res){
    return res.json({message: "Ping Controller is up"})
}

function addProblem(req, res, next){
    try{
        throw new BadRequest('addProblem');
    }
    catch(error){
        next(error);
    }
}

function getAllProblems(req, res, next){
    return next(new UnImplemented('getAllProblems'));
}

function getProblem(req, res, next){
    return next(new UnImplemented('getProblem'));
}

function updateProblem(req, res, next){
    return next(new UnImplemented('updateProblem'));
}

function deleteProblem(req, res, next){
    return next(new UnImplemented('deleteProblem'));
}

module.exports = {
    addProblem,
    getAllProblems,
    getProblem,
    updateProblem,
    deleteProblem,
    pingController
}
