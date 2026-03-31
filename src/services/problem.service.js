const sanitizedMarkdown = require("../utils/markdown.Sanitizer");

class ProblemService{

    constructor(problemRepositoy){
        this.problemRepositoy = problemRepositoy;
    }

    async createProblem(problemData){
        try{
            problemData.description = sanitizedMarkdown(problemData.description)
            const problem = this.problemRepositoy.createProblem(problemData);
            return problem;
        }   
        catch(error){
            console.log(error);
            throw(error);
        }
    }

    async getAllProblems(){
        const problems = await this.problemRepositoy.getAllProblems();
        return problems;    
    }
}

module.exports = ProblemService;