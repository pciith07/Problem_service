const sanitizedMarkdown = require("../utils/markdown.Sanitizer");

class ProblemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
        try{
            problemData.description = sanitizedMarkdown(problemData.description)
            const problem = this.problemRepository.createProblem(problemData);
            return problem;
        }   
        catch(error){
            console.log(error);
            throw(error);
        }
    }

    async getAllProblems(){
        const problems = await this.problemRepository.getAllProblems();
        return problems;    
    }

    async getProblem(id){
        const problem = await this.problemRepository.getProblem(id);
        return problem;
    }
}

module.exports = ProblemService;