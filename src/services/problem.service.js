const { deleteProblem } = require("../controllers/problems.controller");
const sanitizedMarkdown = require("../utils/markdown.Sanitizer");
const {filterObject} = require("../utils/filter");

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

    async deleteProblem(id){
        const problem = await this.problemRepository.deleteProblem(id);
        return problem;
    }

    async updateProblem(id,problemData){
        const allowedFields = ["title", "description", "difficulty", "testcases", "editorial"];
        const filteredData = filterObject(problemData, allowedFields);
        
        if(filteredData.description != undefined){
            filteredData.description = sanitizedMarkdown(filteredData.description);
        }

        if(filteredData.editorial !== undefined){
            filteredData.editorial = sanitizedMarkdown(filteredData.editorial);
        }

        return await this.problemRepository.updateProblem(id,filteredData);
    }
}

module.exports = ProblemService;
