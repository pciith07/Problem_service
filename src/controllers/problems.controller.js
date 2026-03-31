const NotImplemented = require('../errors/NotImplemented.js')
const {ProblemService} = require('../services')
const {ProblemRepository} = require('../repositories')
const {StatusCodes} = require('http-status-codes')
const problemService = new ProblemService(new ProblemRepository());


function pingController(req,res){
    return res.json({message: "Ping Controller is up"})
}

async function addProblem(req, res, next){
    try{
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Succesfully created a new problem",
            error: {},
            data: newProblem
        })
    }
    catch(error){
        next(error);
    }
}

async function getAllProblems(req, res, next){
    try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
                success: true,
                message: 'Succesfully fetched a new problem',
                error: {},
                data: response
        });
    }
    catch(error){
        next(error)
    }
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
