const {StatusCodes} = require('http-status-codes')

function pingController(req,res){
    return res.json({message: "Ping Controller is up"})
}

function addProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}

function getAllProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}

function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}

function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}

module.exports = {
    addProblem,
    getAllProblems,
    getProblem,
    updateProblem,
    deleteProblem,
    pingController
}