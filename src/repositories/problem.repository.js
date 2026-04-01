const {Problem} = require('../models')
const NotFoundError = require('../errors/notFoundError.js')

class ProblemRepository {
    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                title: problemData.title,
                description : problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases  : []  
            });
                return problem
        }
        catch(error){
            console.log(error)
        }
    }

    async getAllProblems(){
        const problems = await Problem.find();
        return problems;

    }

    async getProblem(id){
        const problem = await Problem.findById(id);
        if(!problem){
            throw new NotFoundError("Problem",id);
        }
        return problem;
    }

    async deleteProblem(id){
        const problem = await Problem.findByIdAndDelete(id);
        if(!problem){
            throw new NotFoundError("Problem",id);
        }
        return problem;

    }

    async updateProblem(id,problemData){
        
            const problem = await Problem.findByIdAndUpdate(
                id,
                problemData,
                {new: true, runValidators:true});
            
                if(!problem){
                    throw new NotFoundError("Problem",id);
                }
        return problem;

    }
}

module.exports = ProblemRepository;
