const { sanitizeMarkdownContent } = require("../utils/index");


class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    } 

    async createProblem(problemData) {
        try {
            problemData.description = sanitizeMarkdownContent(problemData.description);
            console.log("problemData after sanitization: ", problemData);
            const problem =  await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

    async deleteProblem(problemId) {
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }

}

module.exports = ProblemService;