const fastify = require('fastify');
const Submission = require('../models/submissionModels')
class SubmissionRepository {
    constructor(){
        this.submissionModel = Submission;
    }
    async createSubmission(submission){
        const newSubmission = await this.submissionModel.create(submission);
        return newSubmission;
    }
}

module.exports = SubmissionRepository;
